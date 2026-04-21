// Endpoint Vercel Serverless para processar o Form e enviar ao Airtable
export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, whatsapp } = req.body;

    if (!name || !email || !whatsapp) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || "Leads";

    if (!apiKey || !baseId) {
      console.warn("Airtable não configurado no Vercel Environments. Simulando sucesso.");
      await new Promise(r => setTimeout(r, 1000));
      return res.status(200).json({ success: true, dummy: true });
    }

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Nome: name,
              Email: email,
              WhatsApp: whatsapp,
              Origem: "Landing Page PDF Automação IA",
              DataCadastro: new Date().toISOString()
            }
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Airtable Error API:", errorData);
      return res.status(500).json({ error: "Erro ao salvar no Airtable. Verifique as configurações." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}

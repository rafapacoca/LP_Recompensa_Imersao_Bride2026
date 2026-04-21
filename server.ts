import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Airtable Lead Capture Endpoint
  app.post("/api/lead", async (req, res) => {
    try {
      const { name, email, whatsapp } = req.body;
      
      if (!name || !email || !whatsapp) {
        return res.status(400).json({ error: "Campos obrigatórios ausentes." });
      }

      const apiKey = process.env.AIRTABLE_API_KEY;
      const baseId = process.env.AIRTABLE_BASE_ID;
      const tableName = process.env.AIRTABLE_TABLE_NAME || "Leads";

      if (!apiKey || !baseId) {
        return res.status(500).json({ 
          error: "ATENÇÃO: As chaves do Airtable (AIRTABLE_API_KEY e AIRTABLE_BASE_ID) não foram configuradas." 
        });
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
          ],
          typecast: true
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Airtable Error API:", errorData);
        const airtableError = errorData?.error?.message || errorData?.error?.type || JSON.stringify(errorData);
        return res.status(500).json({ error: `Erro retornado pelo Airtable: ${airtableError} (Verifique se as colunas existem com os nomes exatos!)` });
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erro interno:", error);
      res.status(500).json({ error: "Erro interno no servidor." });
    }
  });

  // Vite integration for Preview & Development Mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Support for Hybrid SPA routing
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

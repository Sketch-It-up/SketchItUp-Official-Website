import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client lazily or safely
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!ai && process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "SketchItUp Solutions - Owner OS" });
});

// API Copilot Endpoint - AI Business Insights
app.post("/api/copilot", async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const gemini = getGeminiClient();
    if (gemini) {
      const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are SketchItUp AI Copilot, an intelligence layer embedded in SketchItUp Owner OS — an AI-Enabled Business Operating System for manufacturing & SME business owners.
The user is a business owner asking: "${prompt}".
Context provided: ${JSON.stringify(context || {})}

Provide a concise, highly actionable executive answer formatted in clear points.
Structure your response as:
1. Executive Direct Answer (1-2 sentences)
2. Key Operational Metrics & Root Causes
3. Recommended Owner Decision/Action (Immediate next step)

Keep tone authoritative, professional, owner-centric, and clear. Do not use generic filler.`
              }
            ]
          }
        ]
      });

      return res.json({
        reply: response.text,
        source: "gemini-live"
      });
    }

    // Fallback smart response if GEMINI_API_KEY is missing
    const fallbackResponses: Record<string, string> = {
      production: "⚡ **Production Insight**: Machine #3 in Plant B is currently operating at 82% efficiency due to a 42-minute line maintenance delay. Raw material batch #RM-408 has arrived and passed QA, freeing up Line 2 to accelerate shipment #ORD-9821 by 4 hours.",
      inventory: "📦 **Inventory Risk Analysis**: Steel Sheet Grade-A stock is predicted to drop below safety buffer (150 units) in 4 days based on current dispatch rates. Reorder recommendation: Trigger PO #SUP-302 for 500 units to avoid 12% production margin loss.",
      cashflow: "💰 **Cash Flow Forecast**: Outstanding AR total $42,500 across 3 client invoices due in <7 days. Cash buffer is healthy at $128,400. Recommending early payment prompt for Invoice #INV-1092 with 1.5% discount incentive to optimize weekend working capital."
    };

    let selectedReply = fallbackResponses.production;
    const lower = prompt.toLowerCase();
    if (lower.includes("inventory") || lower.includes("stock")) selectedReply = fallbackResponses.inventory;
    if (lower.includes("cash") || lower.includes("finance") || lower.includes("money") || lower.includes("ar")) selectedReply = fallbackResponses.cashflow;

    return res.json({
      reply: `${selectedReply}\n\n*Note: Operating on SketchItUp Owner OS Simulation Engine.*`,
      source: "simulation"
    });
  } catch (err: any) {
    console.error("Copilot API error:", err);
    res.status(500).json({ error: "Failed to generate copilot response", details: err.message });
  }
});

// Demo Booking & Custom Solution Lead Ingestion
app.post("/api/leads", (req, res) => {
  const { name, company, phone, email, type, modules, challenge } = req.body;
  console.log(`[LEAD RECEIVED] ${type || 'Demo'}:`, { name, company, phone, email, modules, challenge });
  
  res.json({
    success: true,
    message: "Thank you! Your request has been received by SketchItUp Solutions. An Operations Advisor will contact you within 2 business hours.",
    referenceId: `SIU-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SketchItUp Solutions server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

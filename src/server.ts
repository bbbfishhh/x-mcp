import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

console.log("🚀 X High-Quality MCP Server starting...");

const server = new McpServer({
  name: "x-mcp",
  version: "0.1.0",
});

// Core quality scoring logic (simple version for now)
function calculateQualityScore(post: any): number {
  let score = 50;
  if (post.verified) score += 20;
  if ((post.likes || 0) > 100) score += 10;
  if ((post.replies || 0) < (post.likes || 0) * 0.3) score += 15; // low noise
  if (post.threadDepth && post.threadDepth > 3) score += 15;
  return Math.min(100, Math.max(0, score));
}

// Tool 1: Fetch high-quality posts
server.tool(
  "fetch_high_quality_posts",
  "Fetch and rank high-quality X posts for a topic. Applies strict quality scoring to reduce noise.",
  {
    topic: z.string().describe("Main topic or search query (e.g. 'AI agent evaluation')"),
    limit: z.number().default(5).describe("Maximum number of high-quality posts to return"),
    minScore: z.number().default(75).describe("Minimum quality score threshold (0-100)"),
  },
  async ({ topic, limit, minScore }) => {
    // TODO: Replace placeholder with real X API v2 call or playwright scraping (reuse agent-browser patterns)
    const mockPosts = [
      {
        id: "1",
        text: "Thread on why most agent eval benchmarks are misleading. Focus on trace, memory and state instead of final score.",
        username: "@important_researcher",
        verified: true,
        likes: 1240,
        replies: 87,
        threadDepth: 12,
        url: "https://x.com/important_researcher/status/1",
      },
      {
        id: "2",
        text: "Practical guide: How we reduced hallucination in our X data pipeline by 68% using quality filters.",
        username: "@ai_engineer_pro",
        verified: true,
        likes: 630,
        replies: 42,
        threadDepth: 8,
        url: "https://x.com/ai_engineer_pro/status/2",
      },
    ];

    const scoredPosts = mockPosts.map((p) => ({
      ...p,
      qualityScore: calculateQualityScore(p),
      qualityReason: "High engagement from verified account + strong thread depth + low reply noise",
    })).filter((p) => p.qualityScore >= minScore)
      .slice(0, limit);

    return {
      content: [{
        type: "text",
        text: `High-quality X posts for "${topic}" (minScore ≥ ${minScore}):\n\n` +
              scoredPosts.map((p, i) => 
                `${i+1}. [${p.qualityScore}] @${p.username.split('@')[1]} — ${p.text.substring(0, 120)}...\n` +
                `   Score reason: ${p.qualityReason}\n` +
                `   Link: ${p.url}\n`
              ).join("\n") +
              `\n\nNote: This is a working MCP tool. Next step is to replace mock data with real X API + Playwright integration.`
      }],
    };
  }
);

// Tool 2: Summarize a thread with quality context
server.tool(
  "summarize_thread",
  "Summarize an X thread while preserving key insights and noting quality of the source.",
  {
    postUrl: z.string().describe("Full URL of the X post/thread"),
  },
  async ({ postUrl }) => {
    // TODO: Implement real thread fetching + summarization
    return {
      content: [{
        type: "text",
        text: `Thread summary for ${postUrl}:\n\n` +
              `Key Insight: Focus on process traces rather than final outputs when evaluating agents.\n` +
              `Quality: 89/100 (verified author, deep thread, low toxicity)\n` +
              `Why high quality: Contains concrete implementation details instead of hype.`
      }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("X MCP Server running on stdio. Ready for high-quality information requests.");
}

main().catch((error) => {
  console.error("Fatal error in X MCP server:", error);
  process.exit(1);
});

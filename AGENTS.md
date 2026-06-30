# AGENTS.md for x-mcp

Instructions for AI coding agents (Grok, Claude, etc.) working on this X MCP server.

## Project Principles (from Life/AGENTS.md)
- **不要从0到1**：不要造全新品类。参考现有 MCP servers (chrome-devtools, playwright) 和 X 相关 skills (x-article-publisher, social-post)。
- **本分、简单、极致**：只聚焦“高质量 X 信息获取、过滤、总结”这一个核心痛点。砍掉所有“听起来很酷”的功能。
- 优先使用高质量信号：verified accounts、high engagement from credible users、thread depth、low reply-to-noise ratio。

## Tech Stack & Tooling
- **Language**: TypeScript/Node.js (align with agent-browser).
- **Package Manager**: pnpm (see agent-browser).
- **MCP Implementation**: Follow official Model Context Protocol spec. Implement as stdio or HTTP server exposing tools.
- **Browser Automation**: Reuse patterns from `agent-browser` (Playwright, chrome-devtools MCP).
- **X Data Sources**: 
  1. Official X API v2 (preferred, requires bearer token).
  2. Playwright-based scraping for public data (when API limits hit).
  3. Quality scoring logic (custom, not just likes).

## File Structure (to be created)
```
x-mcp/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── package.json
├── tsconfig.json
├── src/
│   ├── server.ts          # MCP server entry
│   ├── tools/             # Individual MCP tools
│   ├── quality-scorer.ts  # Core high-quality filtering logic
│   └── x-client.ts        # X API / scraping client
├── skills/
│   └── x-mcp/SKILL.md     # Trigger description for this skill
└── tests/
```

## Coding Rules
- Every new tool must have clear JSON schema (for MCP).
- Always include quality scoring (engagement + credibility + signal-to-noise).
- Document all tools in SKILL.md and README.
- Add to CLAUDE.md any project-specific conventions.
- Before committing, run `pnpm lint`, `pnpm build`, and test tools.

## Git & GitHub
- Use email: 18036121312@163.com
- Keep commits atomic and focused on quality improvements.

This file will evolve. Update it whenever architecture decisions are made.

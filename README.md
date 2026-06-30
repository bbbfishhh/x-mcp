# x-mcp

X (Twitter) High-Quality Information MCP Server.

**Purpose**: Provide Model Context Protocol (MCP) tools for Grok/Claude to reliably fetch, filter, curate, and summarize **high-quality** content from X, reducing noise and focusing on high-signal posts, threads, and accounts.

## Core Pain Point Addressed
- Users frequently want high-quality X information but are overwhelmed by noise, ads, low-quality replies, and algorithmic feed.
- This MCP focuses on **curation, quality scoring, thread summarization, and topic-based high-signal retrieval**.

## Key Features (MCP Tools)
- `fetch_high_quality_posts(topic, limit, min_score)`
- `search_x_by_topic(query, options)`
- `summarize_thread(post_url or id)`
- `get_curated_feed(following_list, filters)`
- `get_account_insights(username)`

Built to integrate with existing MCP clients (chrome-devtools, playwright patterns).

## Tech Stack
- **TypeScript** + Node.js (recommended for MCP ecosystem)
- Uses X API, scraping (via playwright/browser tools), or official X API v2 where possible.
- Follows Life project conventions (Johnny Decimal, AGENTS.md, CLAUDE.md).

## Development

```bash
cd 20-Output/22-Projects/x-mcp
pnpm install
pnpm dev
```

See `AGENTS.md` for agent coding rules.

## Related
- Life/20-Output/22-Projects/agent-browser (reference for MCP + browser automation)
- Life/20-Output/23-Content/x-article-publisher-skill (existing X publishing tools)

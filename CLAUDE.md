# CLAUDE.md for x-mcp

## Project Overview
X High-Quality MCP Server — allows AI agents to pull high-signal information from X (Twitter) via standardized MCP tools.

**Trigger conditions for this skill**:
- User wants to consume or analyze high-quality X content without noise.
- Requests for X curation, thread summaries, topic-based high-quality feeds.
- Building or extending MCP servers for social media intelligence.

## Coding Conventions
- Follow AGENTS.md strictly.
- Quality first: Implement `qualityScore` on every post (0-100) based on:
  - Account credibility (verified, follower ratio, past signal).
  - Thread depth and coherence.
  - Engagement quality (likes/replies ratio, not raw numbers).
  - Low toxicity/noise.
- Prefer official X API when possible; fall back to playwright-based fetching (reuse agent-browser patterns).
- All tools must return structured JSON suitable for LLM consumption (with `reasoning` field explaining quality score).

## Integration
- This MCP can be used alongside existing ones (chrome-devtools, playwright).
- Output from tools should be directly usable in daily briefs, research, or agent loops.

Update this file after major architecture decisions.

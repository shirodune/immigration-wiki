# Immigration Wiki

A hands-on Study Abroad and Immigration LLM Wiki practice project built with
[Quartz](https://quartz.jzhao.xyz/) and maintained using Hermes Agent's
`llm-wiki` skill.

**Future live wiki:** <https://immigration-wiki.deploy-agent.dev/>

The project practices provenance-first research: preserving source records,
separating evidence from inference, recording contradictions, and publishing
only explicitly approved pages.

## How it is maintained

- [Hermes Agent](https://github.com/NousResearch/hermes-agent) and its
  `llm-wiki` skill guide source evaluation, provenance, synthesis, and wiki
  consistency.
- Quartz turns the interlinked Markdown knowledge base under `content/` into a
  searchable static website.
- Automated checks ensure that only a genuine YAML Boolean `publish: true` can
  make a page public.

The repository separates wiki maintenance under `content/` from publishing
infrastructure such as Quartz, verification, CI, and deployment. Infrastructure
is initialized and ready; `content/` currently holds only a placeholder and is
maintained separately in the wiki-maintenance session. See `AGENTS.md` for
ownership boundaries and publication rules.

## Commands

```bash
npm ci
npm run install-plugins
npm run check
npm test
npm run build
npm run verify:publication
```

`verify:publication` performs a fresh build and is the required deployment gate.
Only a genuine YAML Boolean `publish: true` is public. Quoted strings are private.
Non-Markdown assets are currently forbidden under `content/` because Quartz can
emit assets independently of page filters; request an infrastructure change if
public image or document support is needed later.

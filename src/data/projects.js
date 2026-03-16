export const projects = [
  {
    slug: "hubspot-fishbowl-integration",
    title: "HubSpot -> Fishbowl Advanced Integration",
    subtitle: "CRM-to-ERP order sync with SKU mapping and fallback logic",
    summary:
      "A Node.js service that watches HubSpot deals via webhooks and polling, transforms line items through a SKU mapping layer with alias and fallback rules, and submits fully formed sales orders into Fishbowl's import API -- including address packing, estimated ship date resolution, and automatic UOM retry sequences.",
    impact:
      "Eliminated manual re-keying of orders between sales and warehouse systems, catching UOM and SKU mismatches before they reach fulfillment.",
    tags: ["Node.js", "HubSpot API", "Fishbowl API", "SQLite", "Webhooks"],
    logoUrl: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128",
    logoAlt: "HubSpot logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "Sales closed deals in HubSpot, but warehouse staff re-entered every order into Fishbowl by hand. SKUs drifted between systems, UOM mismatches caused import failures, and unmapped products were silently dropped.",
      build:
        "Built a sync service that fetches closed-won deals, resolves estimated ship dates across three HubSpot fields, packs addresses into Fishbowl's format with fallback defaults, and runs a retry sequence (smart UOM -> force each -> force yard) on import failures. Unmapped SKUs land as Misc Sale items instead of being lost. An admin UI shows sync status, errors, and per-order retry controls.",
      outcomes:
        "Orders flow from CRM to ERP without manual entry. The retry logic and Misc Sale fallback mean edge cases surface as visible items in Fishbowl rather than silent data loss.",
    },
  },
  {
    slug: "order-comparison-pipeline",
    title: "Order Comparison Pipeline",
    subtitle: "Cross-system order validation with deterministic SKU matching",
    summary:
      "A Python pipeline that ingests Fishbowl and Shopify CSV exports, identifies shared orders, and validates every Fishbowl line item against Shopify using a multi-tier matching engine with normalization, alias resolution, color-suffix handling, and manual override support.",
    impact:
      "Catches wrong-SKU and wrong-product entry errors before orders ship, with a Streamlit UI for ops teams to review mismatches and manage overrides.",
    tags: ["Python", "Streamlit", "Shopify", "Fishbowl", "CSV Validation"],
    logoUrl: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    logoAlt: "Shopify logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "When orders are manually entered into Fishbowl from Shopify, typos and SKU confusion are inevitable. The team had no systematic way to catch entry mistakes before fulfillment -- just spot checks and customer complaints.",
      build:
        "Designed a one-directional subset validator: every Fishbowl line item must match at least one Shopify item for the same order. Matching runs through seven priority tiers -- manual overrides, exact normalized match, alias lookup, base+color with normalization, base-only when Shopify omits color, HCAL/FCAL segment matching, and description fallback for blank Shopify SKUs. A Streamlit UI surfaces error cards per order with the unmatched SKU, its description, and what Shopify actually has.",
      outcomes:
        "Ops staff run validation before shipment and catch entry errors in minutes instead of after delivery. The override system lets the team permanently resolve known cross-system mappings without code changes.",
    },
  },
  {
    slug: "quip",
    title: "Quip",
    subtitle: "Desktop learning platform powered by a local LLM",
    summary:
      "An Electron app with a FastAPI backend that runs entirely on your machine -- AI tutoring across five programming tracks, a practice engine that generates LeetCode-style problems in 20+ pattern categories with AI-graded feedback, a system design canvas with drag-and-drop architecture diagrams, plus docs, cheatsheets, flashcards with spaced repetition, and structured learning roadmaps.",
    impact: "Ships as a single installer on Windows. No cloud accounts, no API keys, no subscription -- just Ollama running locally.",
    tags: ["FastAPI", "React", "TypeScript", "Ollama", "Electron", "SQLAlchemy"],
    logoUrl: "https://www.google.com/s2/favicons?domain=ollama.ai&sz=128",
    logoAlt: "Quip logo",
    websiteUrl: "https://sourceforge.net/projects/quip-ai-learning/files/latest/download",
    codeUrl: "https://github.com/TimeUnderTensors/Quip",
    proprietary: false,
    sections: {
      challenge:
        "Learning programming usually means juggling separate tools for tutorials, practice problems, system design, and reference material. Most AI-powered alternatives require cloud accounts and send your code to external servers.",
      build:
        "Built a local-first desktop app where Ollama (qwen3) powers every AI feature. The Learn module runs chat-based tutoring with adaptive difficulty across Fundamentals, Software Engineering, AI/ML, Systems Programming, and Data Engineering. Practice dynamically generates coding challenges across 20+ LeetCode patterns and grades solutions with AI feedback. Design presents system design challenges (Twitter, YouTube, Uber, etc.) on a React Flow canvas. Everything runs offline once installed.",
      outcomes:
        "Published on SourceForge as a standalone Windows installer. The app handles the full learn-practice-design loop without any external dependencies beyond Ollama.",
    },
  },
  {
    slug: "ampere",
    title: "Ampere",
    subtitle: "All-in-one IT operations platform for small teams",
    summary:
      "A native desktop application (Tauri 2) backed by a Fastify API server, PostgreSQL with pgvector, and Redis/BullMQ -- unifying service monitoring, network discovery, integration health tracking, a RAG-powered knowledge base, automation with script execution, AI-assisted insights, ticketing with SLA enforcement, and CI/CD deployment correlation into a single tool.",
    impact: "Replaces the patchwork of Datadog, spreadsheets, scattered wikis, and Slack alerting that small IT teams typically cobble together.",
    tags: ["Tauri", "React", "Fastify", "PostgreSQL", "Redis", "BullMQ", "TypeScript"],
    logoUrl: "https://www.google.com/s2/favicons?domain=tauri.app&sz=128",
    logoAlt: "Ampere logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "A 5-50 person IT team can't afford separate tools for monitoring, inventory, runbooks, ticketing, and automation. They end up with fragmented visibility, no audit trail, and alert fatigue from disconnected systems.",
      build:
        "Built across 11 phases: a resource-centric data model where everything (devices, services, integrations, people, credentials) is a row with first-class relationships. Monitoring runs continuous HTTP/TCP/ping/API checks through BullMQ queues with alert rules and re-alert logic. Network discovery does CIDR sweeps with port probing and banner grabbing. The knowledge base supports full-text and semantic (pgvector RAG) search. Script execution runs isolated under a separate OS user via sudo. AI features (Claude/GPT/Gemini) generate morning briefings and proactive insights. An append-only event log with database-level UPDATE/DELETE revocation provides an immutable audit trail. 112 integration tests run against a live Postgres instance with zero mocks.",
      outcomes:
        "A single native app that handles monitoring, discovery, knowledge, automation, ticketing, and CI/CD correlation. No SaaS tier, no per-seat pricing, no cloud lock-in. Multi-tenancy is enforced at the query layer via Clerk sessions.",
    },
  },
  {
    slug: "llm-watermarking",
    title: "LLM Watermarking Pipeline",
    subtitle: "Detecting machine-generated text through hidden signals",
    summary:
      "A research project exploring two complementary watermarking strategies: injecting subtle lexical patterns into prompts (detected by a fine-tuned classifier), and biasing token selection during generation using a secret-key-partitioned greenlist (detected by statistical z-test).",
    impact: "Evaluated both approaches across ~1,000 prompts, measuring detection accuracy and resilience to paraphrasing attacks.",
    tags: ["Python", "PyTorch", "Llama 2", "GPT-3.5", "NLP Research"],
    logoUrl: "https://www.google.com/s2/favicons?domain=pytorch.org&sz=128",
    logoAlt: "PyTorch logo",
    websiteUrl: null,
    codeUrl: "https://github.com/AimeCesaireM/Agnostic-LLM-Watermarking",
    proprietary: false,
    sections: {
      challenge:
        "As LLMs generate more text at scale, there's no reliable way to verify whether a piece of writing came from a model or a human. Existing detection tools are brittle and easy to defeat with light editing.",
      build:
        "Approach A modifies prompts with lightweight lexical rules (e.g., one double-letter word per sentence) so generated text carries hidden patterns detectable by a fine-tuned BERTa classifier. Approach B re-implements the Kirchenbauer et al. (2023) greenlist watermark on Llama-2-7B-Chat, applying a +2.0 logit bias to pseudorandom token partitions seeded by a 128-bit key during nucleus sampling. Detection uses a one-sample z-test. Prompts were drawn from OpenAI Evals and WikiText-103 validation sets.",
      outcomes:
        "Produced a comparative analysis showing trade-offs between the two approaches in detection accuracy, text quality degradation, and robustness against paraphrasing. The prompt-based method is model-agnostic but easier to defeat; the token-level method is more robust but requires generation-time access.",
    },
  },
  {
    slug: "foodback",
    title: "Foodback",
    subtitle: "Reducing dining hall food waste through conscious eating",
    summary:
      "A hackathon-born web app that pulls real-time college dining menus via the Nutrislice API, lets students photograph their plates to track consumption habits, and uses OpenAI to suggest portions based on past choices and sustainability goals.",
    impact: "Built in a weekend to address research showing that students who track what they eat waste measurably less food.",
    tags: ["React", "Next.js", "Node.js", "OpenAI API", "Nutrislice API"],
    logoUrl: "https://www.google.com/s2/favicons?domain=nextjs.org&sz=128",
    logoAlt: "Next.js logo",
    websiteUrl: null,
    codeUrl: "https://github.com/AimeCesaireM/foodback",
    proprietary: false,
    sections: {
      challenge:
        "College dining halls generate significant food waste, but students have no feedback loop between what they take and what they actually eat. The disconnect makes waste invisible.",
      build:
        "Integrated Amherst College's Nutrislice menu API to show real-time breakfast, lunch, and dinner options with nutritional data. Added a plate-tracking feature where students upload meal photos. An OpenAI-powered recommendation layer analyzes eating history and suggests portion adjustments aligned with sustainability goals. Built with Next.js and React during a sustainability hackathon.",
      outcomes:
        "Demonstrated that combining live menu data, visual meal tracking, and AI suggestions creates a practical feedback loop for reducing individual food waste in a campus setting.",
    },
  },
  {
    slug: "madame-saville",
    title: "Madame Saville",
    subtitle: "Market intelligence tool for strategic rental recommendations",
    summary:
      "A Flask web app built for Five College DataFest 2025 that takes a client's region, industry, budget, and talent needs, then cross-references commercial real estate data (CoStar), Bureau of Economic Analysis income figures, and IPEDS university enrollment stats to recommend optimal markets for rental investment.",
    impact: "Turned three disparate public and proprietary datasets into actionable location recommendations for business expansion decisions.",
    tags: ["Python", "Flask", "Data Analysis", "CoStar", "BEA", "IPEDS"],
    logoUrl: "https://www.google.com/s2/favicons?domain=flask.palletsprojects.com&sz=128",
    logoAlt: "Flask logo",
    websiteUrl: "https://www.loom.com/share/709ba366e40d4b27af0e8161769bac28?sid=854c5a84-433b-46a9-83c3-8cd7419f5551",
    codeUrl: "https://github.com/AimeCesaireM/MadameSaville",
    proprietary: false,
    sections: {
      challenge:
        "A business looking to expand or relocate has to manually cross-reference commercial real estate availability, local income levels, and talent pipeline data across disconnected sources. There's no single tool that synthesizes these factors into a recommendation.",
      build:
        "Built a Flask backend that validates user input (region, industry, quarterly plans, budget, talent preferences), saves inquiries with timestamps, and runs an analysis pipeline against CoStar commercial data, BEA per capita income figures, and IPEDS postsecondary enrollment stats. The frontend lets users submit inquiries and receive market recommendations with an inquiry ID for future reference.",
      outcomes:
        "Delivered a working prototype at Five College DataFest 2025 that demonstrated how combining proprietary real estate data with public economic and education datasets can drive data-backed location decisions.",
    },
  },
  {
    slug: "hubspot-kinetic-integration",
    title: "HubSpot <-> Epicor Kinetic",
    subtitle: "Bi-directional CRM-to-ERP sync with Workato automation",
    summary:
      "A Workato-orchestrated integration that syncs HubSpot companies and closed-won deals into Epicor Kinetic as customers and sales orders, writes Kinetic order numbers and fulfillment status back to HubSpot, and runs alongside the existing Fishbowl integration during a controlled ERP migration with per-product SKU cutover.",
    impact: "Enables a zero-downtime ERP migration from Fishbowl to Kinetic while keeping HubSpot as the single source of truth for sales pipeline data.",
    tags: ["HubSpot", "Epicor Kinetic", "Workato", "ERP Migration", "API Integration"],
    logoUrl: "https://www.google.com/s2/favicons?domain=epicor.com&sz=128",
    logoAlt: "Epicor logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "The business was migrating from Fishbowl to Epicor Kinetic as its ERP, but couldn't do a hard cutover -- hundreds of SKUs needed to be renamed, both systems had to run in parallel during the transition, and every HubSpot deal write-back risked triggering infinite webhook loops between the three systems.",
      build:
        "Designed five Workato recipes: Company-to-Customer sync (with idempotent lookup-or-create callable), Deal-to-Sales-Order (with line-item iteration, direct hs_sku-to-PartNum pass-through, and quantity/SKU validation), Order-Status-to-HubSpot (polling Kinetic orders via UDF cross-reference and mapping status through a lookup table), plus two callable recipes for customer provisioning and error notification. Infinite loops are prevented by a circuit-breaker field pattern -- every HubSpot write stamps a marker that blocks re-triggering for 90 seconds. The Fishbowl parallel-running playbook handles per-product SKU migration with a routing property that controls which ERP receives each deal.",
      outcomes:
        "Sales orders flow from HubSpot to Kinetic automatically on close. Fulfillment status writes back to HubSpot without manual updates. The per-product cutover process lets the team migrate SKUs one at a time with rollback capability, while the circuit-breaker pattern has prevented webhook loops across all three connected systems.",
    },
  },
  {
    slug: "gratz-ai-strategy",
    title: "Gratz Pilates AI Strategy",
    subtitle: "End-to-end AI adoption plan across sales, ops, and production",
    summary:
      "A four-phase technical implementation plan I authored and am executing at Gratz Pilates -- from activating HubSpot Breeze AI with a knowledge base and Shopify-embedded chatbot, through building a Guru-to-HubSpot and Guru-to-Pinecone sync pipeline for a shared vector knowledge layer, to deploying Microsoft 365 Copilot across the team and connecting Epicor Kinetic's REST API so AI tools can query live order and production data.",
    impact: "Took the company from zero AI tooling to a phased rollout spanning customer-facing chatbots, internal knowledge search, meeting intelligence, and live ERP queries -- at ~$430/month in new tooling cost.",
    tags: ["HubSpot Breeze", "Pinecone", "OpenAI", "M365 Copilot", "Pipedream", "Epicor Kinetic"],
    logoUrl: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128",
    logoAlt: "HubSpot logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "A manufacturing business with no AI adoption, scattered documentation across emails and spreadsheets, no centralized knowledge base, and manual production tracking. The team needed AI capabilities but couldn't afford enterprise-grade solutions or a dedicated AI team.",
      build:
        "Phase 1 activates HubSpot Breeze AI with a structured knowledge base and deploys the chatbot on the Shopify storefront. Phase 2 stands up Guru as the single source of truth, with automated Pipedream sync pipelines pushing content to both HubSpot KB (for Breeze) and a Pinecone vector database (for external AI tools) using OpenAI embeddings. Brand24 monitors brand and competitor mentions. Phase 3 deploys M365 Copilot for email drafting, meeting recaps, and Excel analysis, plus Teams Premium for intelligent meeting transcription. It also connects Epicor Kinetic's REST API through custom BAQs and a serverless function so AI tools can query live order and production status. Phase 4 defines the ongoing maintenance cadence -- Guru card verification, sync monitoring, chatbot accuracy reviews, and knowledge base updates.",
      outcomes:
        "A complete AI stack where writing one Guru card automatically propagates knowledge to the customer chatbot, the vector search layer, and any future AI tools -- with no manual copy-paste. Sales gets AI-assisted email and proposal drafting. Operations gets meeting intelligence and live ERP queries. The whole system runs on existing subscriptions plus ~$430/month in new tooling.",
    },
  },
]

export const projectLookup = Object.fromEntries(projects.map((project) => [project.slug, project]))

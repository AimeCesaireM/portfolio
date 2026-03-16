export const projects = [
  {
    slug: "hubspot-fishbowl-integration",
    title: "HubSpot -> Fishbowl Advanced Integration",
    subtitle: "Order + inventory automation pipeline",
    summary:
      "Node.js middleware and Java plugin integration to sync SKU, customer, and order data between CRM and ERP.",
    impact:
      "Reduced manual order entry and improved inventory fidelity between business systems.",
    tags: ["Node.js", "Java", "HubSpot", "Fishbowl", "API Integration"],
    logoUrl: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128",
    logoAlt: "HubSpot logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "Sales and operations teams had inconsistent order and SKU records between HubSpot and Fishbowl, causing fulfillment delays.",
      build:
        "Built a resilient sync service with event-driven updates, conflict handling, and observability hooks to detect data drift.",
      outcomes:
        "Improved order processing reliability and lowered human reconciliation overhead for ops teams.",
    },
  },
  {
    slug: "order-comparison-pipeline",
    title: "Order Comparison Pipeline",
    subtitle: "Fishbowl-Shopify reconciliation system",
    summary:
      "Python + Streamlit workflow to compare cross-platform orders, score mismatches, and queue correction actions.",
    impact:
      "Surface SKU and quantity mismatches quickly so teams can fulfill with confidence.",
    tags: ["Python", "Streamlit", "Shopify", "Fishbowl", "Data Reconciliation"],
    logoUrl: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    logoAlt: "Shopify logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "Order states diverged across systems and manual reconciliation was too slow during fulfillment windows.",
      build:
        "Created staged matching logic, confidence scoring, and exception reports with a lightweight operations UI.",
      outcomes:
        "Helped teams triage discrepancies earlier and avoid downstream shipping errors.",
    },
  },
  {
    slug: "quip",
    title: "Quip",
    subtitle: "AI-powered programming learning platform",
    summary:
      "Local-first educational platform with tutoring, generated practice, system design workflows, and progress tracking.",
    impact: "Combined tutoring and deliberate practice in one integrated product loop.",
    tags: ["FastAPI", "React", "TypeScript", "Ollama", "Electron"],
    logoUrl: "https://www.google.com/s2/favicons?domain=ollama.ai&sz=128",
    logoAlt: "Quip logo",
    websiteUrl: "https://sourceforge.net/projects/quip-ai-learning/files/latest/download",
    codeUrl: "https://github.com/TimeUnderTensors/Quip",
    proprietary: false,
    sections: {
      challenge:
        "Most learning tools split tutoring, coding practice, and systems design into disconnected surfaces.",
      build:
        "Designed a cohesive app with AI tutoring, challenge generation, and design-canvas workflows powered by local LLMs.",
      outcomes:
        "Enabled a continuous learn-practice-design feedback loop with personalized recommendations.",
    },
  },
  {
    slug: "ampere",
    title: "Ampere",
    subtitle: "IT operations for small teams",
    summary:
      "Unified desktop ops platform for monitoring, inventory, automation, ticketing, and incident workflows.",
    impact: "Reduced tooling fragmentation for small IT teams operating under tight budgets.",
    tags: ["Tauri", "React", "Fastify", "PostgreSQL", "Redis"],
    logoUrl: "https://www.google.com/s2/favicons?domain=tauri.app&sz=128",
    logoAlt: "Ampere logo",
    websiteUrl: null,
    codeUrl: null,
    proprietary: true,
    sections: {
      challenge:
        "Small teams often juggle multiple siloed tools for discovery, monitoring, runbooks, and ticketing.",
      build:
        "Built a unified native app architecture spanning discovery, check engine, automation rules, and incident support.",
      outcomes:
        "Created a single-pane operational workflow with better visibility and lower context-switching cost.",
    },
  },
  {
    slug: "llm-watermarking",
    title: "LLM Watermarking Pipeline",
    subtitle: "Prompt-based and token-level watermarking for LLM output",
    summary:
      "Two complementary approaches to embedding imperceptible, machine-detectable signals into LLM-generated text: prompt-based semantic watermarking via GPT-3.5-Turbo and token-level greenlist watermarking via Llama-2-7B-Chat.",
    impact: "Demonstrated reliable watermark detection across paraphrasing attacks and diverse prompt distributions.",
    tags: ["Python", "PyTorch", "Llama 2", "GPT-3.5", "NLP Research"],
    logoUrl: "https://www.google.com/s2/favicons?domain=pytorch.org&sz=128",
    logoAlt: "PyTorch logo",
    websiteUrl: null,
    codeUrl: "https://github.com/AimeCesaireM/Agnostic-LLM-Watermarking",
    proprietary: false,
    sections: {
      challenge:
        "LLMs generate text at scale with no built-in provenance tracking, making plagiarism and misinformation harder to detect.",
      build:
        "Implemented a prompt-based approach inserting lexical constraints (e.g., double-letter words per sentence) detected by a fine-tuned BERTa classifier, alongside a token-level greenlist watermark applying logit bias partitioned by a 128-bit secret key during nucleus sampling.",
      outcomes:
        "Produced a comparative analysis across ~1,000 prompts from OpenAI Evals and WikiText-103, evaluating detection accuracy and robustness against paraphrasing.",
    },
  },
  {
    slug: "foodback",
    title: "Foodback",
    subtitle: "LLM-powered food waste assistant",
    summary:
      "Tooling that combines LLM workflows and CV ideas to improve food waste reporting and intervention quality.",
    impact: "Improved visibility into food waste patterns and practical recommendation loops.",
    tags: ["LLMs", "Computer Vision", "Express.js", "Hugging Face"],
    logoUrl: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
    logoAlt: "Hugging Face logo",
    websiteUrl: null,
    codeUrl: "https://github.com/AimeCesaireM/foodback",
    proprietary: false,
    sections: {
      challenge:
        "Food waste workflows often lack structured insights and fast feedback from collected records.",
      build:
        "Built a full-stack prototype combining capture, interpretation, and recommendation layers.",
      outcomes:
        "Enabled clearer operational reporting and more actionable waste-reduction suggestions.",
    },
  },
]

export const projectLookup = Object.fromEntries(projects.map((project) => [project.slug, project]))

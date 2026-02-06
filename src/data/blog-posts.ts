export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "execution-over-automation",
    title: "Execution > Automation: What Changes in 2026",
    excerpt: "Automation handles tasks. Execution handles outcomes. The distinction reshapes how teams ship products, campaigns, and entire businesses.",
    date: "2026-01-28",
    readTime: "6 min read",
    category: "Perspective",
    content: `The industry spent a decade automating fragments. A Zapier here, a GPT prompt there. The result? More tools, more hand-offs, more friction.\n\nExecution is different. It starts with intent and ends with a deliverable. No middle steps managed by humans. No copy-pasting between tools.\n\n## The Shift\n\nWhen we talk about execution, we mean the entire pipeline: understanding intent, routing to the right capabilities, producing output, and packaging it for deployment.\n\nThis isn't incremental improvement. It's a category change.\n\n## What This Means for Teams\n\nTeams that adopt execution-first platforms will ship 10x faster—not because they work harder, but because the hand-off tax disappears.\n\nDesign, code, content, and deployment become a single command.\n\n## Looking Ahead\n\n2026 marks the year execution platforms become the default. The question isn't whether to adopt—it's how fast you can transition.`,
  },
  {
    slug: "multi-agent-workflows",
    title: "Designing Multi-Agent Workflows That Don't Break",
    excerpt: "Multi-agent systems fail when agents compete instead of collaborate. Here's how to design workflows where each agent has clear authority.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Engineering",
    content: `Multi-agent architectures are powerful but fragile. Most failures come from three sources: ambiguous routing, conflicting outputs, and missing context.\n\n## The Authority Principle\n\nEvery agent must own a clear domain. When two agents can handle the same task, you've created a conflict. Resolution rules must be explicit.\n\n## Context Propagation\n\nAgents need shared memory—not just shared data. The difference is semantic understanding. A design agent needs to know why a brand chose certain colors, not just what those colors are.\n\n## Failure Recovery\n\nMulti-agent systems must degrade gracefully. If the content agent fails, the system shouldn't block deployment. Design fallbacks for every critical path.\n\n## The OriMind Approach\n\nOur agent orchestration layer solves these problems with intent-aware routing, persistent semantic memory, and cascading fallback chains.`,
  },
  {
    slug: "prompt-to-deployment",
    title: "From Prompt to Deployment: The New Default",
    excerpt: "The gap between describing what you want and having it live in production is collapsing. Here's what the new workflow looks like.",
    date: "2026-01-04",
    readTime: "5 min read",
    category: "Product",
    content: `Imagine describing a landing page and having it deployed in under a minute. Not a mockup. Not a prototype. A live, production-ready page.\n\n## The Old Way\n\nDescribe → Design → Review → Code → Review → Test → Deploy. Each step involves different tools, different people, and different timelines.\n\n## The New Way\n\nDescribe → Deploy. Everything in between is handled by specialized agents working in concert.\n\n## What Makes This Possible\n\nThree breakthroughs converged: large language models that understand design intent, code generation that produces production-quality output, and orchestration layers that coordinate multiple AI agents.\n\n## Real Examples\n\nA founder described a SaaS dashboard. In 47 seconds, it was live—responsive, styled, with sample data and working charts.\n\nA marketer described a product launch campaign. In 2 minutes: landing page, email sequence, social posts, and ad creatives—all on-brand.`,
  },
];

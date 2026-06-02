export const revenueLanes = [
  { name: "Submission-first education", state: "available", value: "JPY 198k", detail: "Async review, diagnostic, and premium written feedback packages." },
  { name: "Technical support and CRM setup", state: "queued", value: "JPY 120k", detail: "Small-business support, database cleanup, and workflow setup." },
  { name: "Operations consulting", state: "draft", value: "JPY 250k", detail: "Business process and administrative systems support." },
  { name: "AI/dev build lane", state: "in-progress", value: "JPY 300k", detail: "Internal phrasing stays capability-first for Japan-facing surfaces." }
];

export const submissions = [
  { title: "Writing review batch", customer: "Adult learner", state: "in-progress", due: "Needs EPOCH deadline" },
  { title: "CRM cleanup request", customer: "Local operator", state: "queued", due: "Plan before quote" },
  { title: "Support diagnostic", customer: "Independent client", state: "available", due: "Ready for intake review" }
];

export const packages = [
  { title: "Async Submission Review", price: "JPY 5k per submission", detail: "Low-labor review and written next-action feedback." },
  { title: "Premium Sprint", price: "JPY 39.8k+ monthly", detail: "High-touch personalized service with limited live sessions." },
  { title: "Systems Support Block", price: "JPY 45k+ block", detail: "Technical support, clerical systems, CRM, and workflow repair." },
  { title: "Operations Consulting", price: "Scoped quote", detail: "Business process, finance-adjacent planning, and administration support." }
];

export const crmAccounts = [
  { name: "Priority prospect", state: "fit review", next: "Request sample work" },
  { name: "Returning customer", state: "delivery", next: "Send status update" },
  { name: "School/operator lead", state: "proposal", next: "Prepare service system offer" }
];

export const araQueue = [
  { title: "Draft review template", state: "ready", owner: "SYMBIOSIS" },
  { title: "Package comparison table", state: "queued", owner: "FURYOKU" },
  { title: "Lead status digest", state: "planned", owner: "MONITOR" }
];

export const deliveryTimeline = [
  { label: "Request received", detail: "Service request captured by WORKSHOP.", state: "complete" },
  { label: "Fit and material check", detail: "Operator confirms whether this is ready for delivery.", state: "in-progress" },
  { label: "Schedule if needed", detail: "Timing request goes to EPOCH only when needed.", state: "queued" }
];

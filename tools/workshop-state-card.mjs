import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const monitorRoot = process.env.WORKSHOP_MONITOR_DIR || "D:\\CITADEL\\_control\\autopilot\\WORKSHOP\\monitor\\sections";

const readText = (filePath) => {
  if (!existsSync(filePath)) return "";
  return readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
};

const runGit = (...args) => {
  try {
    return execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  } catch (error) {
    return `unavailable: ${String(error.stderr || error.message || error)}`.trim();
  }
};

const compact = (value) => value
  .replace(/\s+/g, " ")
  .replace(/^[-#*\s]+/, "")
  .trim();

const firstMatch = (text, patterns) => {
  const lines = text.split("\n").map(compact).filter(Boolean);
  for (const pattern of patterns) {
    const match = lines.find((line) => pattern.test(line));
    if (match) return match;
  }
  return lines[0] || "not found";
};

const sectionPath = (name) => path.join(monitorRoot, `${name}.md`);
const summary = readText(sectionPath("running-summary"));
const scope = readText(sectionPath("scope"));
const memory = readText(sectionPath("memory"));
const completion = readText(sectionPath("completion"));

const statusShort = runGit("status", "--short", "--branch");
const statusLines = statusShort.split(/\r?\n/).filter(Boolean);
const branchLine = statusLines[0] || "unknown";
const dirtyEntries = statusLines.slice(1);
const head = runGit("log", "-1", "--oneline", "--decorate");
const headSha = runGit("rev-parse", "--short", "HEAD");
const aheadMatch = branchLine.match(/\[ahead ([0-9]+)\]/);
const clean = dirtyEntries.length === 0;

const recommendedMode = clean ? "owner-ready" : "support-or-reconcile-before-editing";
const firstAction = clean
  ? "Read this card, confirm branch ownership, then choose one bounded WORKSHOP slice."
  : "Resolve or hand off dirty files before starting another implementation slice.";

const stateCard = [
  "# WORKSHOP State Card",
  "",
  `Generated from: ${repoRoot}`,
  "",
  "## Git",
  `- Branch: ${branchLine}`,
  `- HEAD: ${head}`,
  `- Short SHA: ${headSha}`,
  `- Worktree: ${clean ? "clean" : `dirty (${dirtyEntries.length} entr${dirtyEntries.length === 1 ? "y" : "ies"})`}`,
  `- Local divergence: ${aheadMatch ? `ahead ${aheadMatch[1]}` : "not reported by git status"}`,
  "",
  "## Monitor Snapshot",
  `- Summary: ${firstMatch(summary, [/^Latest local closeout:/i, /^Highest-value next direction:/i])}`,
  `- Scope owns: ${firstMatch(scope, [/^Product-surface/i, /^Revenue\/product/i, /^WORKSHOP owns/i])}`,
  `- Scope excludes: ${firstMatch(scope, [/^Do not /i, /^Do not absorb/i, /^Do not rewrite/i])}`,
  `- Memory: ${firstMatch(memory, [/Durable UX lesson/i, /CRM layout repair evidence/i, /ledger section/i])}`,
  `- Completion: ${firstMatch(completion, [/^Done:/i, /^Next:/i, /^Later:/i])}`,
  "",
  "## Ownership Decision",
  `- Recommended mode: ${recommendedMode}`,
  "- Non-interference: do not take Enterprise MONITOR, HERMES, SKILLING/SKILBASE, or EPOCH calendar authority from their owner lanes.",
  "- WORKSHOP App is internal operator state; WORKSHOP Webportal is customer-safe status/request/receipt state.",
  "- If another thread owns a dirty branch, stay read-only and report back.",
  "",
  "## First Action",
  `- ${firstAction}`
];

console.log(stateCard.join("\n"));

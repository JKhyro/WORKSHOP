import { readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const readOption = (name, fallback = "") => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const manifestPath = readOption("manifest");
const outPath = readOption("out");
const failures = [];
const warnings = [];

if (!manifestPath) failures.push("Pass --manifest with a proof-manifest.json path.");

let manifestText = "";
let manifest = null;
if (manifestPath) {
  try {
    manifestText = readFileSync(manifestPath, "utf8");
    if (manifestText.charCodeAt(0) === 0xFEFF) warnings.push("manifest should be UTF-8 without BOM");
    manifest = JSON.parse(manifestText.replace(/^\uFEFF/, ""));
  } catch (error) {
    failures.push(`Could not read proof manifest: ${error.message}`);
  }
}

const requireAnyKey = (object, keys, label) => {
  if (!object || !keys.some((key) => Object.prototype.hasOwnProperty.call(object, key))) {
    failures.push(`manifest missing ${label}`);
  }
};

if (manifest) {
  requireAnyKey(manifest, ["project", "projects", "proofDir"], "project/projects/proofDir key");
  requireAnyKey(manifest, ["repo_head", "repoHeads", "workshopHead", "workshop_head", "routeRelationshipReport"], "repo head or related report key");
  requireAnyKey(manifest, ["routeChecks", "route_checks", "routes"], "route checks key");
  requireAnyKey(manifest, ["screenshots", "screenshotCount", "screenshot_count"], "screenshots key");
  if (Number(manifest.badRoutes ?? 0) !== 0) failures.push("manifest reports bad routes");
  if (Number(manifest.duplicateIdRoutes ?? manifest.routeDuplicateIdRoutes ?? 0) !== 0) failures.push("manifest reports duplicate ids");
  if (Number(manifest.mobileOverflowRoutes ?? manifest.routeOverflowRoutes ?? 0) !== 0) failures.push("manifest reports horizontal overflow");
  if (!Object.prototype.hasOwnProperty.call(manifest, "consoleErrors") && !Object.prototype.hasOwnProperty.call(manifest, "consoleErrorCount")) {
    warnings.push("manifest should include console errors count when browser proof records it");
  }
}

const audit = {
  kind: "workshop-proof-artifact-audit",
  generatedAtUtc: new Date().toISOString(),
  valid: failures.length === 0,
  manifestPath,
  warnings,
  failures,
  monitorEvidenceSummary: failures.length
    ? `WORKSHOP proof artifact audit found ${failures.length} issue(s).`
    : "WORKSHOP proof artifact audit confirmed manifest readability and required proof anchors."
};

const output = `${JSON.stringify(audit, null, 2)}\n`;
if (outPath) {
  writeFileSync(outPath, output, "utf8");
} else {
  process.stdout.write(output);
}

if (!audit.valid) process.exitCode = 1;

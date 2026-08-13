import { spawnSync } from "node:child_process";

export const PAGES_TARGETS = [
  { project: "warblecloud-com", domain: "warblecloud.com" },
  { project: "warblecloud-ai", domain: "warblecloud.ai" },
  { project: "warblelabs-io", domain: "warblelabs.io" },
  { project: "frakma-io", domain: "frakma.io" },
  { project: "avirka-ai", domain: "avirka.ai" },
  { project: "avrika-ai", domain: "avrika.ai" },
];

for (const { project } of PAGES_TARGETS) {
  console.log(`\n=== Deploying ${project} ===`);
  const result = spawnSync(
    "npx",
    ["wrangler", "pages", "deploy", "public", "--project-name", project, "--commit-dirty=true"],
    { stdio: "inherit", shell: true },
  );
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

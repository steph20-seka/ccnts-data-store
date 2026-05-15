const fs = require("fs");
const path = require("path");

const rootDir = "src";

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  let files = [];

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (
      fullPath.endsWith(".ts") ||
      fullPath.endsWith(".tsx") ||
      fullPath.endsWith(".js") ||
      fullPath.endsWith(".jsx")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = walk(rootDir);

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  content = content.replace(/from\s+["']sonner@\d+\.\d+\.\d+["']/g, 'from "sonner"');
  content = content.replace(/import\s*\(\s*["']sonner@\d+\.\d+\.\d+["']\s*\)/g, 'import("sonner")');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log("✅ Import corrigé :", file);
  }
}

console.log("✅ Correction des imports terminée.");
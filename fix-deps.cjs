const fs = require("fs");

const packageFile = "package.json";

if (!fs.existsSync(packageFile)) {
  console.error("Erreur : package.json introuvable. Place ce fichier à la racine du projet.");
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(packageFile, "utf8"));

const sections = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies"
];

function normalizeDependencyName(name, version) {
  let cleanName = name;
  let cleanVersion = version;

  // Cas : @emotion/react@11.14.0
  const scopedMatch = name.match(/^(@[^/]+\/[^@]+)@(.+)$/);
  if (scopedMatch) {
    cleanName = scopedMatch[1];
    cleanVersion = "^" + scopedMatch[2].replace(/^npm:/, "");
  }

  // Cas : package@1.0.0
  const normalMatch = name.match(/^([^@]+)@(.+)$/);
  if (!name.startsWith("@") && normalMatch) {
    cleanName = normalMatch[1];
    cleanVersion = "^" + normalMatch[2].replace(/^npm:/, "");
  }

  // Cas : valeur npm:@emotion/react@11.14.0
  if (typeof cleanVersion === "string" && cleanVersion.startsWith("npm:")) {
    const aliasMatch = cleanVersion.match(/^npm:(@?[^@]+(?:\/[^@]+)?)@(.+)$/);
    if (aliasMatch) {
      cleanName = aliasMatch[1];
      cleanVersion = "^" + aliasMatch[2];
    }
  }

  return [cleanName, cleanVersion];
}

for (const section of sections) {
  if (!pkg[section]) continue;

  const fixed = {};

  for (const [name, version] of Object.entries(pkg[section])) {
    const [cleanName, cleanVersion] = normalizeDependencyName(name, version);
    fixed[cleanName] = cleanVersion;
  }

  pkg[section] = fixed;
}

pkg.dependencies = pkg.dependencies || {};
pkg.devDependencies = pkg.devDependencies || {};
pkg.scripts = pkg.scripts || {};

// Dépendances corrigées importantes
pkg.dependencies["@emotion/react"] = "^11.14.0";
pkg.dependencies["@emotion/styled"] = "^11.14.0";
pkg.dependencies["@mui/material"] = "^7.3.5";
pkg.dependencies["@mui/icons-material"] = "^7.3.5";
pkg.dependencies["@popperjs/core"] = "^2.11.8";
pkg.dependencies["sonner"] = "^2.0.3";

// Si ton projet utilise Firebase
pkg.dependencies["firebase"] = pkg.dependencies["firebase"] || "^11.0.0";

// Vite
pkg.devDependencies["vite"] = pkg.devDependencies["vite"] || "^6.0.0";
pkg.devDependencies["@vitejs/plugin-react"] = pkg.devDependencies["@vitejs/plugin-react"] || "^4.0.0";

// Scripts propres
pkg.scripts.dev = "vite";
pkg.scripts.build = "vite build";
pkg.scripts.preview = "vite preview";

// Supprimer les dépendances Supabase/JSR invalides si le projet utilise Firebase
for (const section of sections) {
  if (!pkg[section]) continue;

  for (const dep of Object.keys(pkg[section])) {
    const value = String(pkg[section][dep]);

    if (
      dep.toLowerCase().includes("@jsr") ||
      dep.toLowerCase().includes("supabase__supabase") ||
      dep.toLowerCase().includes("jsr") ||
      value.toLowerCase().includes("@jsr") ||
      value.toLowerCase().includes("supabase__supabase")
    ) {
      delete pkg[section][dep];
    }
  }
}

fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2));

console.log("✅ package.json corrigé avec succès.");
console.log("✅ Les dépendances invalides ont été normalisées.");
console.log("✅ Tu peux maintenant supprimer node_modules/package-lock.json puis relancer npm install.");
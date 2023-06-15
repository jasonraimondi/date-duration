import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  test: false,
  packageManager: "pnpm",
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  compilerOptions: {
    lib: ["ES2021"],
  },
  mappings: {
    "npm:ms@latest": {
      name: "ms",
      version: "^2.1.3",
    },
  },
  package: {
    name: "@jmondi/date-duration",
    version: Deno.args[0]?.replace("v", ""),
    description: "Manage and computing end times based on specified durations.",
    keywords: ["date", "duration"],
    author: "Jason Raimondi <jason@raimondi.us>",
    license: "MIT",
    engines: {
      node: ">=18.0.0",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/jasonraimondi/date-duration.git",
    },
    bugs: {
      url: "https://github.com/jasonraimondi/date-duration/issues",
    },
    devDependencies: {
      "@types/ms": "^0.7.31",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});

// ensure the test data is ignored in the `.npmignore` file
// so it doesn't get published with your npm package
await Deno.writeTextFile(
  "npm/.npmignore",
  "esm/testdata/\nscript/testdata/\n",
  { append: true },
);

// post build steps

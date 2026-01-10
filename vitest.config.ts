import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["packages/*"],
    reporters: [
      ["junit", { outputFile: ".github/test-report.junit.xml" }],
      ["default", { summary: true }],
    ],
  },
});

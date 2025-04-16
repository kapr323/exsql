// start-dev.ts
import { spawn } from "child_process";

const vite = spawn("npx", ["vite"], { stdio: "inherit", shell: true });
const electron = spawn("npx", ["electron", "main.cjs"], { stdio: "inherit", shell: true });

// Ukončíme oba procesy při zavření
process.on("exit", () => {
  vite.kill();
  electron.kill();
});

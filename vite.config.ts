import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import officeAddin from "vite-plugin-office-addin";

const devCerts = require("office-addin-dev-certs");

async function getHttpsOptions() {
  const httpsOptions = await devCerts.getHttpsServerOptions();
  return { ca: httpsOptions.ca, key: httpsOptions.key, cert: httpsOptions.cert };
}

// https://vitejs.dev/config/
export default defineConfig(async ({mode}) => ({
  base: '/',
  plugins: [react(), officeAddin({
      devUrl: "https://localhost:3000",
      prodUrl: "https://office-syntax-highlighter.wendy.sh/"
    })
  ],
  root: "src",
  build: {
    rollupOptions: {
      input: {
        "taskpane": "/taskpane/taskpane.html",
        "commands": "/commands/commands.html",
        "privacy-policy": "/legal/privacy-policy.html",
        "support": "/legal/support.html",
        "index": "/index.html"
      },
      external: ['regex'],
    },
    outDir: "../dist",
    emptyOutDir: true,
    copyPublicDir: true  // Ensures public directory is copied
  },
  publicDir: "../public",  // Change this to point to your public directory relative to root
  server: mode !== "production" ? { https: await getHttpsOptions() } : {}
}));

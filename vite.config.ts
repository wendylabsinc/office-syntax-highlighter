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
  base: process.env.NODE_ENV === 'production' ? '/office-syntax-highlighter/' : '/',
  plugins: [react(), officeAddin({
      devUrl: "https://localhost:3000",
      prodUrl: "https://wendylabsinc.github.io/office-syntax-highlighter/"
    })
  ],
  root: "src",
  build: {
    rollupOptions: {
      input: {
        "taskpane": "/taskpane/taskpane.html",
        "commands": "/commands/commands.html",
        "privacy-policy": "/legal/privacy-policy.html"
      },
      external: ['regex'],
    },
    outDir: "../dist",
    emptyOutDir: true
  },
  server: mode !== "production" ? { https: await getHttpsOptions() } : {}
}));

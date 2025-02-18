
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Allow connections from all network interfaces
    port: 8080,
    strictPort: true, // Fail if port is already in use
    hmr: {
      clientPort: 443, // Force client to use HTTPS port
      protocol: 'wss' // Use secure WebSocket
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// see all documentation here https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5000,
    },
    build: {
        outDir: 'build',
    },
});

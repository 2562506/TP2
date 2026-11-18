import { defineConfig } from 'vite';
 
export default defineConfig({
    base: '/Potions-et-Potins/',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                catalogue: 'catalogue.html'
            },
        },
    },
});
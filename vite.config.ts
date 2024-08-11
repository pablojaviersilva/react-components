import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Especifica el punto de entrada
      name: "vite-react-ts-button", // Establece el nombre de la biblioteca generada.
      fileName: (format) => `index.${format}.js`, // Genera el nombre del archivo de salida según el formato.
      formats: ["cjs", "es"], // Especifica los formatos de salida (módulos CommonJS y ES).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Define dependencias externas para rollup.
    },
    sourcemap: true, // Genera sourcemaps para depurar.
    emptyOutDir: true, // Borra el directorio de salida antes de compilar.
  },
  plugins: [dts()], // Utiliza el complemento 'vite-plugin-dts' para generar archivos de declaración de TypeScript (d.ts).
});

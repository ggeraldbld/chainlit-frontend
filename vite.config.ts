import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    dts({
      include: ['./src/components'],
      exclude: ['./src/App.tsx'],
      outDir: 'dist'
    })
  ],
  build: {
    lib: {
      entry: './src/components/index.ts',
      name: 'ChainlitFrontend',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom',
        /^@mui\/.*/,
        /^@emotion\/.*/,
        'recoil',
        'formik',
        'react-router-dom'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      }
    },
    sourcemap: true,
    target: 'esnext'
  },
  resolve: {
    alias: {
      // To prevent conflicts with packages in @chainlit/react-components, we need to specify the resolution paths for these dependencies.
      react: path.resolve(__dirname, './node_modules/react'),
      '@mui/material': path.resolve(__dirname, './node_modules/@mui/material'),
      '@mui/icons-material': path.resolve(
        __dirname,
        './node_modules/@mui/icons-material'
      ),
      '@mui/lab': path.resolve(__dirname, './node_modules/@mui/lab'),
      '@emotion/react': path.resolve(
        __dirname,
        './node_modules/@emotion/react'
      ),
      '@emotion/styled': path.resolve(
        __dirname,
        './node_modules/@emotion/styled'
      ),
      formik: path.resolve(__dirname, './node_modules/formik'),
      'usehooks-ts': path.resolve(__dirname, './node_modules/usehooks-ts'),
      lodash: path.resolve(__dirname, './node_modules/lodash'),
      recoil: path.resolve(__dirname, './node_modules/recoil'),
      assets: path.resolve(__dirname, './src/assets'),
    }
  }
});

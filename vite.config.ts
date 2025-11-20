import { VitePluginRadar } from 'vite-plugin-radar'
import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const GA_MEASUREMENT_ID = env.VITE_GA_MEASUREMENT_ID
  return {
    plugins: [
      tsconfigPaths(),
      VitePluginRadar({
        // Google Analytics tag injection
        analytics: {
          id: GA_MEASUREMENT_ID,
        },
        enableDev: true,
      }),
    ],
  }
})

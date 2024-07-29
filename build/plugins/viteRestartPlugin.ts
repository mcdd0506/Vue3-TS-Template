import ViteRestart from 'vite-plugin-restart'

export const viteRestartPlugin = () =>
  ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s', '*.config.cjs', './.eslintrc.cjs']
  })

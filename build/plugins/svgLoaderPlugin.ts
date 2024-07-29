// svg
import svgLoader from 'vite-svg-loader'

export const svgLoaderPlugin = () =>
  svgLoader({
    defaultImport: 'url', // or 'raw'
    svgo: true
  })

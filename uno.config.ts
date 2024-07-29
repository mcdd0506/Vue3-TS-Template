// uno.config.ts

// 预设rem转px
import presetRemToPx from '@unocss/preset-rem-to-px'
// transformerDirectives 可以使用@apply @screen theme函数
import transformerDirective from '@unocss/transformer-directives'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerVariantGroup,
  presetIcons
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    // 现在mt-1会转换为margin-top: 1px
    presetRemToPx({
      baseFontSize: 4
    }),
    // 自动引入图标配置
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],

  transformers: [transformerVariantGroup(), transformerDirective()],
  //  自定义配置项
  rules: [
    /** 以下官网规则可自定义转换 */
    /* 例如 m-1 转换为 margin:0.25rem */
    // [/^m-(\d+)$/, ([, d]) => ({margin: `${d / 4}rem`})],
    // [/^p-(\d+)$/, match => ({padding: `${match[1] / 4}rem`})],
  ],
  // 自定义属性 一个属性可以对应多个unocss类值
  shortcuts: [
    {
      // 垂直水平居中
      'flex-center': 'flex items-center justify-center',
      // 放在最后
      'flex-end': 'flex items-center justify-end',
      // 垂直居中
      'flex-middle': 'flex items-center',
      // 分开两边
      'flex-between': 'flex items-center justify-between',
      // 竖着居中
      'flex-col-center': 'flex flex-col justify-center'
    }
  ]
})

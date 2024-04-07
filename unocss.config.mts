import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    breakpoints: {
      mobile: '480px',
      sm: '720px',
      md: '840px',
      lg: '980px',
      xlg: '1440px',
    },
  },
  rules: [
    ['p-bento', { padding: '12px' }],
    [
      /^ellipse-(\d+)$/,
      ([, d]: any[]) => ({
        '-webkit-box-orient': 'vertical',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': d,
        overflow: 'hidden',
        display: '-webkit-box',
      }),
    ],
  ],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

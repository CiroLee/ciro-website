import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    breakpoints: {
      mobile: '720px',
      md: '840px',
      lg: '980px',
    },
  },
  rules: [['p-bento', { padding: '12px' }]],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

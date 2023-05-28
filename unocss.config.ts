import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    breakpoints: {
      md: '960px',
      mobile: '480px',
    },
  },
  rules: [['p-bento', { padding: '12px' }]],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    breakpoints: {
      md: '720px',
      mobile: '480px',
    },
  },
  rules: [['p-bento', { padding: '10px' }]],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
  transformers: [transformerDirectives()],
});

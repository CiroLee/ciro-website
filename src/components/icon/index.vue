<script lang="ts">
import { CSSProperties, defineComponent } from 'vue';
export default defineComponent({
  name: 'Icon',
});
</script>
<script setup lang="ts">
interface IconProps {
  name: string;
  color?: string;
  size?: string;
  style?: string | CSSProperties;
}
const props = withDefaults(defineProps<IconProps>(), {
  name: '',
  color: 'inherit',
  size: 'inherit',
  style: '',
});

const fontsize = computed(() => `${props.size}`);
</script>
<template>
  <i class="cw-icon" :class="`ri-${name}`" :style="style"></i>
</template>
<style lang="scss">
.cw-icon {
  color: v-bind(color);
  font-size: v-bind(fontsize);
  line-height: 1em;
  position: relative;
  cursor: pointer;
}
</style>

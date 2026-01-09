<template>
  <teleport to="body">
    <div v-if="modelValue" class="mask" @click.self="closeOnMask && emitClose()">
      <div class="panel" :style="{ width }">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  width: { type: String, default: '86vw' },
  closeOnMask: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
const emitClose = () => emit('update:modelValue', false)
</script>

<style scoped>
.mask{
  position: fixed; inset: 0;
  background: rgba(0,0,0,.55);
  display:flex; align-items:center; justify-content:center;
  z-index: 9999;
}
.panel{
  background:#fff;
  border-radius: 14px;
  overflow:hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
}
</style>

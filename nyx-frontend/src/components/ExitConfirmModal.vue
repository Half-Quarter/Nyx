<template>
  <ModalBase v-model="visible" width="86vw" :closeOnMask="true">
    <div class="wrap">
      <div class="hd">退出游戏</div>
      <div class="bd">确定要退出吗？</div>
      <div class="ft">
        <button class="btn" @click="visible=false">取消</button>
        <button class="btn danger" @click="onOk">确认</button>
      </div>
    </div>
  </ModalBase>
</template>

<script setup>
import { computed } from 'vue'
import ModalBase from './ModalBase.vue'
import { systemMessage } from '@/store/systemMessage'

const visible = computed({
  get: () => systemMessage.showExitConfirm,
  set: (v) => (systemMessage.showExitConfirm = v),
})

const onOk = () => {
  systemMessage.showExitConfirm = false
  // Web：跳转到空白页或返回
  history.back()
}
</script>

<style scoped>
.wrap{ padding:16px; }
.hd{ font-weight:800; font-size:16px; margin-bottom:8px; }
.bd{ color:#444; font-size:13px; }
.ft{ display:flex; gap:10px; margin-top:14px; }
.btn{
  flex:1; height:38px; border-radius:10px;
  border:1px solid #ddd; background:#fff; cursor:pointer;
}
.danger{ background:#ff4d4f; border-color:#ff4d4f; color:#fff; font-weight:700; }
</style>

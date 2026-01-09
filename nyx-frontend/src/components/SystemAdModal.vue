<template>
  <ModalBase v-model="visible" width="88vw" :closeOnMask="false">
    <div class="wrap">
      <button class="close" @click="onClose">×</button>
      <div class="img">这里放广告图</div>
      <div class="title">20张专访凭证 & 5星武器【终末之声】</div>
      <div class="sub">预约达成免费领取！</div>
      <button class="primary" @click="onAction">立即预约</button>
    </div>
  </ModalBase>
</template>

<script setup>
import { computed } from 'vue'
import ModalBase from './ModalBase.vue'
import { systemMessage } from '@/store/systemMessage'

const visible = computed({
  get: () => systemMessage.showAd,
  set: (v) => (systemMessage.showAd = v),
})

const onClose = () => {
  systemMessage.markAdSeen()
  systemMessage.showAd = false
  systemMessage.openFlowOnEnter()
}

const onAction = () => {
  // TODO: 跳转外链/活动页
  onClose()
}
</script>

<style scoped>
.wrap{ position:relative; padding:14px 14px 18px; text-align:center; }
.close{
  position:absolute; right:10px; top:10px;
  width:30px; height:30px; border-radius:50%;
  border:none; background:#eee; font-size:18px; cursor:pointer;
}
.img{ height:220px; border-radius:12px; background:#ddd; margin-top:10px; }
.title{ margin-top:12px; font-weight:700; }
.sub{ margin:6px 0 14px; color:#666; font-size:13px; }
.primary{
  width:100%; height:40px; border:none; border-radius:10px;
  background:#27c26a; color:#fff; font-weight:700; cursor:pointer;
}
</style>

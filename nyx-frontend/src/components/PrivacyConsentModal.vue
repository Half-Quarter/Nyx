<template>
  <ModalBase v-model="visible" width="90vw" :closeOnMask="false">
    <div class="wrap">
      <div class="hd">用户信息保护提示</div>
      <div class="bd">
        在你使用「XX—夜狼人杀」服务之前，请仔细阅读
        <a class="link" @click="goPrivacy">《隐私保护指引》</a>。
        如你同意请点击“同意”开始使用。
      </div>
      <div class="ft">
        <button class="btn" @click="onReject">拒绝</button>
        <button class="btn primary" @click="onAgree">同意</button>
      </div>
    </div>
  </ModalBase>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ModalBase from './ModalBase.vue'
import { systemMessage } from '@/store/systemMessage'

const router = useRouter()

const visible = computed({
  get: () => systemMessage.showPrivacy,
  set: (v) => (systemMessage.showPrivacy = v),
})

const goPrivacy = () => router.push('/privacy')

const onReject = () => {
  // 按原型：拒绝 => 退出/回到上一步（这里弹退出确认）
  systemMessage.showPrivacy = false
  systemMessage.showExitConfirm = true
}

const onAgree = () => {
  systemMessage.agreePrivacy()
  systemMessage.showPrivacy = false
  systemMessage.openFlowOnEnter()
}
</script>

<style scoped>
.wrap{ padding:16px; }
.hd{ font-weight:800; font-size:16px; margin-bottom:10px; }
.bd{ color:#333; line-height:1.6; font-size:13px; }
.link{ color:#2b7cff; cursor:pointer; }
.ft{ display:flex; gap:10px; margin-top:14px; }
.btn{
  flex:1; height:38px; border-radius:10px;
  border:1px solid #ddd; background:#fff; cursor:pointer;
}
.primary{ background:#27c26a; border-color:#27c26a; color:#fff; font-weight:700; }
</style>

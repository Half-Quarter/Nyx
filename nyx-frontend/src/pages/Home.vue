<template>
  <div class="page">
    <header class="top">一夜狼人杀</header>

    <div class="cards">
      <div class="card">新建房间 ></div>
      <div class="card">加入房间 ></div>
    </div>

    <section class="block">
      <div class="block-hd">玩法简介 <span class="more" @click="goPrivacy">详细介绍 ></span></div>
      <div class="block-bd">这里放简介文案...</div>
    </section>

    <SystemAdModal />
    <PrivacyConsentModal />
    <ProfileAuthModal />
    <ExitConfirmModal />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { systemMessage } from '@/store/systemMessage'
import SystemAdModal from '@/components/SystemAdModal.vue'
import PrivacyConsentModal from '@/components/PrivacyConsentModal.vue'
import ProfileAuthModal from '@/components/ProfileAuthModal.vue'
import ExitConfirmModal from '@/components/ExitConfirmModal.vue'

const router = useRouter()
const goPrivacy = () => router.push('/privacy')

onMounted(() => {
  systemMessage.openFlowOnEnter()
})
</script>

<style scoped>
.page{ min-height:100vh; background: linear-gradient(#555, #eee 55%); padding:14px; }
.top{ text-align:center; color:#fff; font-weight:800; padding:10px 0 14px; }
.cards{ display:flex; gap:12px; margin:10px 0 12px; }
.card{
  flex:1; background:#fff; border-radius:12px; padding:14px;
  box-shadow:0 8px 18px rgba(0,0,0,.08);
}
.block{ background:#fff; border-radius:12px; padding:14px; }
.block-hd{ display:flex; justify-content:space-between; font-weight:700; }
.more{ color:#999; font-weight:500; cursor:pointer; }
.block-bd{ margin-top:8px; color:#666; font-size:13px; line-height:1.6; }
</style>

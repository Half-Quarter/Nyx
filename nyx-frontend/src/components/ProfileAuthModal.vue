<template>
  <ModalBase v-model="visible" width="90vw" :closeOnMask="false">
    <div class="wrap">
      <div class="hd">获取你的昵称、头像</div>
      <div class="bd">
        <label class="row">
          <input type="checkbox" v-model="checked" />
          <span>使用昵称与头像创建你的账户</span>
        </label>
      </div>

      <div class="ft">
        <button class="btn" @click="onReject">拒绝</button>
        <button class="btn primary" :disabled="!checked" @click="onAllow">允许</button>
      </div>
    </div>
  </ModalBase>
</template>

<script setup>
import { computed, ref } from 'vue'
import ModalBase from './ModalBase.vue'
import { systemMessage } from '@/store/systemMessage'

const checked = ref(true)

const visible = computed({
  get: () => systemMessage.showProfileAuth,
  set: (v) => (systemMessage.showProfileAuth = v),
})

const onReject = () => {
  systemMessage.setProfileAuthed(false)
  systemMessage.showProfileAuth = false
  // 按原型你也可以继续进首页，但展示默认头像昵称
}

const onAllow = async () => {
  // TODO: 在此接入真实授权逻辑
  systemMessage.setProfileAuthed(true)
  systemMessage.showProfileAuth = false
}
</script>

<style scoped>
.wrap{ padding:16px; }
.hd{ font-weight:800; font-size:16px; margin-bottom:10px; }
.row{ display:flex; gap:10px; align-items:center; font-size:13px; }
.ft{ display:flex; gap:10px; margin-top:14px; }
.btn{
  flex:1; height:38px; border-radius:10px;
  border:1px solid #ddd; background:#fff; cursor:pointer;
}
.primary{ background:#27c26a; border-color:#27c26a; color:#fff; font-weight:700; }
.primary:disabled{ opacity:.5; cursor:not-allowed; }
</style>

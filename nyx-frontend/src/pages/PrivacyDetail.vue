<template>
  <div class="page">
    <div class="bar">
      <button class="back" @click="back">×</button>
      <div class="title">XX—夜狼人杀小程序隐私保护指引</div>
    </div>

    <div class="content">
      <h3>1. 文案示例</h3>
      <p>这里填你的隐私协议内容...</p>
      <h3>2. 信息收集说明</h3>
      <p>...</p>
    </div>
  </div>
</template>

<script setup>
const back = () => history.back()
</script>

<style scoped>
.page{ min-height:100vh; background:#fff; }
.bar{
  position:sticky; top:0; background:#fff;
  display:flex; align-items:center; gap:10px;
  padding:12px 14px; border-bottom:1px solid #eee;
}
.back{ width:34px; height:34px; border:none; border-radius:10px; background:#f2f2f2; cursor:pointer; font-size:18px; }
.title{ font-weight:800; font-size:14px; }
.content{ padding:14px; color:#333; line-height:1.7; font-size:13px; }
</style>

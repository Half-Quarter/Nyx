import { reactive } from 'vue'

const KEY = {
  privacyAgreed: 'sys_privacy_agreed',
  profileAuthed: 'sys_profile_authed',
  adSeen: 'sys_ad_seen_v1',
}

const readBool = (k) => localStorage.getItem(k) === '1'
const writeBool = (k, v) => localStorage.setItem(k, v ? '1' : '0')

export const systemMessage = reactive({
  // 状态
  privacyAgreed: readBool(KEY.privacyAgreed),
  profileAuthed: readBool(KEY.profileAuthed),
  adSeen: readBool(KEY.adSeen),

  // 控制弹层显示
  showAd: false,
  showPrivacy: false,
  showProfileAuth: false,
  showExitConfirm: false,

  openFlowOnEnter() {
    // 1. 先广告（如果需要）
    if (!this.adSeen) {
      this.showAd = true
      return
    }
    // 2. 隐私同意
    if (!this.privacyAgreed) {
      this.showPrivacy = true
      return
    }
    // 3. 头像昵称授权
    if (!this.profileAuthed) {
      this.showProfileAuth = true
      return
    }
  },

  markAdSeen() {
    this.adSeen = true
    writeBool(KEY.adSeen, true)
  },

  agreePrivacy() {
    this.privacyAgreed = true
    writeBool(KEY.privacyAgreed, true)
  },

  setProfileAuthed(v) {
    this.profileAuthed = v
    writeBool(KEY.profileAuthed, v)
  },
})

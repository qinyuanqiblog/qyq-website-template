export default {
  data() {
    return {
      addUserBankStatus: {},
    }
  },
  created() {},
  methods: {
    /**
     *  获取添加银行卡状态信息
     */
    getQueryAddUserBankStatus() {
      return userBankApi.getQueryAddUserBankStatus().then(res => {
        this.addUserBankStatus = res
        this.SET_USER_BANK_STATUS(res)
      })
    },
    ...mapMutations('bank-state', ['SET_USER_BANK_STATUS']),
  },
}

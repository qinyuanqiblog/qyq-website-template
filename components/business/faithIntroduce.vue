<template>
  <section class="faith">
    <b-container>
      <b-row class="faith-item">
        <b-col>我们的信条 满意至上</b-col>
        <b-col class="d-flex justify-content-end">
          <span
            @click="showContactDialog()"
            class="faith-button"
          >
            我要咨询
            <img
              class="faith-icon"
              src="~/assets/images/ser.png"
              alt="咨询背景图片"
            />
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="faith-text">售前有预案，售中有效率，售后有跟踪</b-col>
        <b-col class="d-flex justify-content-end">
          <a
            class="faith-button faith-button__yellow"
            :href="`tencent://message/?Menu=yes&uin=${baseInfo.qq}`"
            target="_blank"
          >
            在线咨询
            <img
              class="faith-icon"
              src="~assets/images/mes.png"
              alt="在线咨询背景图片"
            />
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'faithIntroduce',
  components: {},
    computed: {
    ...mapState(['baseInfo']),
  },
  data() {
    return {
    }
  },
  created() {},
  methods: {
    showContactDialog(type = 'contact') {
      this.$emit('onShowContactDialog', type)
    },
  },
}
</script>

<style lang="scss" scoped>
.faith {
  position: relative;
  height: 280px;
  color: #fff;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('~assets/images/faith/faith.png');
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.2);
  }
  &-item {
    margin-top: 80px;
    margin-bottom: 20px;
    font-size: 26px;
  }
  &-text {
    font-size: 30px;
    color: #fff;
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;

    background-color: $themeColor;
    border-radius: 30px;
    &__yellow {
      background-color: #f5d200;
      color: #fff;
    }
  }
  &-icon {
    width: 31px;
    height: 28px;
    margin-left: 10px;
    object-fit: contain;
  }
}
</style>

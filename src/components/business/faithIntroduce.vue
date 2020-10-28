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
              src="~public/images/ser.png"
            />
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="faith-text">售前有预案，售中有效率，售后有跟踪</b-col>
        <b-col class="d-flex justify-content-end">
          <span
            @click="showContactDialog('phone')"
            class="faith-button faith-button__yellow"
          >
            在线咨询
            <img
              class="faith-icon"
              src="~public/images/mes.png"
            />
          </span>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'faithIntroduce',
  components: {},
  data() {
    return {}
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
  background-image: url('~public/images/faith/faith.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  color: #fff;
  overflow: hidden;
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

    background-color: #de0024;
    border-radius: 30px;
    &__yellow {
      background-color: #f5d200;
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

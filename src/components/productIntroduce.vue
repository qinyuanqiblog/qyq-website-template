<template>
  <section class="product-introduce pt-5 pb-5 text-center">
    <!--begin container-->
    <div class="container">
      <!--begin row-->
      <h3 class="pb-5">产品特色</h3>
      <div class="row">
        <!--begin col-sm-4-->
        <div class="col-sm-4 features-item"><img
            src="http://v.bootstrapmb.com/2017/9/eqcij20/images/services1.jpg"
            alt="Service Title"
            class="services-pic"
          >
          <h3>Fully Customizable</h3>
          <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
        </div>
        <!--end col-sm-4-->
        <!--begin col-sm-4-->
        <div class="col-sm-4 features-item"><img
            src="http://v.bootstrapmb.com/2017/9/eqcij20/images/services2.jpg"
            alt="Service Title"
            class="services-pic"
          >
          <h3>Responsive Design</h3>
          <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
        </div>
        <!--end col-sm-4-->
        <!--begin col-sm-4-->
        <div class="col-sm-4 features-item"><img
            src="http://v.bootstrapmb.com/2017/9/eqcij20/images/services3.jpg"
            alt="Service Title"
            class="services-pic"
          >
          <h3>SEO Ready Code</h3>
          <p>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum.</p>
        </div>
        <!--end col-sm-4-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>

</template>

<script>
export default {
  name: 'productIntroduce',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.product-introduce {
  background-color: #f5f5f5;
}
.services-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
}
</style>

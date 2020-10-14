<template>
  <section class="section-white small-padding-bottom">
    <!--begin container-->
    <div class="container">
      <!--begin row-->
      <div class="row margin-bottom-10">
        <!--begin col-md-12-->
        <div class="col-md-12 text-center">
          <h2 class="section-title">Amazing Features</h2>
          <p class="section-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority<br>have suffered alteration, by injected humour, or new randomised words.</p>
        </div>
        <!--end col-md-12-->
      </div>
      <!--end row-->
      <!--begin row-->
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
.services-pic{
  width:120px;
  height: 120px;
  border-radius: 50%;
  margin:auto;
}
</style>

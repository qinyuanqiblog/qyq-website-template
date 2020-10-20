<template>
  <div class="bbb section-wrapper section-wrapper--gray section-wrapper--lg">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-12 col-lg-8 col-centered text-center">
          <h3 class="s-subtitle-top textcolor">Hope does not have a finish line</h3>
          <h3 class="s-title">We make the best strategies for you</h3>
          <p class="s-subtitle s-subtitle--simetric">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 col-lg-4">
          <div class="infobox s-pdl-30 s-pdr-30"><i class="icon-user-2"></i>
            <h4>Work with us</h4>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#">Read More</a>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="infobox s-pdl-30 s-pdr-30"><i class="icon-worldwide"></i>
            <h4 class="s-mrb-30 s-mrt-40">Our process</h4>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#">Read More</a>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="infobox s-pdl-30 s-pdr-30"><i class="icon-transfer-3"></i>
            <h4 class="s-mrb-30 s-mrt-40">How we help</h4>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.bbb{
  background-color: #fafafa;
}
.infobox {
  background: #fff;
  border-bottom: 2px solid #fff;
  text-align: center;
  box-shadow: 0 4px 4px rgba(221, 215, 215, 0.12);
  padding-top: 45px;
  padding-bottom: 45px;
  transition: 0.3s;
}

.infobox:hover {
  border-bottom: 2px solid #0067da;
  -webkit-box-shadow: 2px 1px 25px 5px rgba(166, 166, 166, 0.2);
  box-shadow: 2px 1px 25px 5px rgba(166, 166, 166, 0.2);
}

.infobox:hover i {
  color: #0067da;
}

.infobox i {
  display: block;
  color: #b0b0b0;
  font-size: 65px;
  transition: 0.3s;
  margin-bottom: 25px;
}

.infobox h4 {
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
  color: #000;
  margin: 15px 0;
}

.infobox p {
  font-weight: normal;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.5);
}

.infobox a {
  display: inline-flex;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  align-items: center;
  color: #0067da;
  border: 1px solid #f0f0f0;
  height: 40px;
  transition: 0.3s;
  padding: 0 15px;
  margin-top: 10px;
}

.infobox a:hover {
  color: #fff;
  background: #0067da;
  border-color: #0067da;
}
</style>

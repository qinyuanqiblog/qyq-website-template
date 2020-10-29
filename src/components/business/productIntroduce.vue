<template>
  <section class="product-introduce pt-5 pb-5 text-center">
    <!--begin container-->
    <div class="container">
      <!--begin row-->
      <h3 class="pb-5 qyq-title">
        产品<span class="qyq-title-default">特色</span>
      </h3>
      <b-row>
        <!--begin col-sm-4-->
        <b-col
          v-for="(item, index) in list"
          :key="index"
          class="features-item"
          :lg="4"
          :md="4"
        >
          <img
            :src="item.logoUrl"
            class="services-pic"
            alt="产品介绍图片"
          >
          <h4 class="mt-4 mb-4">{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </b-col>
      </b-row>
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
    return {
      list: [
        {
          title: '主要经营',
          desc:
            '福滨红木家具主营越南黄花梨、大红酸枝、缅甸草花梨、小叶紫檀红木家具、豪华电动餐桌、火锅桌专业定制，是红木古典家具知名品牌。产品品种齐全、品质可靠，造型典雅高贵，定位大众市场，致力于让高档家居走进普通百姓家。',
          logoUrl: require('public/images/product/introduce-1.jpg'),
        },
        {
          title: '销售与售后服务于一体',
          desc:
            '本厂拥有流的技工人才。和先进的生产设备，是一家集设计开发、生产制造、销售及售后服务于一体的红木古典家具厂家。本企业精选优质名贵木材，每一件产品从设计、开料、木工、雕花、打磨再到油漆，都经过严格的操作程序，精雕细琢、典雅大方。',
          logoUrl: require('public/images/product/introduce-2.jpg'),
        },
        {
          title: '为商以德、诚实本分',
          desc:
            '产品主要分为客厅、餐厅、套房、书房等系列，传统与现代相结合的风格，深得广大客户依赖和喜爱。本厂秉承“为商以德、诚信为本;谋利有度、货真价实”的经营理念，在未来发展的道路上，将继续深入市场，进一步了解市场需求，研究市场发展趋势。',
          logoUrl: require('public/images/product/introduce-3.jpg'),
        },
      ],
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.product-introduce {
  background-color: #d2b48c;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  h4 {
    color: #000;
  }
}
.services-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
}
</style>

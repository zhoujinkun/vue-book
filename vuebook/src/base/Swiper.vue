<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in sliders" :key="index">
        <img :src="slide.imageUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['sliders'],
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : {
              el:'.swiper-pagination',
          },
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
      setInterval(() => {
        let swiperSlides = this.swiperSlides;
        if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      }, 3000)
    }
  }
</script>
<style scoped>
    img{
        width:100%;
    }
</style>

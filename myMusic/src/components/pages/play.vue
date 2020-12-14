<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper v-if="arrs.length" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" >
    <!-- slides -->
    <swiper-slide v-for="(arr,index) of arrs" :key="index"><img :src="arr.imageUrl" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>

  export default {
   data(){
	   return{ 
		   arrs:[],
		   swiperOption:{
			   loop:true,
			   speed:1000,
			   autoplay: true,
			    pagination: {
				el: '.swiper-pagination',//分页的小圆点挂载点
				type: "bullets",
				clickable: true,//管理小圆点点击跳转图片
				dynamicBullets: false
		  		},
				navigation: {//管理两侧箭头点击跳转图片
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}
		   }
	   }
   },
   methods:{
	   callback(){

	   }
   },
   mounted(){
		this.$http({
			url: this.apis.banner
		}).then(res=>{
			this.arrs = res.data.banners
			// console.log(res)
		})
	}
  }
</script>
<style scoped>
	img{
		width: 100%;
	}
</style>
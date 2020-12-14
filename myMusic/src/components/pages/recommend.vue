<template>
	<div>
		<v-play></v-play>
		<h2>推荐歌单</h2>
		<div class="bigBox">
			<div class='box' v-for="arr of arrs" :key='arr.id' @click="tolist(arr.id)">
				<img :src="arr.picUrl" alt="">
				<p>{{arr.name}}</p>
			</div>
		</div>
		<!-- <h2>最新音乐</h2>
		<div class="buttom">
			<div class="left">
				<div class="song">羡慕</div>
				<span class="img1"></span><div class="author"><span>许嵩</span><span>-羡慕</span></div>
			</div>
			<div class="right"></div>
		</div> -->
	</div>
</template>
<script>
import vPlay from './play'
export default {
	data(){
		return{
			arrs:[]
		}
	},
	mounted(){
		this.$http({
			url: this.apis.recommend
		}).then(res=>{
			this.arrs = res.data.result
			console.log(res)
		})
	},
	methods:{
		tolist(i){
			this.$router.push('/playlist/'+i)
		}
	},
	components:{
		vPlay
	}
}
</script>	
<style scoped>
	h2{
		width: 1.6rem;
		text-align: center;
		font-size: 0.3rem;
		border-left: 0.03rem solid red;
		margin-top:0.2rem;
	}
	.bigBox{
		display: flex;
		justify-content: space-between;
		display: flex;
		flex-wrap:wrap; 
	}
	.box{
		width: 32%;
		margin-top:0.2rem
	}
	.box img{
		width: 100%;
	}
	.box p{
		font-size: 0.21rem;
	}





	/* .buttom{
		display: flex;
	}
	
	.img1{
		display: inline-block;
		width: 0.25rem;
		height: 0.2rem;
		background: url(/static/images/index_icon.png) no-repeat;
		background-size: 3rem;
		background-position: 0rem 0.07rem
	}
	.song{
		font-size: 0.4rem;
	}
	.author{
		font-size: 0.25rem;
	}
	.right{
		width: 0.5rem;
		height: 0.5rem;
		background: url(/static/images/index_icon.png) no-repeat;
		background-size: 3rem;
		background-position: -0.35rem 0rem;
		margin-top: 0.1rem;
		position: absolute;
		right: 0.4rem
	} */
</style>
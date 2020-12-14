<template>
	<div>
		<!-- 输入框 -->
		<form action="" class="box">
			<div class="small">
				<img src="/static/images/search.png" alt="">
				<input type="text" placeholder="搜索">
				<p>取消</p>
			</div>
		</form>
		<!-- 热搜词 -->
		<h3>热门搜索</h3>
		<div class="hot">
			<a href.prpvent="" v-for='(arr,index) of arrs' :key="index">{{arr.first}}</a>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			arrs:[]
		}
	},
	mounted(){
		this.$http({
			url:this.apis.hot
		}).then(res=>{
			this.arrs = res.data.result.hots
			console.log(res)
		})
	}
}
</script>
<style scoped>
	.box{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #ebecec;
		position: relative;
	}
	.box .small{
		width: 90%;
		height: 30px;
		position: absolute;
		top: 6px;
		left: 5%;
		background: #ebecec;
		border-radius: 15px ;
	}
	.box .small input{
		width: 3.5rem;
		position:absolute;
		top:6px;
		left: 1rem;
		border: none;
		background: #ebecec;
		color: #333;
		outline: none;
	}
	.box .small img{
		width: 0.4rem;
		position:absolute;
		top: 0.07rem;
		left: 0.3rem;
	}
	.box .small p{
		font-size: 0.25rem;
		position: absolute;
		top: 0.12rem;
		left: 5rem;
	}


	h3{
		font-size: 17px;
		margin-top:10px;
		margin-left: 10px
	}
	.hot{
		font-size: 25px;
	}
	.hot a{
		display: inline-block;
		height: 32px;
		border: 1px solid #000;
		border-radius: 12px;
		text-decoration: none;
		line-height: 32px;
		margin-top:10px;
		margin-left: 15px
	}
</style>
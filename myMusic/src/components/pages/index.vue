<template>
	<div class="box">
		<div class="head">
			<div class="left">
				<img src="/static/images/01.gif" />
			</div>
			<div class="right">
				<img src="/static/images/02.gif" alt="">
			</div>
		</div>
		<v-nav class="main"></v-nav>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
import vNav from '../views/nav'
export default {
	components:{
		vNav
	}
}
</script>
<style scoped>
	.head{
		width: 100%;
		height: 1rem;
		background: #d43c33;
		display: flex;
		justify-content: space-around;/*项目位于各行之前、之间、之后都留有空白的容器内。*/
		position: fixed;
		top:0;
		z-index: 999;
	}
	.left img{
		width: 2rem;
		margin-bottom: 0.25rem;
	}
	.right img{
		width: 1.5rem;
		margin-bottom: 0.1rem;
	}
	.main{
		position: fixed;
		top:1rem;
		z-index: 998;
		background: white;
	}
	.view{
		margin-top:1.5rem;
	}
</style>>


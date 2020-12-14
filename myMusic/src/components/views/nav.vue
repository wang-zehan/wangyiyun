<template>
	<div class="box">
		<router-link to="/index/recommend" active-class='active'>推荐音乐</router-link>
		<router-link to="/index/song" active-class='active'>热歌榜</router-link>
		<router-link to="/index/search" active-class='active'>搜索</router-link>
	</div>
</template>
<style scoped>
	.box{
		width: 100%;
		height: 0.5rem;
		font-size: 0.3rem;
		display: flex;
		justify-content: space-around;
		line-height: 0.5rem;
		border-bottom: 0.02rem solid #ccc;
	}
	.box a{
		text-decoration: none;
		color: #333;
	}
	.box a.active{
		color: red;
		border-bottom: 0.04rem solid red;
	}
</style>
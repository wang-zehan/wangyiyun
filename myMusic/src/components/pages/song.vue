<template>
	<div>
		<div class="big" :style="'background: url(' + bgimg + ') no-repeat;background-size:100%;padding-top:0.3rem;	background-position: -200px;'">
			<img :src="bgimg"  v-if="$route.params.id != undefined" alt="" style="width:100px;height:100px">
			<div class="small" v-if="$route.params.id == undefined"></div>
			<p class="time" v-if="$route.params.id == undefined">更新日期:{{ updateTime | formatTime}}</p>
		</div>
		<div >
			<div v-for="(song,index) of songs" :key='song.id' class="box" @click="tobofang(song.id)">
				<p class="num">{{ index>9 ? index + 1 : '0'+ (index + 1) }}</p>
				<div class="box2">
					<p class="song">{{ song.name}}</p>
					<div class="name">
						<span class="yangshi"></span>
						<span v-for='singer of song.ar' :key='singer.id'>{{ singer.name}}</span>-{{song.name}}
					</div>
					<p class="name"><span></span></p>
				</div>	
				<div class="bofang"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.big{
		width: 100%;
		height: 2.2rem;
	}
	.small{
		height: 1.5rem;
		background: url(/static/images/index_icon.png) no-repeat;
		background-size: 3rem 2rem;
		background-position: -0.3rem -0.6rem;
		padding-left: 0.2rem;
	}
	.hot{
		width: 100%;
	}
	.time{
		font-size: 0.23rem;
		color: white;
		margin-top: 0.15rem;
		margin-left: 0.2rem
	}
	.box{
		display: flex;
		height: 0.6rem;
		margin-top:0.2rem;
	}
	.num{
		font-size: 0.3rem;
		line-height: 0.5rem;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}
	.song{
		font-size: 0.3rem;
		line-height: 0.3rem;
		color: #000;
	}
	.name{
		font-size: 0.2rem;
		line-height: 0.3rem;
		color: #888;
	}
	.yangshi{
		display: inline-block;
		width: 0.25rem;
		height: 0.2rem;
		background: url(/static/images/index_icon.png) no-repeat;
		background-size: 3rem;
		background-position: 0rem 0.07rem
	}
	.bofang{
		width: 0.5rem;
		height: 0.5rem;
		background: url(/static/images/index_icon.png) no-repeat;
		background-size: 3rem;
		background-position: -0.35rem 0rem;
		margin-top: 0.1rem;
		position: absolute;
		right: 0.4rem
	}
</style>
<script>
export default {
	data(){
		return{
			updateTime:0,
			songs:[],
			bgimg:"/static/images/hot_music_bg.jpg"
		}
	},
	filters:{
		formatTime(time){
			var date = new Date(time);
			var month = date.getMonth() > 9 ? date.getMonth()+1 : '0' + (date.getMonth()+1);
			var day = date.getDate()>9 ? date.getDate() : '0' + date.getDate();
			return `${month}-${day}`;
		}
	},
	mounted(){
		var url = this.$route.params.id ? this.apis.playlist +'?id='+ this.$route.params.id : this.apis.topList 
		this.$http({
			url
		}).then(res=>{
			this.songs = res.data.playlist.tracks
			this.updateTime = res.data.playlist.updateTime
			this.bgimg = res.data.playlist.coverImgUrl
			console.log(res)
		})
	},
	methods:{
		tobofang(m){
			this.$router.push('/play/'+m)
		}
	}

}
</script>
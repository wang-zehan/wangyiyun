<template>
	<div>
		<audio ref="myaudio" :src="songurl"></audio>
		<button @click="play()">播放</button>
	</div>
</template>
<script>
export default {
	data(){
		return{
			songurl:''
		}
	},
	mounted(){
		this.songurl = "https://music.163.com/song/media/outer/url?id="+ this.$route.params.id +".mp3"
	},
	methods:{
		play(){ //执行这个方法的时候将会执行audio标签中的play元素
			var audio = this.$refs.myaudio;//通过ref获取标签元素
			audio.play();//play() 方法开始播放当前的音频或视频。 
		}
	}
}
</script>
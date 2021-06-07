<template>
	<view class="vedioPlayer">
		<video id="myVideo" class="video" 
		:loop="true" 
		:controls="false" 
		:src="video.src" 
		:autoplay="autoplay"
		@click="click"
		controls></video>
	</view>
</template>

<script>
	var timer = null;
	export default {
		props: ['video','index'],
		data() {
			return {
				play:false,
				dblClick:false,
				autoplay:false,
			};
		},
		methods:{
			click(){
				clearTimeout(timer);
				this.dblClick = !this.dblClick;
				timer = setTimeout(()=>{
					//单击视频
					if(this.dblClick === true){
						if(this.play === false){
							this.playThis();
						}else{
							this.pause();
						}
					}else{
						//双击视频
						this.$emit('changeClick');
					}
					this.dblClick = false;
				},300)
			},
			player(){
				//从头开始播放
				if(this.play === false){
					this.videoContext.seek(0);
					this.videoContext.play();
					this.play = true;
				}
			},
			pause(){
				if(this.play === true){
					this.videoContext.pause();
					this.play = false;
				}
			},
			//当前进度播放
			playThis(){
				if(this.play === false){
					this.videoContext.play();
					this.play = true;
				}
			},
			auto(){
				if(this.index === 0){
					this.autoplay = true;
					this.play = true;
				}
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo',this);
		},
		created() {
			// console.log(this.index);
			this.auto();
		},
		mounted() {
			
		}
	}
</script>

<style>
	.vedioPlayer {
		width: 100%;
		height: 100%;
	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>

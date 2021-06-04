<template>
	<view class="body">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item v-for="item of videos" :key="item.id">
					<view class="swiper-item">
						<vedio-player :video="item"></vedio-player>
					</view>
				</swiper-item>
				<view class="list-left">
					<list-left></list-left>
				</view>
			</swiper>
		</view>
	</view>
</template>

<script>
	import vedioPlayer from "./vedioPlayer.vue";
	import listLeft from "./listLeft.vue";
	export default {
		components: {
			vedioPlayer,listLeft
		},
		name: "vedioList",
		props:['list'],
		data() {
			return {
				videos:[]
			};
		},
		watch:{
			list(){
				this.videos=this.list;
			}
		}
	}
</script>

<style>
	.body {
		width: 100%;
		height: 100%;
	}

	.swiper-box {
		width: 100%;
		height: 100%;
	}

	.swiper {
		height: 100%;
		width: 100%;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
		z-index: 10;
	}
	
	.list-left {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}
</style>

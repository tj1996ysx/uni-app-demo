<template>
	<view class="body">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true" @change='videoChange' @touchstart='touchStart' @touchend='touchEnd'>
				<swiper-item v-for="(item,index) of videos" :key="item.id">
					<view class="swiper-item">
						<vedio-player :video="item" :index="index" ref="player" @changeClick='changeClick'></vedio-player>
					</view>
					<view class="left-box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right-box">
						<list-right :item="item" ref="right"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import vedioPlayer from "./vedioPlayer.vue";
	import listLeft from "./listLeft.vue";
	import listRight from "./listRight.vue";
	var time = null;
	export default {
		components: {
			vedioPlayer,
			listLeft,
			listRight
		},
		name: "vedioList",
		props: ['list'],
		data() {
			return {
				videos: [],
				pageStartY: 0,
				pageEndY: 0,
				page: 0,
			};
		},
		methods: {
			videoChange(res) {
				clearTimeout(time);
				this.page = res.detail.current;
				time = setTimeout(() => {
					if (this.pageStartY < this.pageEndY) {
						this.pageStartY = 0;
						this.pageEndY = 0;
						//调用子组件中的方法
						this.$refs.player[this.page].player();
						this.$refs.player[this.page + 1].pause();
					} else {
						this.pageStartY = 0;
						this.pageEndY = 0;
						this.$refs.player[this.page].player();
						this.$refs.player[this.page - 1].pause();
					}
				}, 1)
			},
			touchStart(res) {
				this.pageStartY = res.changedTouches[0].pageY;
			},
			touchEnd(res) {
				this.pageEndY = res.changedTouches[0].pageY;
			},
			changeClick() {
				this.$refs.right.videoClickCollect();
			}
		},
		watch: {
			list() {
				this.videos = this.list;
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

	.left-box {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}

	.right-box {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		right: 10px;
	}
</style>

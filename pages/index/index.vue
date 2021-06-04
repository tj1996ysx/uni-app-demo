<template>
	<view class="content">
		<firstNav></firstNav>
		<vedio-list :list="list"></vedio-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue";
	import firstNav from "../../components/first-nav.vue"
	import vedioList from "../../components/vedioList.vue"
	export default {
		components: {
			tab,
			firstNav,
			vedioList
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			//获取右上角胶囊按钮位置
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtonInfo);
			this.getVideos();
		},
		methods: {
			getVideos() {
				uni.request({
					url: 'http://www.admin-api.test/api/get_video',
					success: (res) => {
						this.list = res.data.list;
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
	}
</style>

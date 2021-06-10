<template>
	<view class="city">
		<firstNav></firstNav>
		<city-content :c_city=c_city""></city-content>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue";
	import firstNav from "../../components/first-nav.vue";
	import cityContent from "../../components/cityContent.vue";
	export default {
		components: {
			tab,
			firstNav,
			cityContent,
		},
		data() {
			return {
				c_city:'北京'
			};
		},
		onShow() {
			uni.getStorage({
				key:'chooseCity',
				success(res) {
					this.c_city = res.data;
				}
			})
		}
	}
</script>

<style>
	.city{
		width: 100%;
		height: 100%;
		background-color: #000000;
	}
</style>

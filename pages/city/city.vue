<template>
	<view class="city">
		<firstNav></firstNav>
		<city-content></city-content>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.city{
		width: 100%;
		height: 100%;
		background-color: #333333;
	}
</style>

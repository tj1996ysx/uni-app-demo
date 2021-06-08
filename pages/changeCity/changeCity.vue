<template>
	<view class="change-city">
		<change-header></change-header>
		<change-list :city ="city"></change-list>
	</view>
</template>

<script>
	import changeHeader from "../../components/changeCity/changeHeader.vue";
	import changeList from "../../components/changeCity/changeList.vue";
	export default {
		components:{
			changeHeader,changeList
		},
		data() {
			return {
				city:[]
			}
		},
		methods: {
			getCityInfo(){
				uni.request({
					url:"http://www.admin-api.test/api/get_citys",
					success:(res) => {
						this.city = res.data.city;
					}
				})
			}
		},
		created() {
			this.getCityInfo();
		}
	}
</script>

<style>
	.change-city{
		width: 100%;
		background: #000000;
	}
</style>

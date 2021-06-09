<template>
	<view class="change-city">
		<change-header></change-header>
		<change-list :letter="letter" :city ="city"></change-list>
		<change-alphabet :city ="city" @change="change"></change-alphabet>
	</view>
</template>

<script>
	import changeHeader from "../../components/changeCity/changeHeader.vue";
	import changeList from "../../components/changeCity/changeList.vue";
	import changeAlphabet from "../../components/changeCity/changeAlphabet.vue";
	export default {
		components:{
			changeHeader,changeList,changeAlphabet
		},
		data() {
			return {
				city:[],
				letter:[]
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
			},
			change(res){
				this.letter = res;
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
		height: 100%;
		background: #000000;
	}
</style>

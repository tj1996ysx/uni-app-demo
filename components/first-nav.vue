<template>
	<view class="body">
		<view class="first-nav">
			<view class="icon-box">
				<uni-icons type="search" size="30"></uni-icons>
			</view>
			<view class="middle">
				<navigator open-type="switchTab" class="text" url="/pages/index/index">
					推荐
				</navigator>
				<navigator open-type="navigate" class="text" url="/pages/city/city">
					同城
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"first-nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.body {
		height: 35px;
		line-height: 35px;
		width: 100%;
		position: fixed;
		top: 24px;
		left: 0;
		/* background-color: #000000; */
		margin: 0 auto;
		z-index: 200;
	}
	
	.first-nav {
		display: flex;
		display: -webkit-flex;
	}
	
	.icon-box {
		color:#FFFFFF;
		text-align: center;
		width: 20%;
	}
	
	.middle {
		display: flex;
		text-align: center;
		width: 55%;
	}
	
	.text {
		width: 50%;
		left: 0;
		color: #FFFFFF;
	}
</style>

<template>
	<view>
		<view class="change-header">
			<navigator open-type="navigateBack">
				<view class="left">
					<uni-icons type="closeempty" color="#FFFFFF" size="25"></uni-icons>
				</view>
				<view class="title">
					切换城市
				</view>
			</navigator>
		</view>
		<view class="fill"></view>
	</view>
</template>

<script>
	export default {
		name:"changeHeader",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.change-header{
		width: 100%;
		height: 80px;
		line-height: 80px;
		position: fixed;
		top: 0;
		left: 0;
		margin: 0 auto;
		background: #000000;
	}
	
	.fill{
		width: 100%;
		height: 80px;
	}
	
	.left{
		position: absolute;
		top: 0px;
		left: 15px;
		height: 80px;
		line-height: 80px;
		color: #666666;
	}
	
	.title{
		font-size: 17px;
		text-align: center;
		color: #FFFFFF;
	}
</style>

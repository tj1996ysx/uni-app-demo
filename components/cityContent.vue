<template>
	<view class="cityContent">
		<view class="conlation-body">
			<view class="conlation">
				<view class="conlation-content conlation-left">
					<view><uni-icons type="location-filled" color="#FFFFFF" size="13"></uni-icons></view>
					<view>自动定位: {{c_city}}</view>
				</view>
				<navigator class="conlation-content conlation-right" open-type="navigate" url="/pages/changeCity/changeCity">
					<view>切换</view>
					<view><uni-icons type="arrowright" color="#FFFFFF" size="13"></uni-icons></view>
				</navigator>
			</view>
		</view>
		<scroll-view class="video-list" scroll-y="true">
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://www.admin-api.test/storage/statics/456.mp4"></video>
				</view>
				<view class="img">
					<image class="image-box" src="../static/images/touxiang.jpg"></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://www.admin-api.test/storage/statics/456.mp4"></video>
				</view>
				<view class="img">
					<image class="image-box" src="../static/images/touxiang.jpg"></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://www.admin-api.test/storage/statics/456.mp4"></video>
				</view>
				<view class="img">
					<image class="image-box" src="../static/images/touxiang.jpg"></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://www.admin-api.test/storage/statics/456.mp4"></video>
				</view>
				<view class="img">
					<image class="image-box" src="../static/images/touxiang.jpg"></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"cityContent",
		props:['c_city'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.cityContent{
		width: 100%;
		height: 500px;
		z-index: 1;
		position: fixed;
	}
	
	.conlation-body{
		z-index: 10;
		width: 100%;
	}
	
	.conlation{
		width: 100%;
		height: 40px;
		margin-top: 70px;
		display: flex;
		display: -webkit-flex;
		align-items:center;
		justify-content:space-between;
		background-color: #333333;
	}
	
	.conlation-content{
		display: flex;
	}
	
	.conlation-left{
		color: #aaaaaa;
		font-size: 13px;
		padding-right: 15px;
		margin-left: 10px;
		text-align: center;
	}
	
	.conlation-right{
		color: #aaaaaa;
		font-size: 13px;
		padding-left: 15px;
		margin-right: 10px;
		text-align: center;
	}
	
	.video-list{
		width: 100%;
		height: 100%;
		background: #000000;
		display: flex;
		flex-wrap: wrap;
	}
	
	.item{
		width: 50%;
		display: inline-block;
		position: relative;
	}
	
	.video{
		width: 92%;
		height: 300px;
		margin-left: 4%;
	}
	
	.img{
		position: absolute;
		bottom: 7px;
		right: 15px;
	}
	
	.image-box{
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
</style>

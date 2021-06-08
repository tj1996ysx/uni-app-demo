<template>
	<view class="cityContent">
		<view class="conlation"> 
			<view class="conlation-content conlation-left">
				<view><uni-icons type="location-filled" color="#FFFFFF" size="13"></uni-icons></view>
				<view>自动定位: 北京</view>
			</view>
			<view class="conlation-content conlation-right">
				<view>切换</view>
				<view><uni-icons type="arrowright" color="#FFFFFF" size="13"></uni-icons></view>
			</view>
		</view>
		<view class="video-list">
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
		</view>
	</view>
</template>

<script>
	export default {
		name:"cityContent",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.cityContent{
		width: 100%;
		background-color: #000000;
		z-index: 10;
	}
	
	.conlation{
		width: 100%;
		height: 40px;
		margin-top: 70px;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		align-items:center;
		justify-content:space-between;
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
		background: #000000;
		display: flex;
		flex-wrap: wrap;
	}
	
	.item{
		width: 50%;
		overflow: auto;
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

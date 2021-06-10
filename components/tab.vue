<template>
	<view class="body">
		<view class="tab-body">
			<view class="tab">
				<view class="tab-box">
					首页
				</view>
				<view class="tab-box">
					关注
				</view>
				<view class="tab-box">
					<view class="icon-box">
						<uni-icons type="plusempty" size="20"></uni-icons>
					</view>
				</view>
				<view class="tab-box">
					消息
				</view>
				<view class="tab-box">
					我
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.body{
		
	}
	.tab-body{
		height: 50px;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 200;
	}
	
	.tab{
		display: flex;
		display: -webkit-flex;
		justify-content:center;
		align-items:center;
		height: 100%;
		/* background-color: #000000; */
		color: #FFFFFF;
		font-size: 15px;
	}
	
	.tab-box {
		text-align: center;
		flex: 1;
	}
	
	.icon-box {
		width: 60%;
		height: 30px;
		background: #FFFFFF;
		color: #000000;
		line-height: 30px;
		margin: 7.5px 20%;
		border-radius: 5px;
	}
</style>

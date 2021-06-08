<template>
	<view class="list-left">
		<view class="author">
			{{item.author}}
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="music-box">
			<view class="music">
				@月光下跳舞，婀娜多姿@tj
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listLeft",
		props:[
			'item',
		],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.list-left{
		height: 150px;
		margin-left: 10px;
		color: #FFFFFF;
		width: 150px;
	}
	
	.author{
		height: 35px;
		line-height: 35px;
		font-size: 15px;
	}
	
	.title{
		line-height: 22px;
		font-size: 12px;
		width: 100%;
		/* 指定如果足够长的话应该换行 */
		word-wrap: break-word;
	}
	
	.music-box{
		width: 100px;
		overflow: hidden;
	}
	
	.music{
		width: 160px;
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		animation: music 4s linear 0.2s infinite;
	}
	
	@keyframes music{
		0%{
			transform: translate3d(80%,0,0);
		}
		100%{
			transform: translate3d(-80%,0,0);
		}
	}
</style>

<template>
	<view class="list-left">
		<view class="author">
			张三
		</view>
		<view class="title">
			hellodsadfhasjfhasjfhasfjhasjfhasjfhasjfhas
		</view>
		<view class="music">
			月光
		</view>
	</view>
</template>

<script>
	export default {
		name:"listLeft",
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
		width: 120px;
	}
	
	.author{
		height: 35px;
		line-height: 35px;
		font-size: 15px;
	}
	
	.title{
		/* height: 35px; */
		line-height: 35px;
		font-size: 12px;
		width: 100%;
		/* 指定如果足够长的话应该换行 */
		word-wrap: break-word;
	}
	
	.music{
		height: 35px;
		line-height: 35px;
		font-size: 12px;
	}
</style>

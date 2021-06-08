<template>
	<view class="change-list">
		<view class="box">
			<view class="title">
				<uni-icons type="location-filled" color="" size="12"></uni-icons>
				当前城市
			</view>
			<view class="current-city">
				北京
			</view>
		</view>
		<view class="box">
			<view class="title">
				热门城市
			</view>
			<view class="hot-list">
				<view class="item" v-for="(item,index) of list" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="box-list" v-for="(items,index) in city" :key="index">
			<view class="initial">
				{{items.initial}}
			</view>
			<view class="city-name" v-for="item in items.list" :key="item.code">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"changeList",
		props:["city"],
		data() {
			return {
				list:['深圳','北京','上海','重庆','南京','成都','武汉','杭州','西安','广州','香港']
			};
		}
	}
</script>

<style>
	.change-list{
		width: 100%;
		background: #000000;
	}
	
	.box{
		background: #222222;
		margin-top: 10px;
		padding: 0px 5px 20px 5px;
	}
	
	.title{
		height: 40px;
		line-height: 40px;
		margin-left: 15px;
		color: #FFFFFF;
		font-size: 12px;
	}
	
	.current-city{
		color: #AAAAAA;
		margin-left: 15px;
		font-size: 15px;
		height: 30px;
		line-height: 30px;
	}
	
	.hot-list{
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	
	.item{
		width: 30%;
		height: 28px;
		line-height: 28px;
		font-size: 13.5px;
		background: #333333;
		margin-left: 2.5%;
		margin-bottom: 10px;
		text-align: center;
		color: #AAAAAA;
	}
	
	.box-list{
		padding: 8px 5px;
	}
	
	.initial{
		height: 25px;
		line-height: 25px;
		background: #000000;
		padding-left: 10px;
		color: #666666;
		font-size: 12px;
	}
	
	.city-name{
		background: #222222;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		color: #AAAAAA;
		font-size: 15px;
	}
</style>

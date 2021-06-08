<template>
	<view class="list-right">
		<view class="author-img">
			<image class="img" src="../static/images/touxiang.jpg"></image>
			<uni-icons class="author-add" type="plusempty" color="#FFFFFF" size="10px" v-show="authorAddShow" @click="authorAdd"></uni-icons>
		</view>
		<view class="right-box">
			<uni-icons type="heart-filled" :color="collectColor" size="30" @click="vedioCollect"></uni-icons>
		</view>
		<view class="number">
			{{item.loveNumber}}
		</view>
		<view class="right-box">
			<uni-icons class="collect" color="#FFFFFF" type="chat-filled" size="30"></uni-icons>
		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="right-box">
			<uni-icons type="redo" color="#FFFFFF" size="30"></uni-icons>
		</view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image class="img" src="../static/images/changpian.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listRight",
		props:[
			'item',
		],
		data() {
			return {
				authorAddShow:true,
				collectColor:''
			};
		},
		methods:{
			authorAdd(){
				//后台接口处理添加关注视频作者接口,处理完成在进行逻辑处理
				this.authorAddShow = false;
			},
			//视频收藏
			vedioCollect(){
				//还有一系列后台处理收藏业务逻辑接口，处理完成在进行页面渲染
				this.collectColor = this.collectColor === ''?'red':'';
			},
			//双击视频改变收藏状态
			videoClickCollect(){
				this.collectColor = 'red';
			}
		}
	}
</script>

<style>
	.list-right{
		width: 50px;
		margin: 0 auto;
	}
	
	.author-img{
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
		position: relative;
	}
	
	.author-add{
		width: 18px;
		height: 18px;
		background-color: #DD524D;
		border-radius: 50%;
		position: absolute;
		bottom: -9px;
		left: 16px;
		text-align: center;
		line-height: 18px;
	}
	
	.img {
		width: 50px;
		height: 50px;
		border-radius: 50%
	}
	
	.right-box{
		width: 100%;
		height: 40px;
		margin-top: 13px;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
		font-size: 15px;
	}
	
	.number {
		font-size: 10px;
		text-align: center;
		color: #FFFFFF;
	}
	
	.around {
		width: 50px;
		height: 50px;
		margin-top: 15px;
		animation: rotate 1.5s linear 0.2s infinite;
	}
	
	@keyframes rotate{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
</style>

<template>
	<view class="change-alphabet">
		<view class="list">
			<view 
			ref="alphabet"
			class="item"
			hover-class="hover" 
			v-for="(item,index) of city" 
			:key="index"
			@click="click(item.initial)"
			@touchstart="touchStart"
			@touchmove="touchMove"
			@touchend="touchEnd">
				{{item.initial}}
			</view>
		</view>
	</view>
</template>

<script>
	var timer = null;
	export default {
		name:"changeAlphabet",
		props:["city"],
		data() {
			return {
				touch:false
			};
		},
		mounted() {
			console.log(this.$refs)
		},
		methods:{
			click(res){
				this.$emit('change',res);
			},
			touchStart(){
				let top_dom = document.
				this.touch = true;
			},
			touchMove(e){
				//这样写死了到顶部的高度，虽然可以从上至下按住滑动跳转相应的位置，但从下至上不行,因为上下高度不一样
				// console.log(e)
				
				// clearTimeout(timer);
				// timer = setTimeout(()=>{
				// 	if(this.touch){
				// 		const touchY = e.changedTouches[0].pageY - 150;//150px为右侧字母列表与顶部之间的距离
				// 		const index = Math.floor(touchY/18) //18px为右侧字母列表的每个字母块的高度
				// 		if(index >= 0 && index <= this.city.length){
				// 			this.$emit('change',this.city[index].initial);
				// 		}
				// 	}
				// },30)
			},
			touchEnd(){
				this.touch =false;
			}
		}
	}
</script>

<style>
	.change-alphabet{
		position: fixed;
		top: 150px;
		right: 0px;
		color: #FFFFFF;
		z-index: 20;
	}
	
	.list{
		width: 20px;
	}
	
	.item{
		text-align: center;
		line-height: 10px;
		font-size: 12px;
		padding: 4px;
	}
	
	.hover{
		text-align: center;
		line-height: 10px;
		font-size: 18px;
		padding: 4px;
	}
</style>

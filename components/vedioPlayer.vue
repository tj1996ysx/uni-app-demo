<template>
	<view class="vedioPlayer">
		<video class="video" :loop="true" :controls="false" :src="video.src" object-fit="fill"
			enable-play-gesture="true"></video>
	</view>
</template>

<script>
	export default {
		props: ['video'],
		data() {
			return {

			};
		},
		mounted() {
			
		}
	}
</script>

<style>
	.vedioPlayer {
		width: 100%;
		height: 100%;
	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>

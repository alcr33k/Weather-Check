	<template>
	<div id="app">
		<img id="background-image" v-bind:src="this.imageSrc">
		<SearchBar v-on:update-weather-data="updateWeatherData"/> 
		<Weather v-bind:weatherData="this.weatherData" />
		<ChangeBackground v-bind:imageSrc="imageSrc" v-on:update-background="updateBackground" />
	</div>
	</template>

	<script>
	import SearchBar from './components/SearchBar';
	import Weather from './components/Weather';
	import ChangeBackground from './components/ChangeBackground';

	export default {
		name: 'app',
		components: {
			SearchBar,
			Weather,
			ChangeBackground
		}, 
		data() {
			return {
				selectedCity: '',
				weatherData: null,
				imageSrc: 'https://cdn.pixabay.com/photo/2017/01/03/15/37/gothenburg-1949754_960_720.jpg'
			}
		},
		methods: {
			updateWeatherData(newData) {
				this.weatherData = newData;
			},
			updateBackground(newBackground) {
				this.imageSrc = newBackground;
			}
		}
	}
	</script>

	<style>
	body {
	margin: 0;
	}
	#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0;
	}

	#background-image {
	width: 100%;
	height: 100vh;
	z-index: 0;
	}
	</style>

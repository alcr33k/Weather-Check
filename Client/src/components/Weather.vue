<template>
    <div v-if="this.weatherData" class="weather">
        <p>{{this.feelsLike}} weather in {{this.weatherData.data[0].city_name}}<p>
        <p>{{this.weatherData.data[0].temp}}&deg; and {{this.weatherData.data[0].weather.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'Weather',
    props: {
        selectedCity: String,
        selectedCountry: String,
        weatherData: Object 
    },
    computed: {
        feelsLike: function() {
            const _temperature = this.weatherData.data[0].temp;
            if (_temperature < -15) {
                return'Freezing';
            } else if (_temperature < -5) {
                return 'Really cold';
            } else if (_temperature < 5) {
                return 'Cold';
            } else if (_temperature < 15) {
                return 'Mild';
            } else if (_temperature < 25) {
                return 'Warm';
            } else if (_temperature < 35) {
                return 'Hot';
            } else {
                return 'Scorching';
            }
        }
    }
}
</script>

<style>
    .weather {
        z-index: 2;
        position: absolute;
        left: 70%;
        top: 60%;
        color: white;
        font-size: 30px;
    }
</style>
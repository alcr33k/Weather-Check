<template>
    <div class="searchBar">
        <h1>How's the weather in:</h1>
        <input type="text" v-model="selectedCity" placeholder="City"/>
        <select v-model="selectedCountry">
            <option value="SE">Sweden</option>
            <option value="US">USA</option>
        </select>
        <button @click="handleSubmit">Search</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchBar',
    data() {
        return {
            selectedCity: '',
            selectedCountry: 'SE' 
        }
    },
    methods: {
        async handleSubmit() {
            // this.$emit('change-country', this.selectedCountry);
            this.getWeatherData();
        },
        getWeatherData() {
            // axios anrop till server 
            const urlBase = 'http://localhost:8080/api/weather/';
            const formattedCity = this.replaceSpecialLetters(this.selectedCity);
            console.log(formattedCity);
            let url = urlBase + this.selectedCountry + '/' + formattedCity;
            console.log(url);
            axios.get(url)
            .then((response) => {
                // handle success
                this.$emit('update-weather-data', response.data);
            })
            .catch((error) => {
                // handle errors
                console.log(error);
                if (error.response === undefined) {
                    console.log('Recieved no response');
                } else {
                    console.log(error.response);
                }
            });
        },
        replaceSpecialLetters(inputString) {
            // å -> a
            inputString = inputString.replace(/\u00c5/g, "A"); 
            inputString = inputString.replace(/\u00e5/g, "a");    
            // ä -> a
            inputString = inputString.replace(/\u00c4/g, "A"); 
            inputString = inputString.replace(/\u00e4/g, "a");
            // ö -> o
            inputString = inputString.replace(/\u00d6/g, "O"); 
            inputString = inputString.replace(/\u00f6/g, "o");
            return inputString;
        }
    },
    
}
</script>

<style>
    .searchBar {
        z-index: 2;
        position: absolute;
        left: 15%;
        top: 25%;
        width: 50%;
    }
    .searchBar input {
        height: 40px;
        font-size: 22px;
        font-weight: bold;
        width: 65%;
        float: left;
        padding: 10px;
    }
    
    .searchBar button, .searchBar select {
        height: 62px;
        font-size: 22px;
        font-weight: bold;
        color: #2c3e50;
        float: left;
    }
</style>


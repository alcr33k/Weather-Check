<template>
    <button v-on:click="handleSubmit" :disabled="this.isUpdating === true" class="changeBgBtn">Change background</button>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ChangeBackground',
    props: {
        imageSrc: String
    },
    data() {
        return {
            isUpdating: false
        }
    },
    methods: {
        handleSubmit() {
            this.isUpdating = true;
            axios.get('http://localhost:8080/api/image')
            .then((response) => {
                // handle success
                if (response.data.imagePath !== this.imageSrc) {
                    this.$emit('update-background', response.data.imagePath);
                } else {
                    this.handleSubmit(); // recursion to get new image
                }
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
            this.isUpdating = false;
        }
    }
}
</script>

<style scoped>
    .changeBgBtn {
        z-index: 99;
        position: absolute;
        right: 5%;
        top: 10%;
        height: 30px;
        font-size: 14px;
        font-weight: bold;
        color: #2c3e50;
    }
</style>
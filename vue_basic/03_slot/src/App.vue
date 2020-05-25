<template>
    <div id="app">

        <app-car carName="Mazda">
            <h2 slot="title">{{carName}}</h2>
            <p slot="text">Lorem ipsum dolor.</p>
        </app-car>

    </div>
</template>

<script>
    import Car from "./Car";

    export default {
        data() {
            return {
                carName:'Ford'
            }
        },
        components: {
            appCar: Car,
        }
    }
</script>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h2 {
        color: red;
    }
</style>

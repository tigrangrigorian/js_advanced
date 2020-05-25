<template>
    <div id="app">
        <h2 v-colored:background.font="'brown'">{{title}}</h2>
        <h2 v-colored:color.delay="'green'">{{title}}</h2>

        <h2 v-font>Local font directives!!!</h2>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                title: 'Hello Vue',
            }
        },
        directives: {
            font: {
                bind(el) {
                    el.style.fontSize = '40px'
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="container text-center pt-5">
        <h1>{{title}}</h1>
        <hr>
        <app-counter></app-counter>
        <app-second-counter></app-second-counter>
        <app-actions></app-actions>
    </div>
</template>

<script>
    import Counter from "./Counter";
    import Actions from "./Actions";
    import SecondCounter from "./SecondCounter";

    export default {
        data() {
            return {}
        },
        components: {
            appSecondCounter: SecondCounter,
            appCounter: Counter,
            appActions: Actions
        },
        computed: {
            title() {
                return this.$store.getters.title
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
        /*margin-top: 60px;*/
    }
</style>

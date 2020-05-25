<template>
    <div>
        <h1>Car id - {{id}}</h1>

        <button
                class="btn btn-sm btn-light"
                @click="goBackToCars"
        >Back</button>

        <br><br>
<!--        <router-link-->
<!--                class="btn btn-info"-->
<!--                tag="button"-->
<!--                :to="'/car/' + id + '/full'"-->
<!--        >Full info</router-link>-->
        <router-link
                class="btn btn-info"
                tag="button"
                :to="{
                    name: 'carFull',
                    params: {id: id},
                    query: {name: 'Mazda', year: '2020'},
                    hash: '#scroll'
        }"
        >Full info</router-link>

        <hr>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                // id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        methods: {
            goBackToCars() {
                this.$router.push('/cars')
            }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id'];
            }
        },
        beforeRouteLeave(to, from, next) {
            console.log('Router leave');

            if (window.confirm('Are you sure you want to leave?')) {
                next();
            } else {
                next(false)
            }

        }
    }
</script>

<style scoped>

</style>

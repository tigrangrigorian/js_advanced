<template>
    <div class="container pt-2">
        <div class="form-group">
            <label for="name">Car Name</label>
            <input type="email" class="form-control" id="name" v-model="carName">
        </div>

        <div class="form-group">
            <label for="year">Car Year</label>
            <input type="text" class="form-control" id="year" v-model.number="carYear">
        </div>

        <button class="btn btn-success" @click="createCar">Create Car</button>
        <button class="btn btn-primary" @click="loadCars">Load Cars</button>

        <hr>

        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="car of cars"
                    :key="car.id"
            >
                <strong>{{car.name}}</strong> - {{car.year}}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                carName: '',
                carYear: 2018,
                cars: [],
                resource: null
            }
        },
        methods: {
            createCar() {
                const car = {name: this.carName, year: this.carYear};
                // this.$http.post('http://localhost:3000/cars', car)
                //     .then(response => {
                //       return response.json();
                //     })
                //     .then(response => {
                //         console.log(response);
                //     })
                this.resource.save({}, car)
            },
            loadCars() {
                // this.$http.get('http://localhost:3000/cars')
                //     .then(response => {
                //         return response.json();
                //     })
                //     .then(response => {
                //         this.cars = response;
                //     })
                this.resource.get().then(response => {
                    return response.json()
                }).then(response => {
                    return this.cars = response
                })
            }
        },
        created() {
            this.resource = this.$resource('cars');
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

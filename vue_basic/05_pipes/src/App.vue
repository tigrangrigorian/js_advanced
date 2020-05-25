<template>
    <div id="app">
        <h2>{{title}}</h2>
        <h2>{{title | lowercase}}</h2>
        <h2>{{title | uppercase | lowercase}}</h2>

        <hr>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="n of filteredName"
                :key="n">
                {{n}}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                title: 'Hello Vue',
                names: ['koo', 'loo', 'boo', 'noo'],
                searchName: '',
            }
        },
        computed: {
          filteredName() {
              return this.names.filter(n => {
                  return n.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
              })
          }
        },
        filters: {
            lowercase(value) {
                return value.toLowerCase();
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
        margin-top: 10px;
    }
</style>

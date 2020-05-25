<template>
    <div id="app">
        <h2>Forms</h2>
        <hr>
        <h3>Text</h3>
        <input type="text" v-model="name">
        <p>{{name}}</p>
        <hr>
        <h3>Textarea</h3>
        <textarea cols="30" rows="10" v-model="text"></textarea>
        <p>{{text}}</p>
        <hr>
        <h3>Checkbox</h3>

        <label>Fb
            <input type="checkbox" value="fb" v-model="social">
        </label><br>

        <label>Instagram
            <input type="checkbox" value="inst" v-model="social">
        </label><br>

        <label>Vk
            <input type="checkbox" value="vk" v-model="social">
        </label>

        <ul>
            <li v-for="s in social" :key="s">{{s}}</li>
        </ul>
        <hr>
        <h3>Radio</h3>
        <label>Fb
            <input type="radio" value="fb" v-model="socialRadio">
        </label><br>

        <label>Instagram
            <input type="radio" value="inst" v-model="socialRadio">
        </label><br>

        <label>Vk
            <input type="radio" value="vk" v-model="socialRadio">
        </label>

        <p>{{socialRadio}}</p>
        <hr>
        <h3>Select</h3>
        <select v-model="defaultSelected">
            <option v-for="list in selectList"
                    :key="list"

            >{{list}}</option>
        </select>
        <p>{{defaultSelected}}</p>
        <hr>
        <h3>Number</h3>
        <input type="text" v-model.number="age"/>
        <p>{{age}}</p>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                name: 'Input',
                text: 'Text..',
                social: [],
                socialRadio: 'vk',
                defaultSelected: 'ru',
                selectList: ['am', 'ru', 'eng', 'uk'],
                age: 20
            }
        },
        watch: {
            age(val) {
                console.log(val);
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

    p {
        white-space: pre;
    }
</style>

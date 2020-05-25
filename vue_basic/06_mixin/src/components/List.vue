<template>
    <div>
        <h2>List</h2>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="n of filteredName"
                :key="n">
                {{n}}
            </li>
        </ul>

        <hr>
    </div>
</template>

<script>
    import ListMixin from '../listMixin.js';

    export default {
        name: "List",
        mixins: [ListMixin]
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <ul>
           <TodoItem
                v-for="(todo, index) in todos"
                v-bind:todo ="todo"
                v-bind:index = "index"
                v-on:remove-todo = "removeTodo"
           />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            TodoItem
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin-bottom: 10px;
    }
</style>

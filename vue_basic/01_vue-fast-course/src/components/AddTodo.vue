<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                console.log("Submit", this.title);
                if (this.title.trim()) {
                    this.$emit('add-todo', {
                        id: Date.now(),
                        title: this.title,
                        completed: false
                    })
                }
                this.title = "";
            }
        }
    }
</script>

<style scoped>
    form {
        margin: 0 auto;
        display: flex;
    }
    input {
        width: 100%;
    }
</style>

<template>
    <div>
       <slot name="title"></slot>

        <hr>

        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
    }

</script>

<style>
    div {
        border: 1px solid black;
    }

</style>

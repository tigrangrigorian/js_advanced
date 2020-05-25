<template>
   <div>
       <h1 style="color: red">
           Page not found 404
       </h1>

       <router-link
               class="btn btn-info"
               tag="button"
               to="/"
       >Go Home
       </router-link>
   </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>

</style>

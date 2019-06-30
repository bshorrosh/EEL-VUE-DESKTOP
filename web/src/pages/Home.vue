<template>
    <main-layout>
        <div class="home">
            <p>Welcome Home</p>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'

    export default {
        components: {
            MainLayout
        }
    }
</script>

<style scoped>
    .home p {
        text-align: center;
        margin-top: 50px;
        font-size: 50px;
    }
</style>

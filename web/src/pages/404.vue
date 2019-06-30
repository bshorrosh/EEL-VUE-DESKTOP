<template>
    <main-layout>
        <div class="_404">
            <p>Oops Something When Wrong</p>
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
    ._404 p {
        min-height: 1000px;
        text-align: center;
        margin-top: 50px;
        font-size: 50px;
    }
</style>

<template>
    <main-layout>
        <div class="about">
            <p>About Page</p>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';

    export default {
        components:
            {
                MainLayout
            }
    }
</script>

<style scoped>
    .about p {
        text-align: center;
        margin-top: 50px;
        font-size: 50px;
    }
</style>

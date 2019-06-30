<template>
    <main-layout>
        <div class="graph">
            <p>Graph Was Generated In Python</p>
            <div class="calling-script">(JavaScript Called Python)</div>
            <div class="graph2"></div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import JsCallToPy from '../js/js_to_py';

    export default {
        components: {
            MainLayout
        },
        data() {
            return {
                loaded: false
            }
        },
        mounted() {
            JsCallToPy.get_graph_via_python().then(function (html) {
                $('.graph2').html(html);

            })
        }
    }
</script>

<style scoped>
    .graph p {
        text-align: center;
        margin-top: 50px;
        font-size: 50px;
    }

    .graph .calling-script {
        text-align: center;
        font-size: 30px;
    }

</style>

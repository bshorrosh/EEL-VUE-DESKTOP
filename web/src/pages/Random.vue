<template>
    <main-layout>
        <div class="random">
            <p>Random Data</p>
            <div class="calling-script">
                {{my_py_data}}
            </div>
            <div class="calling-script">
                {{my_js_data_via_py}}
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import PyCallToJs from '../js/py_to_js';
    import JsCallToPy from '../js/js_to_py';

    export default {
        components:
            {
                MainLayout
            },
        data() {
            return {
                my_py_data: 0,
                my_js_data_via_py: 0
            }
        },
        mounted() {
            let that = this;
            Promise.all([JsCallToPy.get_random_via_python(), PyCallToJs.get_random_js_via_py()]).then(function (results) {
                that.my_py_data = results[0];
                that.my_js_data_via_py = results[1];
            });
        }
    }
</script>

<style scoped>
    .random p {
        text-align: center;
        margin-top: 50px;
        font-size: 50px;
    }

    .random .calling-script {
        text-align: center;
        font-size: 25px;
    }
</style>

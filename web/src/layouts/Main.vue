<template>
    <div class="container">
        <div class="header">
            <h1>Sample Desktop Application</h1>
            <p> Using <b>EEL.JS</b> With <b>VUE.JS</b></p>
        </div>
        <div class="navbar">
            <v-link href="/home">Home</v-link>
            <v-link href="/about">About</v-link>
            <v-link href="/random">Random</v-link>
            <v-link href="/graph">Graph</v-link>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import VLink from "../components/VLink.vue"

    export default {
        components: {
            VLink
        }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        padding: 15px 30px;
        background: #f9f7f5;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    .header {
        padding: 80px;
        text-align: center;
        background: #1abc9c;
        color: white;
    }
    .header h1 {
        font-size: 40px;
    }
    .header p {
        font-size: 30px;
    }
    .navbar {
        overflow: hidden;
        background-color: #333;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 1;
    }

    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
    }

    .navbar a.right {
        float: right;
    }

    .navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    .navbar a.active {
        background-color: #666;
        color: white;
    }

    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
    }

    .side {
        -ms-flex: 30%; /* IE10 */
        flex: 30%;
        background-color: #f1f1f1;
        padding: 20px;
    }

    .main {
        -ms-flex: 70%; /* IE10 */
        flex: 70%;
        background-color: white;
        padding: 20px;
    }

    .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
    }

    .footer {
        margin-top: 100px;
        padding: 20px;
        text-align: center;
        background: #ddd;
    }

    .bk-plot-layout.bk-layout-fixed {
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 700px) {
        .row {
            flex-direction: column;
        }
    }
.bk-root{
    width:800px !important;
    margin-left:auto;
    margin-right: auto;
}
    @media screen and (max-width: 400px) {
        .navbar a {
            float: none;
            width: 100%;
        }
    }
</style>

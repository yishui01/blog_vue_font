<template>
    <span class="readBtn">{{text}}</span>
</template>

<script>
    export default {
        name: "Button",
        props:{
            text:{
                type:String,
                default:"阅读全文 »"
            }
        }
    }
</script>

<style scoped>
    .readBtn {
        display: inline-block;
        padding: 0 20px;
        font-size: 14px;
        color: #555;
        background: #999;
        border: 2px solid #555;
        text-decoration: none;
        border-radius: 2px;
        transition-property: background-color;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        cursor: pointer;
    }

    .readBtn {
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 3px;
        border: none;
    }

    .readBtn:hover {
        border-color: #666;
        background: #666;
    }
</style>

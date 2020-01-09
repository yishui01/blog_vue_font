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
        background: #fff;
        border: 2px solid #555;
        text-decoration: none;
        border-radius: 2px;
        transition-property: background-color;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        line-height: 2;
        cursor: pointer;
    }

    .readBtn {
        background: #97dffd;
        color: #fff;
        font-size: 13px;
        padding: 1px 15px;
        border-radius: 5px;
        border: none;
    }

    .readBtn:hover {
        border-color: #47456d;
        color: #fff;
        background: #47456d;
    }
</style>

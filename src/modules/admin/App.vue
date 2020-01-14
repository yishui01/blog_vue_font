<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="slide"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="slide"/>
    </div>
</template>
<script>
    export default {
        name: "app",
    }
</script>
<style>

</style>

<script setup>
import { ref } from 'vue';

const $ = defineProps({
    src: String,
    mode: String
});

let isInsite = $.src.startsWith("/");

let computedMode = ref("");
if (!$.mode) computedMode.value = isInsite ? "stay" : "jump";
else computedMode.value = $.mode;
</script>

<template>
    <template v-if="computedMode == 'stay'">
        <router-link :to="encodeURI(src)" v-if="isInsite" class="cursor"><slot /></router-link>
        <a :href="src" v-else class="cursor"><slot /></a>
    </template>

    <template v-else-if="computedMode == 'jump'">
        <a :href="src" target="_blank" class="cursor"><slot /></a>
    </template>
</template>

<style scoped>
a {
    color: rgb(0, 93, 146);

    @apply transition-opacity duration-200 opacity-70 dark:text-sky-300 inline-flex;
}

a:hover {
    @apply opacity-100;
}

a:active {
    @apply opacity-90;
}
</style>
<script setup>
import { watch } from "vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import cur from "./assets/js/cursor";

const route = useRoute();

watch(
    () => route.path,
    async _ => { setTimeout(cur.refresh, 300); }
)
</script>

<template>
    <div class="relative contents text-gray-600 dark:text-gray-300">
        <RouterView v-slot="{ Component }" class="block absolute left-1/8 w-3/4 py-12 sm:left-1/4 sm:w-1/2 sm:py-40">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>

<style scoped>
.fade-enter-active {
    transition: all .2s ease-in;
}

.fade-leave-active {
    transition: all .2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
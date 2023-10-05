<script setup>
const $ = defineProps({
    text: String,
    rbclass: String,
    rtclass: String,
    class: String
});
</script>

<template>
    <ruby :class="class">
        <rb :class="rbclass">
            <slot></slot>
        </rb>
        <rt :class="rtclass">
            {{ text }}
        </rt>
    </ruby>
</template>

<style scoped>
rt {
    @apply text-xs text-center
}
</style>
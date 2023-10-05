<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";
</script>

<template>
    <span>
        <div class="reveal reveal-hide text-4xl sm:text-5xl tracking-wider mb-3 h-14">404 Not Found</div>
        <div>
            <p class="font-bold reveal reveal-hide">抱歉，</p>
            <p class="reveal reveal-hide">请检查你访问的网址是否正确，</p>
            <p class="reveal reveal-hide">或者点击<LinkTo src="/"><RubyText text="/index">这里</RubyText></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}
</style>

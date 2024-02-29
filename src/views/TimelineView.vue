<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";

import config from "../config.yml";
</script>

<template>
    <span>
        <div class="reveal reveal-hide text-5xl tracking-wider mb-3 h-14">时光</div>
        <div>
            <p class="font-bold reveal reveal-hide">Stories yet to be told.</p>

            <div class="reveal reveal-hide sm:mx-2 -mx-2 h-0 border-t"></div>
            <ul class="sm:mx-2 -mx-2 sm:px-10 pt-7">
                <li v-for="item in config.timeline"
                    :key="item.year"
                    class="block sm:mb-14 mb-7 py-2 last:mb-7">
                    <div class="reveal reveal-hide block font-bold text-8xl select-none text-stone-100 dark:text-gray-500 -rotate-90 absolute sm:-translate-x-32 -translate-x-24 translate-y-14">{{ item.year }}</div>
                    <div v-for="data in item.meta"
                        :key="data"
                        class="reveal reveal-hide cursor sm:ml-8 ml-10 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded whitespace-nowrap text-ellipsis overflow-hidden text-lg leading-9 mb-2">
                        <span class="text-base hidden min-w-40 sm:inline-block">{{ data.date }}</span>
                        <span class="sm:text-base text-sm">{{ data.desc }}</span>
                    </div>
                </li>
            </ul>
            <div class="reveal reveal-hide sm:mx-2 -mx-2 h-0 border-t mb-3"></div>

            <p class="reveal reveal-hide">点击<LinkTo src="/"><RubyText text="/index">这里</RubyText></LinkTo>可以回到主页。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}
</style>

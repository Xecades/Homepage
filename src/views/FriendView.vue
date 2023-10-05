<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";

import config from "../config.yml";
</script>

<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">友人帐</div>
        <div>
            <p class="font-bold">有故事的人们。</p>
            <ul class="border-y -mx-2 sm:px-10 sm:mx-2 mb-3">
                <li v-for="item in config.friend"
                    :key="item"
                    class="text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors">
                    <LinkTo :src="item.url" class="inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1" mode="jump">{{ item.nick }}</LinkTo>
                    <span class="sm:text-base text-sm sm:ml-0 ml-5">{{ item.desc }}</span>
                </li>
            </ul>
            <p>除此之外，你可以点<LinkTo src="/"><RubyText text="/index">这里</RubyText></LinkTo>回到主页。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}
</style>

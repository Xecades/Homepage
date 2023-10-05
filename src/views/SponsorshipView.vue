<script setup>
import { ref } from "vue";

import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";

import config from "../config.yml";

let show = ref(false);
let list = ref(config.sponsorship.reverse());
</script>

<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">赞助者</div>
        <div>
            <p class="font-bold">谢谢你，</p>
            <p>你的每一分善意都将被他记在心中。</p>

            <ul class="border-y sm:mx-2 -mx-2 sm:px-10 mb-3 select-none">
                <li v-for="item in list"
                    :key="item"
                    class="cursor text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors">
                    <a href="javascript:void(0)" class="inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1">
                        {{ item.nick }}
                        <transition name="sponsor">
                            <span v-if="show">
                                （{{ item.money }}元）
                            </span>
                        </transition>
                    </a>

                    <span class="sm:text-base text-sm sm:ml-0 ml-5">{{ item.desc }}</span>
                </li>
            </ul>
            <p>注：手动更新，排名不分先后。</p>
            <p>你可以点击<a href="javascript:void(0)" @click="show = !show" class="cursor"><RubyText :text="show ? 'ON' : 'OFF'">这里</RubyText></a>切换赞助金额显示，或者点击回到<LinkTo src="/"><RubyText text="/index">主页</RubyText></LinkTo>或<LinkTo src="/sponsor"><RubyText text="/sponsor">赞助</RubyText></LinkTo>页面。
            </p>
        </div>
    </span>
</template>

<style scoped>
.sponsor-enter-active {
    transition: all 0.2s ease-in;
}

.sponsor-leave-active {
    transition: all 0.2s ease-out;
}

.sponsor-enter-from,
.sponsor-leave-to {
    transform: translateX(6px);
    opacity: 0;
}

p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}

a {
    color: rgb(0, 93, 146) !important;
}
</style>
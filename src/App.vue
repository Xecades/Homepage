<script setup>
import { RouterView } from "vue-router";
import loadImage from "image-promise";

import wechatURL from "./assets/img/wechat.jpg";
import alipayURL from "./assets/img/alipay.jpg";


loadImage([wechatURL, alipayURL]);
</script>

<template>
    <div class="relative contents text-gray-600 dark:text-gray-300">
        <RouterView class="main transition-opacity duration-200 ease-out block absolute left-1/8 w-3/4 py-12 sm:left-1/4 sm:w-1/2 sm:py-40"></RouterView>
    </div>
</template>
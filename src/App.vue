<script setup>
import { RouterView } from "vue-router";
import loadImage from "image-promise";

import wechatURL from "./assets/img/wechat.jpg";
import alipayURL from "./assets/img/alipay.jpg";

loadImage([wechatURL, alipayURL]);
</script>

<template>
    <div class="w-full text-gray-600 dark:text-gray-300">
        <RouterView class="main block transition-opacity duration-200 ease-out mx-auto w-5/6 sm:w-[40rem] py-40"></RouterView>
    </div>
</template>
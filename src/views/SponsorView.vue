<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";
</script>

<template>
    <span>
        <div class="text-5xl tracking-wider mb-3 h-14">赞助</div>
        <div>
            <p class="font-bold">谢谢你，陌生人。</p>
            <div class="qrcode ml-9"><img src="../assets/img/wechat.jpg" class="-ml-3 mr-6 sm:m-0"/><img src="../assets/img/alipay.jpg" class="-mr-3 sm:m-0"/></div>
            <p>注：建议在支付备注栏填写你的昵称和寄语，请尽量简短，感谢。</p>
            <p>十分感谢为我提供了赞助的伙伴们！你可以<LinkTo src="/sponsorship"><RubyText text="/sponsorship">点击这里</RubyText></LinkTo>查看明细。</p>
            <p>你也可以点击<LinkTo src="/"><RubyText text="/index">这里</RubyText></LinkTo>返回主页。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}

.qrcode img {
    @apply w-1/2 sm:w-72 bg-white border border-gray-200 dark:border-gray-700 rounded sm:mr-8 mb-4 inline-block select-none;
}
</style>

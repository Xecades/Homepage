<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";
</script>

<template>
    <span>
        <div class="reveal reveal-hide text-5xl tracking-wider mb-3 h-14">你好。</div>
        <div>
            <p class="font-bold reveal reveal-hide">我是 Xecades，</p>
            <p class="reveal reveal-hide"><RubyText text="/'zɛkeɪdz/" rtclass="pho">“Xecades”</RubyText> 是我广泛使用的网名，通过键入它，你可以在互联网上找到所有我的<LinkTo src="/about"><RubyText text="/about">踪迹</RubyText></LinkTo>。</p>
            <p class="reveal reveal-hide">我现在是一名大二学生，就读于<LinkTo src="http://ckc.zju.edu.cn/"><RubyText text="chu kochen honors college">浙江大学竺可桢学院</RubyText></LinkTo>，现任浙江大学 AAA 战队队员。如果你恰好也是这个学校的学生，欢迎来图灵 2302 班找我。</p>
            <p class="reveal reveal-hide">我会在<LinkTo src="https://blog.xecades.xyz/" mode="stay"><RubyText text="/blog">博客</RubyText></LinkTo>上记录我感兴趣的内容，我也会记录自己的学习<LinkTo src="https://note.xecades.xyz/" mode="stay"><RubyText text="/note">笔记</RubyText></LinkTo>。有时，我会开发一些有趣的<LinkTo src="/lab"><RubyText text="/lab">项目</RubyText></LinkTo>。我乐于邂逅<LinkTo src="/friend"><RubyText text="/friend">有趣的灵魂</RubyText></LinkTo>，他们带给了我许多新的思考，伴随着我的<LinkTo src="/timeline"><RubyText text="/timeline">成长</RubyText></LinkTo>。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}
</style>

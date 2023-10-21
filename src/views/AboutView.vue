<script setup>
import RubyText from "../components/RubyText.vue";
import LinkTo from "../components/LinkTo.vue";
</script>

<template>
    <span>
        <div class="reveal reveal-hide text-5xl tracking-wider mb-3 h-14">关于我，</div>
        <div>
            <p class="font-bold reveal reveal-hide">那个自称为 Xecades 的人。</p>
            <p class="reveal reveal-hide">他出生于 00 后的第一个<RubyText text="2005">鸡年</RubyText>，居住在中国南方的一个小县城。</p>
            <p class="reveal reveal-hide">他不喜欢娱乐圈的歪风邪气，所以尽量不要和他聊这些东西。但这并不表明他是一个极为严肃的人，他只是不喜欢人云亦云、哗众取宠。</p>
            <p class="reveal reveal-hide">他也追星，只不过追的是先秦诸子和中华豪杰：孔丘、李白、鲁迅，先生们是他一生的榜样。</p>
            <p class="reveal reveal-hide">他初中就读于<LinkTo src="http://mydcis.net/">绵阳东辰</LinkTo>，高中在<LinkTo src="http://www.cdqz.net/">成都七中</LinkTo>。从初中二年级到高中一年级，他曾是一名<RubyText text="OIer">信竞选手</RubyText>，只不过那些知识他已经忘得差不多了。</p>
            <p class="reveal reveal-hide">兴趣让他沉浸于有趣的知识不能自拔，他渴望知道更多、学习更多。他乐于创造，勤于思考，希望有一双能发现美的眼睛。</p>
            <p class="reveal reveal-hide">他的 Telegram 账号是 <LinkTo src="https://t.me/Xecades">@Xecades</LinkTo>；Github 账号是 <LinkTo src="https://github.com/Xecades">@Xecades</LinkTo>；邮箱是 i#xecades.xyz。如果感兴趣，你可以通过这些渠道找到他。另外，你可以在网页控制台找到他的一些私人联系方式。</p>
            <p class="reveal reveal-hide">网站运营需要持续的开销，如果本站内容有幸能给您带来启发，欢迎<LinkTo src="/sponsor"><RubyText text="/sponsor">赞助</RubyText></LinkTo>。</p>
            <p class="reveal reveal-hide">回主页的传送门在<LinkTo src="/"><RubyText text="/index">这里</RubyText></LinkTo>。</p>
        </div>
    </span>
</template>

<style scoped>
p {
    @apply indent-9 text-base sm:text-lg leading-9 sm:leading-8 mb-2
}
</style>

<script setup lang="ts">
import HomeLayout from "@/layout/home.vue";
import { ruby, link } from "@/assets/ts/partials";

const data = {
    "title": "你好。",
    "subtitle": "我是 Xecades，",
    "body": [
        [
            ruby("“Xecades”", "/'zɛkeɪdz/"),
            " 是我广泛使用的网名，通过键入它，你可以在互联网上找到所有我的",
            link(ruby("踪迹", "/about"), "/about"), "。",
        ],
        [
            "我是一名大二学生，就读于", link(ruby("浙江大学竺可桢学院", "Chu Kochen Honors College"), "http://ckc.zju.edu.cn/"),
            "，目前在浙江大学 CAD&CG 国家重点实验室实习，研究兴趣为 CV 方向。如果你恰好也是这个学校的学生，欢迎来图灵 2302 班找我。",
        ],
        [
            "我会在", link(ruby("博客", "/blog"), "https://blog.xecades.xyz/"),
            "上记录我感兴趣的内容，也会记录自己的学习", link(ruby("笔记", "/note"), "https://note.xecades.xyz/"),
            "。有时，我会开发一些有趣的", link(ruby("项目", "/lab"), "/lab"),
            "。我乐于邂逅", link(ruby("有趣的灵魂", "/friend"), "/friend"),
            "，他们带给了我许多新的思考，伴随着我的", link(ruby("成长", "/timeline"), "/timeline"), "。",
        ]
    ]
};
</script>

<template>
    <HomeLayout :data="data" />
</template>

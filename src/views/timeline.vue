<script setup lang="ts">
import HomeLayout from "@/layout/home.vue";
import { ruby, link, timeline } from "@/assets/ts/partials";

const data = {
    "title": "时光",
    "subtitle": "Stories yet to be told.",
    "body": [
        timeline([
            {
                year: 2016,
                meta: [
                    { date: "上半年", desc: "首次接触 C 语言" },
                    { date: "9 月 19 日 13:53", desc: "注册第一个 OJ：openjudge" },
                    { date: "9 月 29 日", desc: "提交第一个程序 超级玛丽（但是错了）" },
                    { date: "9 月 29 日", desc: "通过人生中第一道信竞题目" },
                    { date: "下半年", desc: "学习 C++" },
                ]
            },
            {
                year: 2017,
                meta: [
                    { date: "上半年", desc: "暂时中断 OI 学习" },
                    { date: "上半年", desc: "从 C 转入 C++" },
                    { date: "10 月 14 日 14:30", desc: "NOIP2017 普及组初赛" },
                    { date: "10 月 18 日 13:54", desc: "注册洛谷账号" },
                    { date: "11 月", desc: "惊喜地得知进入复赛" },
                    { date: "11 月 11 日", desc: "NOIP2017 普及组复赛" },
                ]
            },
            {
                year: 2018,
                meta: [
                    { date: "上半年", desc: "学了一些 MFC" },
                    { date: "上半年", desc: "认识到 OI 重要性" },
                    { date: "上半年", desc: "继续学习信竞" },
                    { date: "8 月", desc: "选择还是考普及组" },
                    { date: "10 月 13 日 14:30", desc: "NOIP2018 普及组初赛" },
                    { date: "11 月 10 日", desc: "NOIP2018 普及组复赛" },
                    { date: "12 月", desc: "OI 终于被父母认可" },
                ]
            },
            {
                year: 2019,
                meta: [
                    { date: "3 月 11 日", desc: "中考签约东辰" },
                    { date: "3 月 14 日", desc: "中考签约绵中" },
                    { date: "6 月 16 日", desc: "成都七中自主招生考试" },
                    { date: "6 月 18 日左右", desc: "成都七中录取通知" },
                    { date: "8 月", desc: "博客得到大幅更新" },
                    { date: "8 月 31 日", desc: "成都七中开学" },
                    { date: "11 月 16 日", desc: "CSP-S 2019 复赛" },
                ]
            },
            {
                year: 2020,
                meta: [
                    { date: "3 月 28 日", desc: "开始正式学习前端" },
                    { date: "寒假", desc: "学习 npm、node.js、vue" },
                    { date: "寒假", desc: "大幅更新 / 重构博客" },
                    { date: "补充", desc: "初识人工智能，编写其可视化程序" },
                    { date: "补充", desc: "完成 TIY 网页编辑器，里程碑式的进展" },
                    { date: "10 月", desc: "初识傅里叶级数变换，编写其模拟程序" },
                    { date: "12 月", desc: "学习 LaTeX 的 TikZ 库，可以清爽地绘图了！" },
                ]
            },
            {
                year: 2021,
                meta: [
                    { date: "1 月", desc: "大幅重构博客，「大道至简」" },
                    { date: "2 月 1 日", desc: "DFT，IDFT 和 FFT！" },
                    { date: "2 月", desc: "博客全部迁移至 Vercel，采用 CI 部署" },
                    { date: "3 月", desc: "自己写的第一个 API 破一万调用" },
                    { date: "3 月 17 日", desc: "学习偏导、隐式方程绘制" },
                    { date: "3 月", desc: "在阿里云试用了一个月的 ECS" },
                    { date: "4 月", desc: "重新开始玩几年前买的树莓派" },
                    { date: "暑假", desc: "第一个摆脱了电脑的暑假" },
                    { date: "补充", desc: "新爱好：Engraver's Script 英文书法" },
                ]
            },
            {
                year: 2022,
                meta: [
                    { date: "这一年", desc: "被夺走的一年" },
                    { date: "4 月 18 日白天", desc: "在 16 岁提前到来的成人礼" },
                    { date: "4 月 18 日晚上", desc: "换掉了用了 7 年的头像" },
                ]
            },
            {
                year: 2023,
                meta: [
                    { date: "8 月 24 日", desc: "浙江大学竺可桢学院图灵班就读" },
                    { date: "8 月", desc: "十八岁生日快乐！" },
                    { date: "10 月 6 日", desc: "第一次参加 CTF 竞赛：ZJUCTF 2023" },
                    { date: "10 月 28 日", desc: "参加 Hackergame 2023 CTF 竞赛" },
                    { date: "12 月 31 日", desc: "和朋友参加学校的跨年活动，最快乐的时光" },
                ]
            },
            {
                year: 2024,
                meta: [
                    { date: "1 月 1 日", desc: "故事还在书写" },
                    { date: "1 月 31 日", desc: "为图灵班编写的通识课评价系统投入使用！" },
                    { date: "2 月", desc: "成为 TuringCourses 周年活动委员会成员" },
                    { date: "2 月 9 日", desc: "为周年活动编写的排行榜上线" },
                    { date: "2 月", desc: "DIY 了一个树莓派相机" },
                    { date: "4 月 26 日", desc: "一些更正" },
                    { date: "8 月", desc: "负责图灵班学长组网站编写" },
                    { date: "8 月 17 日", desc: "担任图灵班 24 级学长组" },
                    { date: "8 月 20 日", desc: "收获一次完美的生日 party" },
                    { date: "8 月 21 日", desc: "浙江大学 AAA 战队" },
                    { date: "9 月 16 日", desc: "浙江大学竺可桢学院学业指导中心" },
                    { date: "10 月 15 日", desc: "参与浙大上交联合 CTF 校赛命题" },
                    { date: "11 月 30 日", desc: "参与竺院程设辅学授课，第一次走上讲台" },
                ]
            },
            {
                year: 2025,
                meta: [
                    { date: "2 月 1 日", desc: "四年前的梦想：笔记渲染引擎正式完工" },
                    { date: "3 月 3 日", desc: "联系好了科研导师，确定 CV 方向" },
                    { date: "5 月 15 日", desc: "论文 AerialExtreMatch 正文投稿 NeurIPS 2025" },
                ]
            },
        ]),
        ["点击", link(ruby("这里", "/index"), "/"), "可以回到主页。"]
    ]
};
</script>

<template>
    <HomeLayout :data="data" />
</template>

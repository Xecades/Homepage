const index = {
    template: `
<span>
    <div id="title">你好。</div>
    <div id="text">
        <p class="bold">我叫 Xecades，</p>
        <p><ruby><rb>“Xecades”</rb><rt>Used Since 2019</rt></ruby> 是我广泛使用的网名，通过键入它，你可以在互联网上找到所有我的<router-link to="/about"><ruby><rb>踪迹</rb><rt>/about</rt></ruby></router-link>。</p>
        <p>我现在是一名高二学生，在<a href="http://www.cdqz.net/" target="_blank" rel="noopener noreferrer">某不知名高中</a>学习<ruby><rb>信息学竞赛</rb><rt>AFO Since 2020</rt></ruby>和文化课。如果你恰好也是这个学校的学生，欢迎来高 2019 级 12 班找我。</p>
        <p>我会在<a href="https://blog.xecades.xyz/"><ruby><rb>博客</rb><rt>/blog</rt></ruby></a>上记录我感兴趣的内容。有时，我会开发一些好玩的<router-link to="/lab"><ruby><rb>项目</rb><rt>/lab</rt></ruby></router-link>。我喜欢邂逅<router-link to="/friend"><ruby><rb>有趣的灵魂</rb><rt>/friend</rt></ruby></router-link>，他们给了我很多新的思考，伴随着我的<router-link to="/timeline"><ruby><rb>成长</rb><rt>/timeline</rt></ruby></router-link>。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const about = {
    template: `
<span>
    <div id="title">关于我，</div>
    <div id="text" class="about">
        <p class="bold">那个自称为 Xecades 的人。</p>
        <p>他出生于 00 后的第一个<ruby><rb>鸡年</rb><rt>2005</rt></ruby>，现居住在南方一个小县城。</p>
        <p>他最不喜欢的是娱乐圈的歪风邪气，所以尽量不要和他聊这些东西。但这并不表明他是一个极为严肃的人，他只是不喜欢人云亦云、哗众取宠。</p>
        <p>他的初中是绵阳的一所普通<a href="http://mydcis.net/" target="_blank" rel="noopener noreferrer">中学</a>，高中是成都的一所普通<a href="http://www.cdqz.net/" target="_blank" rel="noopener noreferrer">高中</a>。从初中二年级到高中一年级，他是一名<ruby><rb>信竞选手</rb><rt>OIer</rt></ruby>，只不过那些知识他已经忘得差不多了。</p>
        <p>兴趣让他沉浸于有趣的知识不能自拔，他渴望知道更多、学习更多。他乐于创造，勤于思考，希望有一颗能发现美的眼睛。</p>
        <p>或许你会好奇 Xecades 这个名字的由来：一个十年是 Decade，十个十年就是 Ten Decades，而 Ten 对应的罗马数字是 X，写在一起，就是 XDecades，去掉 D，就成了 Xecades。所以说，Xecades 是百年的意思。</p>
        <p>他的 QQ 是 2135174618；Telegram 账号是 <a href="https://t.me/Xecades" target="_blank" rel="noopener noreferrer">@Xecades</a>；Github 账号是 <a href="https://github.com/Xecades" target="_blank" rel="noopener noreferrer">@Xecades</a>；邮箱是 i#xecades.xyz。如果感兴趣，你可以通过这些渠道找到他。</p>
        <p>回主页的传送门在<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const lab = {
    template: `
<span>
    <div id="title">实验室</div>
    <div id="text" class="list">
        <p class="bold">有一些好玩的东西。</p>
        <span class="list">
            <p v-for="item in lab"><a :href="item.url" target="_blank">{{ item.name }}</a>{{ item.desc }}</p>
        </span>

        <p>对了，你可以点<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>回到主页。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const friend = {
    template: `
<span>
    <div id="title">友人帐</div>
    <div id="text" class="list">
        <p class="bold">有故事的人们。</p>
        <span class="list">
            <p v-for="item in friend"><a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.nick }}</a>{{ item.desc }}</p>
        </span>
        <p>除此之外，你可以点<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>回到主页。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const timeline = {
    template: `
<span>
    <div id="title">时光</div>
    <div id="text" class="list">
        <p class="bold">Epic of my own.</p>
        <span class="timeline">
            <span class="year" v-for="item in timeline">
                <div class="date">{{ item.year }}</div>
                <p v-for="data in item.meta"><span>{{ data.date }}</span>{{ data.desc }}</p>
            </span>
        </span>
        <p>点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>可以回到主页。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const error = {
    template: `
<span>
    <div id="title">404 Not Found</div>
    <div id="text">
        <p class="bold">抱歉，</p>
        <p>请检查你访问的网址是否正确，</p>
        <p>或者点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>返回主页。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const mobile = {
    template: `
<span>
    <div id="title">Mobile Warning</div>
    <div id="text">
        <p class="bold">抱歉，</p>
        <p>你访问的网页不支持移动端，</p>
        <p>请点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>返回主页。</p>
    </div>
</span>`,
    mounted() { CURSOR.refresh(); },
    props: [ "lab", "friend", "timeline" ]
};

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/",            component: index     },
        { path: "/lab",         component: lab       },
        { path: "/friend",      component: friend    },
        { path: "/about",       component: about     },
        { path: "/mobile",      component: mobile    },
        { path: "/timeline",    component: timeline  },
        { path: "*",            component: error     }
    ],
    scrollBehavior() {
        return {
            x: 0, y: 0,
            behavior: 'smooth',
        }
    }
});

const app = new Vue({
    el: "#app",
    data: {
        lab: [
            { name: "Artificial Intelligence",  url: "https://ai.xecades.xyz/",                 desc: "BP 神经网络数字识别可视化" },
            { name: "TIY",                      url: "https://tiy.xecades.xyz/",                desc: "在线运行 HTML 代码" },
            { name: "Postcard API",             url: "https://api.xecades.xyz/",                desc: "个人身份卡片 API + 生成器" },
            { name: "Nazo",                     url: "https://nazo.xecades.xyz/",               desc: "自制网页解密游戏" },
            { name: "hexo-tag-tiy",             url: "https://github.com/Xecades/hexo-tag-tiy", desc: "Hexo 内嵌 TIY" },
            { name: "Fourier Transform",        url: "/lab/Fourier/",                           desc: "傅里叶级数绘图可视化" },
            // { name: "Scroll",                   url: "/lab/Scroll/",                            desc: "Scroll 页面设计" },
            { name: "Cube Simulator",           url: "/lab/Cube/",                              desc: "魔方模拟器" },
            { name: "Gravitation Simulator",    url: "/lab/Gravitation/",                       desc: "二维星体运动模拟器" },
            // { name: "CA",                       url: "/lab/CA/",                                desc: "元胞自动机生命游戏模拟器" }
        ],
        friend: [
            { nick: "vHenry",                   url: "https://zhr.wiki/",                       desc: "酷" },
            { nick: "Comit",                    url: "https://comit.space/",                    desc: "der—" },
            { nick: "Noisky",                   url: "https://noisky.cn/",                      desc: "The Magic World" },
            { nick: "Hash",                     url: "https://one.wh0th.ink/",                  desc: "The one who think" },
            { nick: "Mivik",                    url: "https://mivik.gitee.io/",                 desc: "兴趣使然のProgrammer" },
            { nick: "DeNeRATe",                 url: "https://denerate.ink/",                   desc: "Life is hard to cut off, Lifelong lovesickness" },
            { nick: "ArchyMoe",                 url: "https://nekox.cn/",                       desc: "" }
        ],
        timeline: [
            {
                year: 2016,
                meta: [
                    { date: "上半年",               desc: "接触 C" },
                    { date: "9 月 19 日 13:53",     desc: "注册第一个OJ openjudge" },
                    { date: "9 月 29 日",           desc: "提交第一个程序 超级玛丽 (WA)" },
                    { date: "9 月 29 日",           desc: "第一次 AC 题目" },
                    { date: "10 月 8 日",           desc: "AC 超级玛丽" },
                    { date: "10 月 8 日",           desc: "完成 openjudge 的 1.1 全部题目" },
                    { date: "下半年",               desc: "接触 C++" }
                ]
            },
            {
                year: 2017,
                meta: [
                    { date: "上半年",               desc: "暂时中断 OI 学习" },
                    { date: "上半年",               desc: "完全转入 C++" },
                    { date: "10 月 14 日 14:30",    desc: "NOIP2017 普及组初赛" },
                    { date: "10 月 18 日 13:54",    desc: "注册洛谷账号" },
                    { date: "11 月",                desc: "惊喜地得知进入复赛" },
                    { date: "11 月 11 日",          desc: "NOIP 普及复赛，115 分，二等" }
                ]
            },
            {
                year: 2018,
                meta: [
                    { date: "上半年",               desc: "学 MFC" },
                    { date: "上半年",               desc: "认识的 OI 重要性" },
                    { date: "上半年",               desc: "大幅度地学习信竞" },
                    { date: "8 月",                 desc: "选择考普及组" },
                    { date: "10 月 13 日 14:30",    desc: "NOIP2018 普及组初赛" },
                    { date: "11 月 10 日",          desc: "NOIP 普及复赛，180 分，二等" },
                    { date: "12 月",                desc: "OI 终于被父母认可" }
                ]
            },
            {
                year: 2019,
                meta: [
                    { date: "3 月 11 日",           desc: "签约东辰" },
                    { date: "3 月 14 日",           desc: "签约绵中" },
                    { date: "6 月 16 日",           desc: "成都七中自主招生考试" },
                    { date: "6 月 18 日左右",       desc: "成都七中录取通知" },
                    { date: "7 月",                 desc: "跟着叶老学信息学" },
                    { date: "8 月",                 desc: "博客大幅度更新" },
                    { date: "8 月 31 日",           desc: "成都七中开学" },
                    { date: "11 月 16 日",          desc: "CSP-S 2019 复赛，二等" }
                ]
            },
            {
                year: 2020,
                meta: [
                    { date: "寒假",                 desc: "学习 npm、nodejs、html、css、js、vue" },
                    { date: "寒假",                 desc: "大幅度更新 / 重构博客" },
                    { date: "补充",                 desc: "自学人工智能，完成其可视化程序的编写" },
                    { date: "补充",                 desc: "完成 TIY 网页编辑器，里程碑式的进展" },
                    { date: "10 月",                desc: "学会傅里叶级数变换，完成傅里叶级数模拟程序" },
                    { date: "11 月",                desc: "或许数学更有意思？" },
                    { date: "12 月",                desc: "开始自学群论" },
                    { date: "12 月",                desc: "学习 Latex 的 tikz 库，终于可以清爽地绘图了！" }
                ]
            },
            {
                year: 2021,
                meta: [
                    { date: "1 月",                 desc: "大幅重构博客，「大道至简」" },
                    { date: "2 月 1 日",            desc: "DFT，IDFT 和 FFT！" },
                    { date: "2 月",                 desc: "博客全部迁移至 vercel，采用 CI 部署" },
                    { date: "3 月",                 desc: "自己写的第一个 api 破一万调用" },
                    { date: "3 月 17 日",           desc: "学习偏导、隐式方程绘制" },
                    { date: "3 月",                 desc: "在阿里云白嫖了一个月的 ecs" },
                    { date: "4 月",                 desc: "重新开始玩几年前买的树莓派" }
                ]
            }
        ]
    },
    router
});

function toggleBorder() {
    !window.TOG && document.body.appendChild((window.TOG = document.createElement("style")));
    (window.CHK = !window.CHK)
        ? (TOG.innerHTML = `*{box-shadow: 0 0 0 1px cyan}`)
        : (TOG.innerHTML = "");
}

window.onload = () => {
    console.clear();
    console.log(`
    ┌─Xecades Homepage───────────────────────────────────────┐
    │                                                        │
    │              Yet another concise homepage              │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ Github            https://github.com/Xecades/Homepage/ │
    │ Website                           https://xecades.xyz/ │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ Use toggleBorder() to display DOM border               │
    │ Use CURSOR.refresh() to reload cursor                  │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ MIT LICENSE                                            │
    │ Copyright © 2019 - 2021 Xecades                        │
    │                                                        │
    └────────────────────────────────────────────────────────┘
    `);
}

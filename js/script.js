var index = {
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
    mounted() {
        CURSOR.refresh();
    },
};

var lab = {
    template: `
<span>
    <div id="title">实验室</div>
    <div id="text" class="list">
        <p class="bold">有一些好玩的东西。</p>
        <span class="list">
            <p><a href="https://ai.xecades.xyz/" target="_blank">Artificial Intelligence</a>BP 神经网络数字识别可视化</p>
            <p><a href="https://tiy.xecades.xyz/" target="_blank">TIY</a>在线运行 HTML 代码</p>
            <p><a href="https://api.xecades.xyz/" target="_blank">Postcard API</a>个人身份卡片 API + 生成器</p>
            <p><a href="https://nazo.xecades.xyz/" target="_blank">Nazo</a>自制网页解密游戏</p>
            <p><a href="https://github.com/Xecades/hexo-tag-tiy" target="_blank">hexo-tag-tiy</a>Hexo 内嵌 TIY</p>
            <p><a href="/lab/Fourier/" target="_blank">Fourier Transform</a>傅里叶级数绘图可视化</p>
            <p><a href="/lab/Scroll/" target="_blank">Scroll</a>Scroll 页面设计</p>
            <p><a href="/lab/Cube/" target="_blank">Cube Simulator</a>魔方模拟器</p>
            <p><a href="/lab/Gravitation/" target="_blank">Gravitation Simulator</a>二维星体运动模拟器</p>
            <p><a href="/lab/CA/" target="_blank">CA</a>元胞自动机生命游戏模拟器</p>
        </span>

        <p>对了，你可以点<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>回到主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

var friend = {
    template: `
<span>
    <div id="title">友人帐</div>
    <div id="text" class="list">
        <p class="bold">有故事的人们。</p>
        <span class="list">
            <p><a href="https://zhr.wiki/" target="_blank" rel="noopener noreferrer">vHenry</a>酷</p>
            <p><a href="https://comit.space/" target="_blank" rel="noopener noreferrer">Comit</a>der—</p>
            <p><a href="https://noisky.cn/" target="_blank" rel="noopener noreferrer">Noisky</a>The Magic World</p>
            <p><a href="https://one.wh0th.ink/" target="_blank" rel="noopener noreferrer">Hash</a>The one who think</p>
            <p><a href="https://mivik.gitee.io/" target="_blank" rel="noopener noreferrer">Mivik</a>兴趣使然のProgrammer</p>
            <p><a href="https://denerate.ink/" target="_blank" rel="noopener noreferrer">DeNeRATe</a>Life is hard to cut off, Lifelong lovesickness</p>
            <p><a href="https://nekox.cn/" target="_blank" rel="noopener noreferrer">ArchyMoe</a></p>
        </span>
        <p>除此之外，你可以点<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>回到主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

var about = {
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
    mounted() {
        CURSOR.refresh();
    },
};

var memory = {
    template: `
<span>
    <div id="title">回忆</div>
    <div id="text" class="list">
        <p class="bold">那时……</p>
        <span class="list">
            <p><a href='javascript:alert("石沉大海")'>版本 #1</a></p>
            <p><a href='https://v1.backup.xecades.xyz/' target="_blank" rel="noopener noreferrer">版本 #2</a></p>
            <p><a href='https://v2.backup.xecades.xyz/' target="_blank" rel="noopener noreferrer">版本 #3</a></p>
            <p><a href='https://v3.backup.xecades.xyz/' target="_blank" rel="noopener noreferrer">版本 #4</a></p>
            <p><a href='https://v5.backup.xecades.xyz/' target="_blank" rel="noopener noreferrer">版本 #5</a></p>
            <p><a href='javascript:alert("Under construction")'>版本 #6</a></p>
            <p><a href='javascript:alert("Under construction")'>版本 #7</a></p>
            <p><a href='/' target="_blank">版本 #8</a></p>
        </span>
        <p>点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>可以回到主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

var timeline = {
    template: `
<span>
    <div id="title">时光</div>
    <div id="text" class="list">
        <p class="bold">Epic of my own.</p>
        <span class="timeline">
            <span class="year">
                <div class="date">2016</div>
                <p><span>上半年</span>接触 C</p>
                <p><span>9 月 19 日 13:53</span>注册第一个OJ openjudge</p>
                <p><span>9 月 29 日</span>提交第一个程序 超级玛丽 (WA)</p>
                <p><span>9 月 29 日</span>第一次 AC 题目</p>
                <p><span>10 月 8 日</span>AC 超级玛丽</p>
                <p><span>10 月 8 日</span>完成 openjudge 的 1.1 全部题目</p>
                <p><span>下半年</span>接触 C++</p>
            </span>
            <span class="year">
                <div class="date">2017</div>
                <p><span>上半年</span>暂时中断 OI 学习</p>
                <p><span>上半年</span>完全转入 C++</p>
                <p><span>10 月 14 日 14:30</span>NOIP2017 普及组初赛</p>
                <p><span>10 月 18 日 13:54</span>注册洛谷账号</p>
                <p><span>11 月</span>惊喜地得知进入复赛</p>
                <p><span>11 月 11 日</span>NOIP 普及复赛，115 分，二等</p>
            </span>
            <span class="year">
                <div class="date">2018</div>
                <p><span>上半年</span>学 MFC</p>
                <p><span>上半年</span>认识的 OI 重要性</p>
                <p><span>上半年</span>大幅度地学习信竞</p>
                <p><span>8 月</span>选择考普及组</p>
                <p><span>10 月 13 日 14:30</span>NOIP2018 普及组初赛</p>
                <p><span>11 月 10 日</span>NOIP 普及复赛，180 分，二等</p>
                <p><span>12 月</span>OI 终于被父母认可</p>
            </span>
            <span class="year">
                <div class="date">2019</div>
                <p><span>3 月 11 日</span>签约东辰</p>
                <p><span>3 月 14 日</span>签约绵中</p>
                <p><span>6 月 16 日</span>成都七中自主招生考试</p>
                <p><span>6 月 18 日左右</span>成都七中录取通知</p>
                <p><span>7 月</span>跟着叶老学信息学</p>
                <p><span>8 月</span>博客大幅度更新</p>
                <p><span>8 月 31 日</span>成都七中开学</p>
                <p><span>11 月 16 日</span>CSP-S 2019 复赛，二等</p>
            </span>
            <span class="year">
                <div class="date">2020</div>
                <p><span>寒假</span>学习 npm、nodejs、html、css、js、vue</p>
                <p><span>寒假</span>大幅度更新 / 重构博客</p>
                <p><span>补充</span>自学人工智能，完成其可视化程序的编写</p>
                <p><span>补充</span>完成 TIY 网页编辑器，里程碑式的进展</p>
                <p><span>10 月</span>学会傅里叶级数变换，完成傅里叶级数模拟程序</p>
                <p><span>11 月</span>“或许数学更有意思?"</p>
                <p><span>12 月</span>开始自学群论</p>
                <p><span>12 月</span>学习 Latex 的 tikz 库，终于可以清爽地绘图了！</p>
            </span>
            <span class="year">
                <div class="date">2021</div>
                <p><span>1 月</span>大幅重构博客，「大道至简」</p>
                <p><span>2 月 1 日</span>DFT，IDFT 和 FFT！</p>
                <p><span>2 月</span>博客全部迁移至 vercel，采用 CI 部署</p>
                <p><span>3 月</span>自己写的第一个 api 破一万调用</p>
                <p><span>3 月 17 日</span>自学偏微分，研究隐式方程绘制</p>
            </span>
        </span>
        <p>点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>可以回到主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

var error = {
    template: `
<span>
    <div id="title">404 Not Found</div>
    <div id="text">
        <p class="bold">抱歉，</p>
        <p>请检查你访问的网址是否正确，</p>
        <p>或者点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>返回主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

var mobile = {
    template: `
<span>
    <div id="title">Mobile Warning</div>
    <div id="text">
        <p class="bold">抱歉，</p>
        <p>你访问的网页不支持移动端，</p>
        <p>请点击<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>返回主页。</p>
    </div>
</span>`,
    mounted() {
        CURSOR.refresh();
    },
};

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: index,
        },
        {
            path: "/lab",
            component: lab,
        },
        {
            path: "/friend",
            component: friend,
        },
        {
            path: "/about",
            component: about,
        },
        {
            path: "/memory",
            component: memory,
        },
        {
            path: "/mobile",
            component: mobile,
        },
        {
            path: "/timeline",
            component: timeline,
        },
        {
            path: "*",
            component: error,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0, y: 0,
            behavior: 'smooth',
        }
    }

});

const app = new Vue({
    el: "#app",
    router,
});

var TOG;
var CHK = localStorage.getItem("isBoundaryDisplayed") == "true" ? false : true;

function toggleBorder() {
    !TOG && document.body.appendChild((TOG = document.createElement("style")));
    (CHK = !CHK)
        ? (TOG.innerHTML = `*{box-shadow: 0 0 0 1px cyan}`)
        : (TOG.innerHTML = "");
    localStorage.setItem("isBoundaryDisplayed", CHK);
}

(() => {
    toggleBorder();

    console.clear();
    console.log("Copyright ©2019-2021 Xecades");
    console.log("----------------------------");
    console.log("Hey🎉，想看源码？");
    console.log("在这 => https://github.com/Xecades/Homepage/");
    console.log("如果你想使用本站源码，请注明作者为 Xecades，并附上相关链接，谢谢。");
    console.log("");
    console.log("调试时如果要显示 DOM 边界，可以使用函数 toggleBorder()");
})();

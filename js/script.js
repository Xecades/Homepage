var index = {
    template: `
<span>
    <div id="title">你好。</div>
    <div id="text">
        <p class="bold">我叫 Xecades，</p>
        <p><ruby><rb>“Xecades”</rb><rt>Used Since 2019</rt></ruby> 是我广泛使用的网名，通过键入它，你可以在互联网上找到所有我的<router-link to="/about"><ruby><rb>踪迹</rb><rt>/about</rt></ruby></router-link>。</p>
        <p>我现在是一名高二学生，在<a href="http://www.cdqz.net/" target="_blank" rel="noopener noreferrer">某不知名高中</a>学习<ruby><rb>信息学竞赛</rb><rt>AFO Since 2020</rt></ruby>和文化课。如果你恰好也是这个学校的学生，欢迎来高 2019 级 12 班找我。</p>
        <p>我会在<a href="https://blog.xecades.xyz/"><ruby><rb>博客</rb><rt>/blog</rt></ruby></a>上记录我感兴趣的内容。有时，我会开发一些好玩的<router-link to="/lab"><ruby><rb>项目</rb><rt>/lab</rt></ruby></router-link>。我也喜欢邂逅<router-link to="/friend"><ruby><rb>有趣的灵魂</rb><rt>/friend</rt></ruby></router-link>，他们给了我很多新的思考。</p>
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
        <span class="sp">
            <p><a href="https://ai.xecades.xyz/" target="_blank">Artificial Intelligence</a>BP 神经网络数字识别可视化</p>
            <p><a href="https://tiy.xecades.xyz/" target="_blank">TIY</a>在线运行 HTML 代码</p>
            <p><a href="https://nazo.xecades.xyz/" target="_blank">Nazo</a>自制网页解密游戏</p>
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
        <span class="sp">
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
        <p>还有，回主页的传送门在<router-link to="/"><ruby><rb>这里</rb><rt>/index</rt></ruby></router-link>。</p>
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
        <p class="bold">遥想公瑾当年……</p>
        <span class="sp">
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
            path: "*",
            component: error,
        },
    ],
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
    console.log("Hey🎉，想看源码？");
    console.log("在这 => https://github.com/Xecades/Homepage/");
    console.log(
        "如果你想使用本站源码，请注明作者为 Xecades，并附上相关链接，谢谢。"
    );
    console.log("");
    console.log("如果要显示 DOM 边界（调试用），可以使用函数 toggleBorder()");
})();

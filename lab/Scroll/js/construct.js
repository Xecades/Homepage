(async () => {
    await loadCSS("https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css");
    await loadCSS("https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css");
    await loadCSS("css/common.css");
    await loadCSS("css/style.css");

    await loadJS("https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js");
    await loadJS("js/script.js");
})();
async function loader() {
    await loadCSS("css/style.css");
    await loadCSS("css/common.css");

    await loadJS("lib/console.style.min.js");
    await loadJS("js/init.js");
    await loadJS("js/handle.js");
    await loadJS("js/script.js");
}

loader();
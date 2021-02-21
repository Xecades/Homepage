function loadJS(src) {
    return new Promise(resolve => {
        var script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
    });
}

function loadCSS(src) {
    return new Promise(resolve => {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = src;
        link.onload = resolve;
        document.getElementsByTagName("head")[0].appendChild(link);
    });
}
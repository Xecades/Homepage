var imgNum = 36;

function getBGSrc(mark) {
    return `img/${mark}.jpg`;
}

function refreshBG(mark = Math.ceil(Math.random() * imgNum)) {
    return new Promise(resolve => {
        var src = getBGSrc(mark);
        var img = new Image;

        img.src = src;
        img.onload = () => {
            pic.style["background-image"] = `url(${src})`;
            pic.setAttribute("class", "visible");
            cover.setAttribute("class", "visible");
            setTimeout(() => {
                resolve();
            }, 700);
        }
    });
}

function setQuote(mark = Math.floor(Math.random() * sentences.length)) {
    quote.innerHTML = getSentence(mark);
    quote.setAttribute("class", "visible");
}

document.onclick = () => {
    location.reload();
};

refreshBG().then(() => {
    setQuote();
})
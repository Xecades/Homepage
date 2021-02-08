var ctx;
var std;

window.onload = () => {
    std = Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth * Math.sqrt(3) / 2);
    ctx = canvas.getContext("2d");

    canvas.setAttribute("width", `${std * 2 / Math.sqrt(3)}px`);
    canvas.setAttribute("height", `${std}px`);

    ctx.fillStyle = "blue";

    var sx = 0,
        sy = std;
    var x1 = 0,
        y1 = std;
    var x2 = std * 2 / Math.sqrt(3),
        y2 = std;
    var x3 = std / Math.sqrt(3),
        y3 = 0;

    for (var i = 0; i < 100000; i++) {
        setTimeout(() => {
            var rand = (Math.round(Math.random() * 100) % 3) + 1; // 1 ~ 3
            sx = (sx + eval(`x${rand}`)) / 2;
            sy = (sy + eval(`y${rand}`)) / 2;
            dot(sx, sy);
        }, 0);
    }

}

function dot(x, y, size = .5) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}
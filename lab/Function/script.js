var ctx, width, height;

var S = 50;

const eps = 1;

const pi = Math.PI;
const sin = Math.sin;
const cos = Math.cos;
const exp = Math.exp;
const sqrt = Math.sqrt;
const abs = Math.abs;
const isOut = (x, y) => (x < 0 || y < 0);

const F = (x, y) => sin(x + y ** 2) + y ** 2 * exp(x + y) + 5 * cos(x ** 2 + y);
const dFx = (x, y) => cos(x + y ** 2) + y ** 2 * exp(x + y) - 10 * x * sin(x ** 2 + y);
const dFy = (x, y) => 2 * y * cos(x + y ** 2) + (y + 2) * y * exp(x + y) - 5 * sin(x ** 2 + y);
const nablaF = (x, y) => sqrt(dFx(x, y) ** 2 + dFy(x, y) ** 2);
const alpha = (x, y) => abs(F(x, y)) / nablaF(x, y);

function line(x1, y1, x2, y2) {
    if (isOut(x1, y1) && isOut(x2, y2)) return;

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function dot(x, y, size) {
    if (isOut(x, y)) return;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * pi);
    ctx.fill();
}

function init() {
    width = document.body.clientWidth - 1;
    height = document.body.clientHeight - 1;

    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    ctx = canvas.getContext("2d");
    ctx.lineWidth = .5;
}

function clear() {
    canvas.width = width;
}

function draw() {
    clear();
    for (var x = -width / 2; x <= width / 2; x++) {
        for (var y = height / 2; y >= -height / 2; y--) {
            // var al = .5 - alpha(x / S, y / S);
            // if (al < 0) al = 0;
            // if (al > 1) al = 1;
            // if (0 < al && al < 1)
            var al = -F(x / S, y / S);
            if (0 < al && al < 1)
            {
                ctx.fillStyle = `rgba(0, 0, 0, ${al})`;
                dot(x + width / 2, -y + height / 2, 1);
            }
        }
    }
}

(() => {
    init();
    draw();

    document.onwheel = (e) => {
        var d = -e.deltaY / abs(e.deltaY);
        if (d > 0) S *= 1.16;
        else S /= 1.16;
        draw();
    };
})();
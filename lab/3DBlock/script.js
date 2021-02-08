// dimension
const LEFT_UP = 1001;
const RIGHT_UP = 1010;
const LEFT_DOWN = 10001;
const RIGHT_DOWN = 10010;
const X_POS = 100010; // positive
const X_NEG = 100001; // negative
const Y_POS = 1100;
const Y_NEG = 10100;
const CENTER = 100100;

const ref = {
    1001: "LEFT_UP",
    1010: "RIGHT_UP",
    10001: "LEFT_DOWN",
    10010: "RIGHT_DOWN",
    100010: "X_POS",
    100001: "X_NEG",
    1100: "Y_POS",
    10100: "Y_NEG",
    100100: "CENTER"
};

var debug = 0;

var ctx, canvas;
var col, row;
var _lft, _top;

var SX, SY;

class cube {
    constructor(x, y, edge, dist) {
        this.x = x;
        this.y = y;
        this.edge = edge;
        this.dist = dist;
        this._edge = edge * dist / (edge + dist);
        this._x = x - edge * (x - SX) / (edge + dist);
        this._y = y - edge * (y - SY) / (edge + dist);
    }
    get left() {
        return new cube(this.x - this.edge, this.y, this.edge, this.dist);
    }
    get up() {
        return new cube(this.x, this.y - this.edge, this.edge, this.dist);
    }
    get right() {
        return new cube(this.x + this.edge, this.y, this.edge, this.dist);
    }
    get down() {
        return new cube(this.x, this.y + this.edge, this.edge, this.dist);
    }
    get forward() {
        var d = this.dist + this.edge;
        var e = this.edge * d / (d - this.edge);
        var a = (this.x * (e + d) - e * SX) / d;
        var b = (this.y * (e + d) - e * SY) / d;
        return new cube(a, b, e, d);
    }
    get backward() {
        return new cube(this._x, this._y, this._edge, this.dist - this.edge);
    }
}

function handle() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    ctx.lineWidth = "1";
    getSize();
    var xx = SX - 50,
        yy = SY - 50;
    fresh(xx, yy);
    window.onmousemove = function (e) {
        xx = e.clientX - _lft;
        yy = e.clientY - _top;
        this.fresh(xx, yy);
    };
    window.onclick = function () {
        debug++;
        this.debug = debug % 4;
        this.fresh(xx, yy);
    }
}

function fresh(x, y) {
    ctx.clearRect(0, 0, col, row);
    if (debug)
        drawDot(SX, SY);

    var l = new Array();
    for (var i = -120; i <= 120; i += 120) {
        for (var j = -120; j <= 120; j += 120) {
            var qwq = new cube(x + i, y + j, 100, 800);
            l.push(qwq);
            l.push(qwq.backward);
            l.push(qwq.forward);
        }
    }
    l = l.sort((a, b) => {
        if (a.edge != b.edge)
            return a.edge - b.edge;
        return Math.abs(b._x - SX) - Math.abs(a._x - SX);
    });
    l = l.sort((a, b) => {
        if (a.edge != b.edge)
            return a.edge - b.edge;
        return Math.abs(b._y - SY) - Math.abs(a._y - SY);
    });
    for (var i = 0; i < l.length; i++) {
        drawCube(l[i]);
    }
}

function dimension(obj) {
    // arrangement:
    //left, right, vertical, up, down, horizon

    var tot = 0;

    if (obj.x < obj._x && obj.x + obj.edge < obj._x + obj._edge) tot += 1;
    else if (obj.x > obj._x && obj.x + obj.edge > obj._x + obj._edge) tot += 10;
    else tot += 100;

    if (obj.y < obj._y && obj.y + obj.edge < obj._y + obj._edge) tot += 1000;
    else if (obj.y > obj._y && obj.y + obj.edge > obj._y + obj._edge) tot += 10000;
    else tot += 100000;

    return tot;
}

function drawCube(obj) {
    var x = obj.x,
        y = obj.y,
        edge = obj.edge,
        _x = obj._x,
        _y = obj._y,
        _edge = obj._edge;
    var d = dimension(obj);

    // var fill = "none"
    var fill = "white";
    // var fill = "rgba(255,204,204,.5)";
    // var fill = "rgb(255,204,204)";
    if (debug == 2 || debug == 3)
        fill = "none";
    if (debug > 1 || d == RIGHT_UP || d == X_POS || d == RIGHT_DOWN) // left
        quadrangle(_x, _y, x, y, x, y + edge, _x, _y + _edge, false, fill);
    if (debug > 1 || d == LEFT_DOWN || d == Y_NEG || d == RIGHT_DOWN) // up
        quadrangle(_x, _y, _x + _edge, _y, x + edge, y, x, y, false, fill);
    if (debug > 1 || d == LEFT_UP || d == X_NEG || d == LEFT_DOWN) // right
        quadrangle(_x + _edge, _y, x + edge, y, x + edge, y + edge, _x + _edge, _y + _edge, false, fill);
    if (debug > 1 || d == LEFT_UP || d == Y_POS || d == RIGHT_UP) // down
        quadrangle(_x + _edge, _y + _edge, _x, _y + _edge, x, y + edge, x + edge, y + edge, false, fill);
    rectangle(x, y, x + edge, y + edge, false, fill);

    if (debug == 3) {
        line(SX, SY, x, y, true);
        line(SX, SY, x + edge, y, true);
        line(SX, SY, x, y + edge, true);
        line(SX, SY, x + edge, y + edge, true);
    }
    if (debug) {
        ctx.fillStyle = "#888";
        ctx.textBaseline = "top";
        ctx.fillText(ref[d], x + 5, y + 5);
    }
}

function quadrangle(x1, y1, x2, y2, x3, y3, x4, y4, dash, fill) {
    if (dash)
        ctx.setLineDash([10, 10]);
    if (fill != "none") {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.lineTo(x1, y1);
        ctx.fill();
        ctx.fillStyle = "black";
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.setLineDash([]);
}

function rectangle(x1, y1, x2, y2, dash, fill) {
    if (fill != "none") {
        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.rect(x1, y1, x2 - x1, y2 - y1);
        ctx.fill();
        ctx.fillStyle = "black";
    }
    if (dash) {
        ctx.setLineDash([10, 10]);
    }
    ctx.beginPath();
    ctx.rect(x1, y1, x2 - x1, y2 - y1);
    ctx.stroke();
    ctx.setLineDash([]);
}

function line(x1, y1, x2, y2, dash) {
    if (dash)
        ctx.setLineDash([15, 15]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
}

function getSize() {
    col = document.body.clientWidth - 1;
    row = document.body.clientHeight - 1;
    SX = col / 2;
    SY = row / 2;
    _lft = canvas.offsetLeft - col / 2;
    _top = canvas.offsetTop - row / 2;
    canvas.setAttribute("width", col);
    canvas.setAttribute("height", row);
}

window.onload = function () {
    this.handle();
};
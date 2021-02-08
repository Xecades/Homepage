var _debug = false;

var percent = .8;

var ctx, canvas, info;
var col, row;
var _lft, _top;

var SX, SY;
var lastSX = -1;
var lastSY = -1;

function draw() {
    info = document.getElementById("info");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    _lft = canvas.offsetLeft - col / 2;
    _top = canvas.offsetTop - row / 2;

    window.onmousemove = function (e) {
        SX = e.clientX - _lft;
        SY = e.clientY - _top;
        if (SX != lastSX || SY != lastSY)
            fresh();
        lastSX = SX;
        lastSY = SY;
    };
    window.ondeviceorientation = function (e) {
        this.document.getElementById("alpha").innerHTML = e.alpha + ".";
        this.document.getElementById("beta").innerHTML = e.beta + ".";
        this.document.getElementById("gamma").innerHTML = e.gamma + ".";
        SX = -col / 70 * e.gamma + col / 2;
        SY = -row / 70 * e.beta + row / 2;
        if (SX != lastSX || SY != lastSY)
            fresh();
        lastSX = SX;
        lastSY = SY;
    };
    info.onclick = function () {
        if (!_debug) {
            info.style["opacity"] = "1";
            console.log("DEBUG MODE STARTED");
        } else {
            info.style["opacity"] = "0";
            console.log("DEBUG MODE ENDED");
        }
        getSize();
        _debug = ! _debug;
        fresh();
    }
}

function fresh() {
    var grd;

    ctx.clearRect(0, 0, col, row);

    var leftTopX = SX * percent;
    var leftTopY = SY * percent;
    var rightBottomX = col - (col - SX) * percent;
    var rightBottomY = row - (row - SY) * percent;

    grd = ctx.createLinearGradient(0, row / 2, leftTopX, row / 2);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#aaa");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(leftTopX, leftTopY);
    ctx.lineTo(leftTopX, rightBottomY);
    ctx.lineTo(0, row);
    ctx.fill();

    grd = ctx.createLinearGradient(col / 2, 0, col / 2, leftTopY);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#aaa");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(leftTopX, leftTopY);
    ctx.lineTo(rightBottomX, leftTopY);
    ctx.lineTo(col, 0);
    ctx.fill();

    grd = ctx.createLinearGradient(col / 2, row, col / 2, rightBottomY);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#aaa");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(col, row);
    ctx.lineTo(rightBottomX, rightBottomY);
    ctx.lineTo(leftTopX, rightBottomY);
    ctx.lineTo(0, row);
    ctx.fill();

    grd = ctx.createLinearGradient(col, row / 2, rightBottomX, row / 2);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "#aaa");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(col, row);
    ctx.lineTo(rightBottomX, rightBottomY);
    ctx.lineTo(rightBottomX, leftTopY);
    ctx.lineTo(col, 0);
    ctx.fill();

    ctx.fillStyle = "#aaa";
    ctx.fillRect(leftTopX, leftTopY, rightBottomX - leftTopX, rightBottomY - leftTopY);
    ctx.fillStyle = "black";

    solidLine(0, 0, leftTopX, leftTopY, "#eee", "#999");
    solidLine(0, row, leftTopX, rightBottomY, "#eee", "#999");
    solidLine(col, 0, rightBottomX, leftTopY, "#eee", "#999");
    solidLine(col, row, rightBottomX, rightBottomY, "#eee", "#999");

    solidLine(leftTopX, leftTopY, leftTopX, rightBottomY, "#999", "#999");
    solidLine(leftTopX, leftTopY, rightBottomX, leftTopY, "#999", "#999");
    solidLine(rightBottomX, leftTopY, rightBottomX, rightBottomY, "#999", "#999");
    solidLine(leftTopX, rightBottomY, rightBottomX, rightBottomY, "#999", "#999");

    if (_debug) {
        putDot(SX, SY);
        dashedLine(0, SY, col, SY);
        dashedLine(0, 0, SX, SY);
        dashedLine(0, row, SX, SY);
        dashedLine(col, 0, SX, SY);
        dashedLine(col, row, SX, SY);
    }
}

function solidLine(_x1, _y1, _x2, _y2, start, end) {
    var grd = ctx.createLinearGradient(_x1, _y1, _x2, _y2);
    grd.addColorStop(0, start);
    grd.addColorStop(1, end);
    ctx.strokeStyle = grd;
    ctx.beginPath();
    ctx.moveTo(_x1, _y1);
    ctx.lineTo(_x2, _y2);
    ctx.stroke();
}

function dashedLine(_x1, _y1, _x2, _y2) {
    ctx.setLineDash([15, 15]);
    ctx.beginPath();
    ctx.moveTo(_x1, _y1);
    ctx.lineTo(_x2, _y2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function putDot(_x, _y) {
    ctx.beginPath();
    ctx.arc(_x, _y, 2, 0, Math.PI * 2);
    ctx.fill();
}

function getSize() {
    col = document.body.clientWidth - 1;
    row = document.body.clientHeight - 1;
    document.getElementById("canvas").setAttribute("width", col);
    document.getElementById("canvas").setAttribute("height", row);
}

window.onload = function () {
    this.getSize();
    this.draw();
};
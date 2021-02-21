var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

var defaultCenter = new point(width / 2, height / 2);

class Axis {
    constructor(id, index) {
        this.id = id;
        this.index = index;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.setAttribute("id", this.id);
        this.canvas.setAttribute("class", "jsCanvas");
        this.canvas.setAttribute("width", `${width}px`);
        this.canvas.setAttribute("height", `${height}px`);
        this.canvas.setAttribute("style", `z-index: ${this.index}`);
        document.body.appendChild(this.canvas);
    }

    initCenter(p = defaultCenter) {
        this.center = p;
        this.ctx.translate(p.x, p.y);
    }

    initByWidth(per, margin = 100) {
        this.eps = (width / 2 - margin) / per;
    }

    initByHeight(per, margin = 100) {
        this.eps = (height / 2 - margin) / per;
    }

    trans(p) {
        if (p instanceof point || p instanceof complex)
            return new point(p.x * this.eps, -p.y * this.eps);
        return p * this.eps;
    }

    origin(pos) {
        if (pos instanceof point || pos instanceof complex)
            return new point(pos.x / this.eps, -pos.y / this.eps);
        return pos / this.eps;
    }

    circle(p, radius, color, lineWidth = 1) {
        vCircle(this.ctx, this.trans(p), this.trans(radius), color, lineWidth);
    }

    line(p1, p2, color, lineWidth = 1) {
        vLine(this.ctx, this.trans(p1), this.trans(p2), color, lineWidth);
    }

    dot(p, size, color) {
        vDot(this.ctx, this.trans(p), size, color);
    }

    clear() {
        this.canvas.height = this.canvas.height;
        this.initCenter(this.center);
    }
}

function vCircle(ctx, pos, radius, color, lineWidth) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function vLine(ctx, pos1, pos2, color, lineWidth) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.stroke();
}

function vDot(ctx, pos, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
    ctx.fill();
}
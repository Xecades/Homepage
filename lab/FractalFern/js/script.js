var ctx;

window.onload = () => {
    std = Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth);
    ctx = canvas.getContext("2d");

    canvas.setAttribute("width", `${std}px`);
    canvas.setAttribute("height", `${std}px`);

    ctx.fillStyle = "green";

    var x = new Matrix([
        [0.5],
        [0.5]
    ]);

    var p = [0.85, 0.92, 0.99, 1.00];

    var A1 = new Matrix([
        [0.85, 0.04],
        [-0.04, 0.85]
    ]);
    var b1 = new Matrix([
        [0],
        [1.6]
    ]);

    var A2 = new Matrix([
        [0.20, -0.26],
        [0.23, 0.22]
    ]);
    var b2 = new Matrix([
        [0],
        [1.6]
    ]);

    var A3 = new Matrix([
        [-0.15, 0.28],
        [0.26, 0.24]
    ]);
    var b3 = new Matrix([
        [0],
        [0.44]
    ]);

    var A4 = new Matrix([
        [0, 0],
        [0, 0.16]
    ]);

    for (var i = 0; i < 100000; i++) {
        setTimeout(() => {
            dot(std / 2 + x.data[0][0] * std / 10, std + 10 - x.data[1][0] * std / 10);
            var rand = Math.random();

            if (rand < p[0]) x = A1.dot(x).plus(b1);
            else if (rand < p[1]) x = A2.dot(x).plus(b2);
            else if (rand < p[2]) x = A3.dot(x).plus(b3);
            else x = A4.dot(x);
        }, 0);
    }
}

function dot(x, y, size = .5) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}
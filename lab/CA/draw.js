var ctx;

function handleDraw() {
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	var down = false;
	var lft = canvas.offsetLeft,
		top = canvas.offsetTop;

	ctx.fillStyle = color;

	canvas.onmousedown = function (e) {
		down = true
		var op = (event.button == 0);
		var x = Math.ceil((e.clientX - lft) / size),
			y = Math.ceil((e.clientY - top) / size);
		handleItem(x, y, op);
		var lastX = x,
			lastY = y;
		canvas.onmousemove = function (e) {
			if (down) {
				var x = Math.ceil((e.clientX - lft) / size);
				var y = Math.ceil((e.clientY - top) / size);
				handleLine(lastX, lastY, x, y, op);
				handleItem(x, y, op);
				lastX = x;
				lastY = y;
			}
		}
	};

	document.oncontextmenu = () => false;

	canvas.onmouseup = function () {
		down = false;
	};
}

function handleItem(x, y, op = true, strict = false) {
	if (isNaN(x) || isNaN(y)) return;
	if (!strict && map[x][y] == op) return;
	if (strict && map[x][y] == false) return;

	if (op) ctx.fillRect(x * size - size, y * size - size, size, size);
	else ctx.clearRect(x * size - size, y * size - size, size, size);
	if (debug)
		console.log("x: " + x + ", y: " + y + ", " + (map[x][y] ? "true" : "false") + " --> " + (op ? "true" : "false"));
	map[x][y] = op;
}

function handleLine(x, y, nx, ny, op = true) {
	var dx = nx - x;
	var dy = ny - y;
	for (var i = 0; i <= dx; i++)
		handleItem(i + x, Math.ceil(dy / dx * i + y), op);
	for (var i = 0; i >= dx; i--)
		handleItem(i + x, Math.ceil(dy / dx * i + y), op);

	for (var j = 0; j <= dy; j++)
		handleItem(Math.ceil(dx / dy * j + x), j + y, op);
	for (var j = 0; j >= dy; j--)
		handleItem(Math.ceil(dx / dy * j + x), j + y, op);

	if (debug && op) {
		ctx.beginPath();
		ctx.strokeStyle = debugColor;
		ctx.moveTo(x * size, y * size);
		ctx.lineTo(nx * size, ny * size)
		ctx.stroke();
	}
}

function reDraw() {
	if (debug)
		console.log("Redraw items");
	ctx.fillStyle = color;
	for (var i = 1; i <= col; i++)
		for (var j = 1; j <= row; j++)
			handleItem(i, j, map[i][j], true);
}
var chg = new Array();
var interval;

function handleGen() {
    clearChg();

    var gen = false;
    handlePlay(gen);
    window.onkeydown = function () {
        if (event.keyCode == 70) {
            gen = !gen
            handlePlay(gen);
            if (debug)
                console.log(gen);
        }
    }
}

function handlePlay(stat) {
    if (stat)
        interval = setInterval(function () {
            for (var x = 1; x <= col; x++) {
                for (var y = 1; y <= row; y++) {
                    var cnt = countAround(x, y);
                    if (map[x][y]) chg[x][y] = (cnt < 2 || cnt > 3);
                    else chg[x][y] = (cnt == 3);
                }
            }
            applyChg();
        }, spacing);
    else
        clearInterval(interval);
}

function applyChg() {
    for (var x = 1; x <= col; x++) {
        for (var y = 1; y <= row; y++) {
            if (chg[x][y]) {
                handleItem(x, y, !map[x][y]);
            }
        }
    }
    clearChg();
}

function clearChg() {
    for (var i = 0; i <= col + 1; i++) {
        chg[i] = new Array();
        for (var j = 0; j <= row + 1; j++)
            chg[i][j] = false;
    }
}

function countAround(x, y) {
    return map[x][y - 1] +
        map[x][y + 1] +
        map[x + 1][y + 1] +
        map[x + 1][y] +
        map[x + 1][y - 1] +
        map[x - 1][y + 1] +
        map[x - 1][y] +
        map[x - 1][y - 1];
}
/*
 * You may think you know what the following code does.
 * But you dont. Trust me.
 * Fiddle with it, and youll spend many a sleepless
 * night cursing the moment you thought youd be clever
 * enough to "optimize" the code below.
 * Now close this file and go play with something else.
 */

var debug = false;
var size = 5;
var spacing = 10;
var color = 'gray';
var debugColor = 'cyan';

var col, row;
var g_col, g_row;
var more, close, plate;
var _debug, _debugColor, _color, _size, _spacing;
var map = new Array();

window.onload = function () {
    more = document.getElementById("more");
    close = document.getElementsByClassName("close")[0];
    plate = document.getElementById("plate");

    _debug = document.getElementById("debug");
    _debugColor = document.getElementById("debugColor");
    _color = document.getElementById("color");
    _size = document.getElementById("size");
    _spacing = document.getElementById("spacing");

    more.onclick = function () {
        plate.setAttribute("class", "plate appear");
    };

    close.onclick = function () {
        plate.setAttribute("style", "z-index: 123456");
        plate.setAttribute("class", "plate");
        setTimeout(function () {
            plate.setAttribute("style", "");
        }, 400);
    };
    getSize();
    handleMap();
    handleDraw();
    handleGen();
}

function getSize() {
    g_col = document.body.clientWidth - 1;
    g_row = document.body.clientHeight - 1;
    col = Math.floor(g_col / size);
    row = Math.floor(g_row / size);
    document.getElementById("canvas").setAttribute("width", g_col);
    document.getElementById("canvas").setAttribute("height", g_row);
}

function handleMap() {
    for (var i = 0; i <= col + 1; i++) {
        map[i] = new Array();
        for (var j = 0; j <= row + 1; j++)
            map[i][j] = false;
    }
}

function attributeChg(name) {
    switch (name) {
        case "debug":
            debug = _debug.checked;
            break;
        case "debugColor":
            debugColor = _debugColor.value;
            reDraw();
            break;
        case "color":
            color = _color.value;
            reDraw();
            break;
        case "size":
            size = _size.value;
            getSize();
            handleMap();
            ctx.fillStyle = color;
            break;
        case "spacing":
            spacing = _spacing.value;
            break;
    }
}
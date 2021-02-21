const COLOR = [
    [],
    ["#FFD400", "#F1926A", "#32CBFF", "#F16A83", "#FFFBFC", "#61E786"],
    ["#FFD500", "#FF5800", "#0051BA", "#C41E3A", "#FFFFFF", "#009E60"],
    ["yellow", "orange", "blue", "red", "white", "green"]
];
const DIRECT = {
    "F": 3,
    "L": 2,
    "R": 4,
    "U": 1,
    "D": 5,
    "B": 6,
    "f": -3,
    "l": -2,
    "r": -4,
    "u": -1,
    "d": -5,
    "b": -6
};
const CMDS = "FLRUDBflrudb";

var DisplayNumber = false;
var colorMark = 1;
var stat = [];

function initStatus() {
    var mark = 0;
    for (let asp = 0; asp < 6; asp++) {
        var tmp = [];
        for (let sq = 0; sq < 3; sq++) {
            tmp.push([++mark, ++mark, ++mark]);
        }
        stat.push(tmp);
    }
}

console.error = () => {};
console.warn = () => {};
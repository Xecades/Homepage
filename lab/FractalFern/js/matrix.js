class Matrix {
    constructor(data) {
        this.data = data;
        this.row = data.length;
        this.col = data[0].length;
    }

    get str() {
        var ret = "[";
        for (var i = 0; i < this.row; i++) {
            ret += (i == 0) ? '[' : ' [';
            for (var j = 0; j < this.col; j++)
                ret += ((j == 0) ? '' : ', ') + this.data[i][j];
            ret += (i == this.row - 1) ? ']' : ']\n';
        }
        return ret + ']';
    }

    get T() {
        var ret = MatZeros(this.col, this.row);
        for (var i = 0; i < this.row; i++)
            for (var j = 0; j < this.col; j++)
                ret.data[j][i] = this.data[i][j];
        return ret;
    }

    reshape(row, col) {
        if (row * col != this.row * this.col)
            console.warn("some numbers will be ignored or be zero!!!");

        var ret = MatZeros(row, col);
        var cnt = 0;
        for (var i = 0; i < this.row; i++)
            for (var j = 0; j < this.col; j++) {
                ret.data[Math.floor(cnt / col)][cnt % col] = this.data[i][j];
                if (++cnt == row * col)
                    return ret;
            }
        return ret;
    }

    dot(uMatrix) {
        return MatDot(this, uMatrix);
    }

    multiMat(uMatrix) {
        return MatMulti(this, uMatrix);
    }

    multiNum(num) {
        return this.apply((x) => (x * num));
    }

    plus(uMatrix) {
        return MatPlus(this, uMatrix);
    }

    minus(uMatrix) {
        return MatPlus(this, uMatrix.apply((x) => -x));
    }

    apply(translator) {
        var ret = MatZeros(this.row, this.col);
        for (var i = 0; i < this.row; i++)
            for (var j = 0; j < this.col; j++)
                ret.data[i][j] = translator(this.data[i][j]);
        return ret;
    }
}

function MatDot(a, b) {
    if (a.col != b.row) {
        console.error("a.col != b.row!");
        return null;
    }
    var ret = MatZeros(a.row, b.col);
    for (var i = 0; i < a.row; i++)
        for (var j = 0; j < b.col; j++)
            for (var k = 0; k < a.col; k++)
                ret.data[i][j] += a.data[i][k] * b.data[k][j];
    return ret;
}

function MatPlus(a, b) {
    if (a.col != b.col || a.row != b.row) {
        console.error("a.col != b.col || a.row != b.row!");
        return null;
    }
    for (var i = 0; i < a.row; i++)
        for (var j = 0; j < a.col; j++)
            a.data[i][j] += b.data[i][j];
    return a;
}

function MatMulti(a, b) {
    if (a.col != b.col || a.row != b.row) {
        console.error("a.col != b.col || a.row != b.row!");
        return null;
    }
    for (var i = 0; i < a.row; i++)
        for (var j = 0; j < a.col; j++)
            a.data[i][j] *= b.data[i][j];
    return a;
}

function MatZeros(row, col) {
    var ret = new Array();
    for (var i = 0; i < row; i++) {
        ret[i] = new Array();
        for (var j = 0; j < col; j++)
            ret[i][j] = 0;
    }
    return new Matrix(ret);
}

function MatRand(row, col, float) {
    var ret = new Array();
    for (var i = 0; i < row; i++) {
        ret[i] = new Array();
        for (var j = 0; j < col; j++)
            ret[i][j] = (Math.random() - 0.5) * 2 * float;
    }
    return new Matrix(ret);
}
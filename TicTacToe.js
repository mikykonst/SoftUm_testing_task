"use strict";

var arr = ["XXO", "OO.", ".OX"];

function XoReferee(data) {
    var arr = [];
    let res = "D";

    for (let row of data) {
        arr.push(row.split(""));
    }

    function isWin(player) {
        for (let i in data) {
            let vertSum = 0;
            let horSum = 0;
            let crossLeftSum = 0;
            let crossRightSum = 0;

            for (let j in data) {
                if (arr[i][j] == player) vertSum++;
                if (arr[j][i] == player) horSum++;
                if (arr[j][j] == player) crossLeftSum++;
                if (arr[j][(arr.length - 1) - j] === player) crossRightSum++;
            }
            if ((vertSum == arr.length)
                || (horSum == arr.length)
                || (crossRightSum == arr.length)
                || (crossLeftSum == arr.length)) {
                return true;
            }
        }
    }

    if (isWin("X")) res = "X";
    if (isWin("O")) res = "O";

    return res;
}

console.log("Tic Tac Toe:\n" + XoReferee(arr));
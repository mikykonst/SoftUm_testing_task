function adjacentElementsProduct(array) {
    var temp = 0;
    for (var i = 0; i < array.length-1; i++) {
        if ((array[i] * array[i+1]) > temp) {
            temp = array[i] * array[i+1];
        }
    }
    console.log("Max product is: " + temp)
}

function testArrays() {
    var arr = [-1,-2];
    adjacentElementsProduct(arr);
    arr = [5, 1, 2, 3, 1, 4];
    adjacentElementsProduct(arr);
    arr = [1, 2, 3, 0];
    adjacentElementsProduct(arr);
    arr = [9, 5, 10, 2, 24, -1, -48];
    adjacentElementsProduct(arr);
}

console.log("Adjacent elements product:\n");
testArrays();


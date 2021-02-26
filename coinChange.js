let arr = [];

function baseArr(arrSize, sum) {
    for (let i = 0; i <= arrSize; i++) {
        let row = new Array(sum);
        arr.push(row)
        for (let j = 0; j <= sum; j++) {
            if (i === 0)
                arr[i][j] = 0
            if (j === 0)
                arr[i][j] = 1
        }
    }
}

function coinChange(coinArr, total) {
    baseArr(coinArr.length, total)
    let count = 0
    for (i = 1; i <= coinArr.length; i++) {
        for (let j = 1; j <= total; j++) {
            if (coinArr[i - 1] <= j)
                arr[i][j] = arr[i][j - coinArr[i - 1]] + arr[i - 1][j]

            else
                arr[i][j] = arr[i - 1][j]


        }
    }
    return arr[coinArr.length][total]
}

const res = coinChange([1, 5, 7,10,20,50,100,200], 1000)

console.log(res)
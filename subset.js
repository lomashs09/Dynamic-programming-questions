let arr = []


for (let i = 0; i < 10; i++) {
    let row = new Array(100);
    arr.push(row)
    for (let j = 0; j < 100; j++) {
        if (i === 0)
            arr[i][j] = false
        if (j === 0) {
            arr[i][j] = true
        }

    }
}
function subset(numArr, sum, n) {
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= sum; j++) {
            if (numArr[i - 1] <= sum) {
                arr[i][j] = arr[i - 1][j - numArr[i - 1]] || arr[i - 1][j]
            }
            else {
                arr[i][j] = arr[i - 1][j]
            }
        }
    }
    return arr[n][sum]
}
let res = subset([3, 4, 5, 4, 3, 3, 5, 7, 8], 9, 9)


console.log(res)


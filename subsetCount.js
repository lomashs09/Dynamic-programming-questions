const arr = []

for (let i = 0; i < 10; i++) {
    let row = new Array(100);
    arr.push(row)
    for (let j = 0; j < 100; j++) {
        if (i === 0)
            arr[i][j] = 0
        if (j === 0) {
            arr[i][j] = 1
        }

    }
}

function subsetCount(sumArr, sum) {
    for (let i = 1; i <= sumArr.length; i++) {
        for (let j = 1; j<= sum; j++){
            if(sumArr[i-1] <= j){
                arr[i][j] = arr[i-1][j-sumArr[i-1]] + arr[i-1][j]
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
    return arr[sumArr.length][sum]
}

let res = subsetCount([1,2,7,6], 9)
console.log(res)


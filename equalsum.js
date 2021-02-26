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

function subset(numArr, sum) {
    for(i = 1; i <= numArr.length; i++ ){
        for (let j = 1; j<= sum; j++){
            if(numArr[i-1] <= sum){
                arr[i][j] = arr[i-1][j-numArr[i-1]] || arr[i-1][j]
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
    return arr[numArr.length][sum]
}

function equalSum(numArr, sum, n) {
    total = numArr.reduce((acc, value) => acc + value, 0)
    if (total % 2 != 0) return false
    else {
        return subset(numArr, total/2)
    }
}

let arr1 = [1, 5, 11, 5, 6, 3,3,1,1]
let res = equalSum(arr1, 11, arr1.length)
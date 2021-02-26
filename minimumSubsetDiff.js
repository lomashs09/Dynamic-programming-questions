//Find the minimum subset difference
let arr = [];

function baseArr(arrSize, sum){
for (let i = 0; i <= arrSize; i++) {
    let row = new Array(sum);
    arr.push(row)
    for (let j = 0; j <= sum; j++) {
        if (i === 0)
            arr[i][j] = false
        if (j === 0) {
            arr[i][j] = true
        }
    }
}
}

function minSum(sumArr){
    minSums = []
    const sum = sumArr.reduce((acc,val) => acc+val, 0)

    baseArr(sumArr.length, sum)

    for(i = 1; i<= sumArr.length; i++){
        for(j = 1; j<= sum; j++){
            if(sumArr[i-1] <= j){
                arr[i][j] = arr[i-1][j-sumArr[i-1]] || arr[i-1][j]
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
    let lastRow = arr[sumArr.length];
    for( i = 1; i< lastRow.length/2; i++){
        if(lastRow[i]){
            minSums.push(sum-2*i)
        }
    }
    console.log(minSums)
    return Math.min(...minSums)

}

const minimumSum = minSum([1,5,4])
console.log(minimumSum)





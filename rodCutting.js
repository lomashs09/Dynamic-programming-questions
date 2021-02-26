let arr = [];

function baseArr(arrSize, sum) {
    for (let i = 0; i <= arrSize; i++) {
        let row = new Array(sum);
        arr.push(row)
        for (let j = 0; j <= sum; j++) {
            if (i === 0 || j===0)
                arr[i][j] = 0
            else
                arr[i][j] = -1
        }
    }
}

function rodCutting(numArr, val, maxSize){
    baseArr(numArr.length, maxSize)
    for(i = 1; i<= numArr.length; i++){
        for(j =1; j<= maxSize; j++){
            if(numArr[i-1] <= j){
                arr[i][j] = Math.max((val[i-1] + arr[i][j-numArr[i-1]]), arr[i-1][j])
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
}

rodCutting([3,2,3,4], [1,3,3,4], 4)

console.log(arr)
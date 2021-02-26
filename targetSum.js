// find the target sum by adding + - sign in the given array

let arr = []

function fillArr(len, wide){
    for(let i = 0; i<= len; i++){
        let row = new Array(wide)
        arr.push(row)
        for(let j = 0; j<= wide; j++){
            if(i === 0) arr[i][j] = 0
            if(j === 0) arr[i][j] = 1
            
        }
    }
}

function targetSum(sumArr, targetSum){
    fillArr(sumArr.length, targetSum)
    for(let i = 1; i<= sumArr.length; i++){
        for(let j = 1; j<= targetSum; j++){
            if(sumArr[i-1] <= j){
                arr[i][j] = arr[i-1][j - sumArr[i-1]] + arr[i-1][j]
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
    return arr[sumArr.length][targetSum]
}
const res = targetSum([1,2,1], 2)
console.log(res)


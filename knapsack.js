let arr = []


for(let i = 0; i< 10; i++){
    let row = new Array(10);
    arr.push(row)
    for(let j = 0; j<10; j++){
        if(i === 0 || j===0){
            arr[i][j] = 0
        }
        else{
            arr[i][j] = -1
        }
    }
}


function knapsack(wt, val, w, n){
    for(let i = 1; i< n+1; i++){
        for(let j = 1; j< w+1; j++){
            if(w === 0 || n ===0){
                arr[i][j] = 0
            }
            if(wt[i-1] <= j){
                arr[i][j] = Math.max((val[i-1] + arr[i-1][j-wt[i-1]]), arr[i-1][j])
            }
            else{
                arr[i][j] = arr[i-1][j]
            }
        }
    }
}

knapsack([4,3,3,7,2,4,3,4,5],[10,4,8,7,6,8,3,2,9], 9, 9)

let res = recKnapsack([4,3,3,7,2,4,3,4,5],[10,4,8,7,6,8,3,2,9], 9, 9)
console.log(res)
function recKnapsack(wt,val,w,n){
    if( w === 0 || n===0) return 0;
    if(wt[n-1] <= w){
        return Math.max((val[n-1] + recKnapsack(wt,val,w-wt[n-1],n-1)),recKnapsack(wt,val,w,n-1)) 
    }
    else{
        return recKnapsack(wt,val,w,n-1) 
    }
}
console.log(arr)
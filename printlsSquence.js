let arr = [];

function fillArr(n,m){
for(let i = 0; i<=n ; i++ ){
    let row = new Array(m)
    arr.push(row)
    for(let j = 0; j<= m; j++){
        
        if(i === 0 || j===0){
            arr[i][j] = 0
        }
    }
}
}

function lcs(x,y, n, m){
    fillArr(n,m)
    for(let i = 1; i<= n; i++){
        for(let j = 1; j<= m; j++){
            if(x[i-1] === y[j-1]){
                arr[i][j] = 1+ arr[i-1][j-1]
            }
            else{
                arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1])
            }
        }
    }

    let i = n, j = m;
    let str = '';
    while(i >0 && j> 0){
        if(arr[i-1] === arr[j-1]){
            str = str + y[i-1];
            i = i-1;
            j = j-1
        }
        else{
            if(arr[i-1] > arr[j-1]){
                i = i-1;
            }
            else{
                j = j-1;
            }
        }
    }
    console.log(str);
}
let input1 = 'abcdef';
let input2 = 'acdef'
let res = lcs(input1, input2, input1.length, input2.length)
// console.log(arr)
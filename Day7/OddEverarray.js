arr=[1,2,3,4,2,3,4];
let oddArr=[];
let evenArr=[];
for (let i = 0;i<arr.length;i++){
    if (arr[i]%2===0){
        evenArr.push(arr[i])
    }
    else oddArr.push(arr[i])
};
console.log(`Odd Array :[${oddArr}]`)
console.log(`Even Array :[${evenArr}]`)

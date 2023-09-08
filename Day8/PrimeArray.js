function primeArray(a){
    let primeArr=[]
    for(let i =0 ; i<a.length ;i++){
        if (a[i]%2 !==0)
        primeArr.push(a[i])
    }
    console.log(primeArr)
}
primeArray([12,3,4,5,6,6])

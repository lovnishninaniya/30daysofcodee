function productArray(a,b){
    let prodArr=[]
    for(let i =0 ; i<a.length ;i++){
        prodArr.push(a[i]*b[i])
    }
    console.log(prodArr)
}
productArray([12,3,4,5,6,6],[1,2,4,5,6,7])

function arrequal(arr1,arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i=0; i<arr1.length;i++){
        if (arr1[i] !==arr2[i]){
            return false;
        }
    }
    return true;
}

const A1 = [1, 2, 3, 4, 0];
const  A2 = [1, 2, 3, 4, 0];
if (arrayequal(A,B){
    console.log('both are equal')
}else{
    console.log('not equal')
}

const B1 = [1, 2, 3, 4, 5];
const B2 = [11, 22, 33, 44,];
if (arrayequal(B1,B2)){
    console.log('both are equal')
}else{
    console.log('not equal')
}

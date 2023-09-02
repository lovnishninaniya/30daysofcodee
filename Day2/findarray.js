const arr=[1,2,3,4,5,6];    
function findOut(val){
    for (let i = 0; i < arr.length;i++){
        
        if (arr[i]=== val){
            console.log(`Number ${val} Found at index ${i}`); 

        }
        
    };
}
findOut(4);

const arr=[1,2,3,4,5,6];    
function findOut(val){
    for (let i = 0; i < arr.length;i++){
        
        if (arr[i]=== val){
            console.log(`Number ${val} Found at index ${i}`); 
            break
        }
        else if (arr[i]!== val && i===arr.length - 1 ){
            console.log(`Number ${val} Not Found `);
        }
    };
}4
findOut(4)


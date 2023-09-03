let key = 1;
let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 1, 0];

let occofKeyA = A.filter(item => item === key).length;
console.log(`Key ${key} found ${ occofKeyA} time in  A`);

let  occofKeyB = B.filter(item => item === key).length;
console.log(`Key ${key} found ${ occofKeyB} time in  B`);

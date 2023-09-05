function occurence(arr, key) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === key) {
                    return i;
                }
            }
            return -1;
        }

        const Arr1 = [0, 1, 2, 3, 4, 5];
        const Arr2 = [5, 4, 3, 2, 1, 0];
        const key = 1;

        const indexArr1 = occurence(arr1, key);
        const indexArr2 = occurence(arr2, key);

        console.log(`occurence of ${key} in arr1 at index: ${indexArr1}`);
        console.log(`occurence of ${key} in arr2 at index: ${indexArr2}`);

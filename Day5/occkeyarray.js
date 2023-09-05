function occurence(arr, key) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === key) {
                    return i;
                }
            }
            return -1;
        }

        const arr1 = [0, 1, 2, 3, 4, 5];
        const arr2 = [5, 4, 3, 2, 1, 0];
        const key = 1;

        const indexA = occurence(arr1, key);
        const indexB = occurence(arr2, key);

        console.log(`occurence of ${key} in arr1 at index: ${indexarr1}`);
        console.log(`occurence of ${key} in arr2 at index: ${indexarr2}`);

class Sort {
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    merge(left, right) {
        const result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return [...result, ...left, ...right];
    }

    heapSort(arr) {
        buildHeap(arr);
        for (let i = arr.length - 1; i > 0; i--) {
            swap(arr, 0, i);
            heapify(arr, 0, i);
        }
        return arr;
    }
    buildHeapSort(arr) {
        const n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, i, n);
        }
    }
    insertionSort(arr) {
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            const key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }

    selectionSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                swap(arr, i, minIndex);
            }
        }
        return arr;
    }

    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    bubbleSort(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        return arr;
    }
      
      

      
}
// code.js
// Maxie Machado 
// Parallel Mergesort 

const async = require('async');

async function parallelMergesort(arr, lo, hi, tmp) {
    if (lo <= hi) return;

    const mid = Math.floor((lo + hi) / 2);
    const leftPromise = parallelMergesort(arr, lo, mid, tmp);
    const rightPromise = parallelMergesort(arr, mid + 1, hi, tmp);

    await Promise.all([leftPromise, rightPromise]);

    merge(arr, lo, mid, hi, tmp);
}

async function mergesortRecursive(arr) {
    const tmp = [];
    await parallelMergesort(arr, 0, arr.length - 1, tmp);
}

function mergeRecursive(arr, lo, mid, hi, tmp) {
    let a = lo, b = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if ( a <= mid && (b > hi || arr[a] < arr[b])) {
            tmp[k] = arr[a++];
        }
        else {
            tmp[k] = arr[b++];
        }
    }

    for (let k = lo; k <= hi; k++) {
        arr[k] = tmp[k];
    } 
}

async function parallelIterativeMergesort(arr) {
    let tmp = [];
    let n = arr.length;
    let size = 1;

    while (size < n) {
        let start = 0;
        let end = size;
        
        const promises = [];

        while (end < n) {
            promises.push(
                new Promise((resolve) => {
                    merge(arr, start, start + Math.floor(size / 2) - 1, end, tmp);
                    resolve();              
                })
            );
            start += size * 2;
            end = start + size;
        }

        await Promise.all(promises);
        size *= 2;
    }
}

function mergeIterative(arr, lo, mid, hi, tmp) {
    let a = lo, b = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || arr[a] < arr[b])) {
            tmp[k] = arr[a++];
        }
        else {
            rmp[k] = arr[b++];
        }
    }

    for (let k = lo; k <= hi; k++) {
        arr[k] = tmp[k];
    }
}

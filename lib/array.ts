'use strict';

/**
 * 随机从数组 arr 中提取 num 的长度返回新数组
 * 
 * @param {Array} arr
 * @param {Number} num 新数组的长度
 * @return {Array}
 */
export function randomSlice(arr: any[], num: number): any[] {
    if (!num || num >= arr.length) {
        return arr.slice();
    }
    // 返回 0 ~ arr.length 的随机数
    const index = Math.floor(Math.random() * arr.length);
    let a = [];

    for (var i = 0, j = index; i < num; i++) {
        a.push(arr[j++]);

        if (j === arr.length) {
            j = 0;
        }
    }

    return a;
};

/**
 * 按照 index 从数组中删除一个已存在的元素
 * 
 * @param arr 
 * @param index 
 * @return {Function} 返回删除后的数组
 * 
 * sliceOne([1, 2, 3], -2) => [2, 3]
 */
export function spliceIndex(arr: any[], index: number): any[] {
    if (index < 0) {
        index = arr.length + index;

        if (index < 0) {
            return arr;
        }
    }

    if (index >= arr.length) {
        return arr;
    }

    for (var i = index, k = i + 1, n = arr.length; k < n; i += 1, k += 1) {
        arr[i] = arr[k];
    }

    arr.pop();
    return arr;
};

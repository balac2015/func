'use strict';

/**
 * 随机从数组 arr 中提取 num 长度的新数组
 * 
 * @param {Array} arr
 * @param {Number} num 新数组的长度
 * @return {Array}
 */
export function randomSlice(arr: any[], num: number): any[] {
    const subs = arr.slice();
    const len = subs.length - num;

    if (len >= 0 && len < subs.length) {
        // 返回 0 ~ len 的随机数
        let index = Math.floor(Math.random() * len);
        return subs.splice(index, num);
    }

    return subs;
};

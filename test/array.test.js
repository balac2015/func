'use strict';

import { randomSlice, sliceOne, getRndInteger } from '../lib';

describe('randomSlice() should return sub items', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const len = arr.length;

    it('randomSlice 参数 num 无效，返回原数组：', () => {
        // num 无效，返回原数组
        expect(arr).toEqual(randomSlice(arr));
        expect(arr).toEqual(randomSlice(arr, 0));

    });

    it('randomSlice 参数 num 超出数组范围的值，返回原数组：', () => {
        // 超出数组范围的值，返回原数组
        const beyond = getRndInteger(len + 1, 1000);

        expect(arr).toEqual(randomSlice(arr, beyond));
    });

    it('randomSlice 参数 num 在数组范围内，：', () => {
        // 在数组范围内的值
        const scoped = getRndInteger(0, len, true);
        const subs = randomSlice(arr, scoped);

        // 子组件长度与 num 值相等
        expect(scoped).toBe(subs.length);
        expect(arr).toEqual(expect.arrayContaining(subs));
    });
});

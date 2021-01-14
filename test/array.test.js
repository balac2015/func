'use strict';

import { randomSlice, spliceIndex, getRndInteger } from '../lib';

describe('randomSlice() 应该返回一个子数组', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const len = arr.length;

    it('randomSlice 参数 num 无效值', () => {
        // num 无效，返回原数组
        expect(arr).toEqual(randomSlice(arr));
        expect(arr).toEqual(randomSlice(arr, 0));

    });

    it('randomSlice 参数 num 超出数组范围的值', () => {
        // 超出数组范围的值，返回原数组
        const beyond = getRndInteger(len + 1, 1000);

        expect(arr).toEqual(randomSlice(arr, beyond));
    });

    it('randomSlice 参数 num 在数组范围内', () => {
        // 在数组范围内的值
        const scoped = getRndInteger(0, len, true);
        const subs = randomSlice(arr, scoped);

        // 子组件长度与 num 值相等
        expect(scoped).toEqual(subs.length);
        expect(arr).toEqual(expect.arrayContaining(subs));
    });
});

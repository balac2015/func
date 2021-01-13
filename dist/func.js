var Func = (function (exports) {
    'use strict';

    /**
     * 随机从数组 arr 中提取 num 的长度返回新数组
     * 
     * @param {Array} arr
     * @param {Number} num 新数组的长度
     * @return {Array}
     */

    function randomSlice(arr, num) {
      if (!num || num >= arr.length) {
        return arr.slice();
      }

      var index = Math.floor(Math.random() * arr.length);
      var a = [];

      for (var i = 0, j = index; i < num; i++) {
        a.push(arr[j++]);

        if (j === arr.length) {
          j = 0;
        }
      }

      return a;
    }
    /**
     * 从数组中删除一个已存在的元素
     * 
     * @param arr 
     * @param index 
     */

    function spliceOne(arr, index) {
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
    }

    exports.randomSlice = randomSlice;
    exports.spliceOne = spliceOne;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));

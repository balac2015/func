'use strict';

/**
 * 返回一个空函数
 * 
 * @return {Function}
 * @ublic
 */
export function noop() {};

/**
 * 获取函数 func 的参数名称
 * 
 * @param {Function} func 
 * @param {Boolean} [useCache] 默认为 true
 * @return {Array} names
 */
export function getParamNames(func, cache): [] {
    if (typeof func !== 'function') {
        throw new Error('The "func" must be a function. Received type');
    }

    cache = cache !== false;
    if (cache && func.__cache_names) {
        return func.__cache_names;
    }
    var str = func.toString();
    var names = str.slice(str.indexOf('(') + 1, str.indexOf(')')).match(/([^\s,]+)/g) || [];
    func.__cache_names = names;
    return names;
}

/**
 * 将传入的函数柯里化
 * @param fn 
 */
export function curry(fn: Function) {
};

/**
 * @description <span style='color:red'>防抖函数(wait时间内只能执行一次，若触发了 则重新计算时间)</span>
 * @param {Function} fn - 待执行函数
 * @param {Number} wait - 防抖时间 ms为单位 
 * @param {Boolean} [first=true] - 可选参数 默认true true表示 取第一次触发 false 取最后一次触发
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */
export function debounce(fn: Function, wait: Number, first = true) {
    
};

/**
 * @description <span style='color:red'>节流函数(wait 时间内只能执行一次该函数)</span>
 * @param {Function} fn - 需要节流的函数
 * @param {Number} wait - 等待时间 ms为单位
 * @param {Object} [options] - 可选参数
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */
export function throttle(fn: Function, wait: Number) {
};
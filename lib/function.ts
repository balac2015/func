'use strict';

/**
 * 返回一个空函数
 */
export function noop(): void {};

/**
 * 单次执行函数，页面加载后只能执行一次
 * @param {Function} fn 传入的函数 
 * @return {Function} 返回函数
 */
export function once(fn: Function): Function {
    let done = false;

    return function(): Function {
        return done
            ? undefined
            : ((done = true), fn.apply(this, arguments));
    };
}

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
 * 防抖函数(wait时间内只能执行一次，若触发了 则重新计算时间)
 * 
 * @param {Function} fn - 待执行函数
 * @param {Number} [delay = 500] - 防抖时间 ms为单位 
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */
export function debounce(fn: Function, delay: number = 500): Function {
    let timer: number | null = null;

    return (...args): void => {
        timer && clearTimeout(timer);
        timer = setTimeout((): void => {
            fn.apply(this, args);
        }, delay);
    };
};


/**
 * @description 节流函数(wait 时间内只能执行一次该函数)
 * @param {Function} fn - 事件触发的操作，传入的函数
 * @param {Number} [delay = 500]  间隔多少毫秒需要触发一次事件
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */
export function throttle(fn: Function, delay: number = 500): Function {
    let timer: number;
    let args = arguments;
    let start: number;

    return function loop(): void {
        let self = this;
        let now = Date.now();

        if (!start) {
            start = now;
        }
        if (timer) {
            clearTimeout(timer);
        }
        if (now - start >= delay) {
            fn.apply(self, args);
            start = now;
        }
        else {
            timer = setTimeout((): void => {
                loop.apply(this, args);
            }, 50);
        }
    };
};

/**
 * 将 map 字典对象转换为 List
 * 
 * @param {Object} map Map对象
 * @param {String} [key = name] 键名
 * @param {String} [val = value] 键值
 * @returns {Array<Object>} 返回数组
 */
export function MapToArray(map: object, key: string = 'name', val: string = 'value'): object[] {
    return Object.keys(map).map((k): object => {
        return {
            [key]: k,
            [val]: map[k]
        };
    });
};

export function ArrayToMap(array: object[], key: string = 'name', val: string = 'value'): object {
    return array.reduce((prev, cur): object => {
        let name: string = cur[key];
        let value: string = cur[val];

        prev[name] = value;
        return prev;
    }, Object.create(null));
};
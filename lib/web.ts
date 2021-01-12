'use strict';

/**
 * 转义给定的 html 字符串
 * 
 * @param { String } html
 * @return { String }
 * @public
 * 
 * 使用：escape('<script src="1.js"></script>') => "%3Cscript%20src%3D%221.js%22%3E%3C/script%3E"
 */
export * as escape from 'escape-html';
// exports.escape = require('escape-html');

/**
 * 反转义给定的字符串
 * 
 * @param { String } html
 * @param { String } type
 * @return { String }
 * @public
 */
export * as unescape from 'unescape';
// exports.unescape = require('unescape');

export function _encodeURIComponent(text: string): string {
    try {
        return encodeURIComponent(text);
    }
    catch (e) {
        return text;
    }
}

/**
 * 安全、不会引发任务错误的解码 URIComponent
 * 如果发生`decodeURIComponent`错误，只需返回原始值即可。
 * 
 * @param { String } encodeText 
 * @return { String } URL decode original string.
 */
export const decodeURIComponent = function _decodeURIComponent(encodeText: string): string {
    try {
        return decodeURIComponent(encodeText);
    }
    catch (e) {
        return encodeText;
    }
}

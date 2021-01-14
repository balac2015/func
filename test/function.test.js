'use strict';

import { noop, getParamNames } from '../lib';

describe('noop() 应该返回 undefined', () => {
    it('空函数返回 undefined', () => {
        expect(undefined).toEqual(noop());
    });
});

describe('getParamNames() 应该返回参数名称', () => {
    // todo: null, undefined 参数值，抛异常的测试？

    it('匹配匿名函数：', () => {
        expect(['key1']).toEqual(getParamNames(function(key1) {}));
        expect(['key1', 'key2']).toEqual(getParamNames(function(key1, key2) {}));
        expect(['key1', 'key2', 'key3', 'key4', 'callback']).toEqual(getParamNames(function(key1, key2, key3, key4, callback) {}));
    });

    it('匹配具名函数：', () => {
        expect(['func', 'cache']).toEqual(getParamNames(getParamNames));
        expect(['func', 'cache']).toEqual(getParamNames(getParamNames, false));
        // expect(['s', 'format']).toEqual(getParamNames(md5));
        // expect(['algorithm', 'key', 'data', 'encoding']).toEqual(getParamNames(hmac));
        // expect(['s', 'urlsafe']).toEqual(getParamNames(base64encode));
        // expect(['encodeStr', 'urlsafe', 'encoding']).toEqual(getParamNames(base64decode));
    });
});

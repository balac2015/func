
/**
 * 获取 min（包含）~ max（不包含）之间的随机整数
 * 
 * @param {Number} min
 * @param {Number} max
 * @param {Boolean} include 是否包含 max，默认不包含
 * 
 * Math.random() 返回介于 0（包含） ~ 1（不包含） 之间的一个随机数
 * Math.floor((Math.random()*10)+1) 取得介于 1 到 10 之间的一个随机数
 * Number.MAX_VALUE 返回Javascript中的最大数：1.7976931348623157e+308
 * 
 * 问题：getRndInteger(1) 获取大于等于 1 的随机数，
 *      对分数字的判断
 */
export function getRndInteger(min: number, max: number = Number.MAX_VALUE, include: boolean = false): number {
    if (min < max) {
        return Math.floor(Math.random() * (max - min + Number(include))) + min;
    }
    else {
        // 不是数字的处理
        return min;
    }
};


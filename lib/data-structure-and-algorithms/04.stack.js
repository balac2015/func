/**
 * JavaScript 数据结构与算法之美 - 循环链表
 */

// Stack类
function Stack() {
    this.items = [];

    // 添加新元素到栈顶
    this.push = function(element) {
        this.items.push(element);
    };
    // 移除栈顶元素，同时返回被移除的元素
    this.pop = function() {
        return this.items.pop();
    };
    // 查看栈顶元素
    this.peek = function() {
        return this.items[this.items.length - 1];
    };
    // 判断是否为空栈
    this.isEmpty = function() {
        return this.items.length === 0;
    };
    // 清空栈
    this.clear = function() {
        this.items = [];
    };
    // 查询栈的长度
    this.size = function() {
        return this.items.length;
    };
    // 打印栈里的元素
    this.print = function() {
        console.log(this.items.toString());
    };
}

// 创建Stack实例
var stack = new Stack();

console.log(stack.isEmpty()); // true
stack.push(5); // undefined
stack.push(8); // undefined
console.log(stack.peek()); // 8
stack.push(11); // undefined
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.push(15); // undefined
stack.pop(); // 15
console.log(stack.size()); // 3
stack.print(); // 5,8,11
stack.clear(); // undefined
console.log(stack.size()); // 0
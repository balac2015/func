/**
 * JavaScript 数据结构与算法之美 - 循环链表
 */

// 循环链表
function CircularLinkedList() {
    // 节点
    function Node(element) {
        this.element = element; // 当前节点的元素
        this.next = null; // 下一个节点指针
    }

    var length = 0,
        head = null;

    this.append = function(element) {
        var node = new Node(element),
            current;

        if (!head) {
            head = node;
            // 头的指针指向自己
            node.next = head;
        } else {
            current = head;

            while (current.next !== head) {
                current = current.next;
            }

            current.next = node;
            // 最后一个节点指向头节点
            node.next = head;
        }

        length++;
        return true;
    };

    this.insert = function(position, element) {
        if (position > -1 && position < length) {
            var node = new Node(element),
                index = 0,
                current = head,
                previous;

            if (position === 0) {
                // 头节点指向自己
                node.next = head;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return false;
        }
    };
    this.remove = function(element) {
        var current = head,
            previous,
            indexCheck = 0;
        while (current && indexCheck < length) {
            if (current.element === element) {
                if (indexCheck == 0) {
                    head = current.next;
                    length--;
                    return true;
                } else {
                    previous.next = current.next;
                    length--;
                    return true;
                }
            } else {
                previous = current;
                current = current.next;
                indexCheck++;
            }
        }
        return false;
    };
    this.indexOf = function(element) {
        var current = head,
            index = 0;
        while (current && index < length) {
            if (current.element === element) {
                return index;
            } else {
                index++;
                current = current.next;
            }
        }
        return -1;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };

    // 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
    this.toString = function() {
        var current = head,
            string = '',
            indexCheck = 0;
        while (current && indexCheck < length) {
            string += ',' + current.element;
            current = current.next;
            indexCheck++;
        }
        return string.slice(1);
    };

    // 获取链表头部元素
    this.getHead = function() {
        return head.element;
    };

    // 打印链表数据
    this.print = function() {
        console.log(this.toString());
    };

    // 获取整个链表
    this.list = function() {
        console.log('head: ', head);
        return head;
    };
}

// 创建单向链表实例
var circularLinked = new CircularLinkedList();
console.log(circularLinked.removeAt(0)); // false
console.log(circularLinked.isEmpty()); // true
circularLinked.append('Tom');
circularLinked.append('Peter');
circularLinked.append('Paul');
circularLinked.print(); // "Tom,Peter,Paul"
circularLinked.insert(0, 'Susan');
circularLinked.print(); // "Susan,Tom,Peter,Paul"
circularLinked.insert(1, 'Jack');
circularLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(circularLinked.getHead()); // "Susan"
console.log(circularLinked.isEmpty()); // false
console.log(circularLinked.indexOf('Peter')); // 3
console.log(circularLinked.indexOf('Cris')); // -1
circularLinked.remove('Tom');
circularLinked.removeAt(2);
circularLinked.print(); // "Susan,Jack,Paul"
circularLinked.list(); // 具体控制台
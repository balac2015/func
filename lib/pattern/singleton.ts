var Singleton = function(name) {
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = function() {
    return this.name;
};
Singleton.getInstance = function(name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}

var a = Singleton.getInstance('a'); // 通过 getInstance 来获取实例
var b = Singleton.getInstance('b');
console.log(a === b);
# constructor 构造函数

## 1

构造函数，从调用的方式来讲，构造函数就是可以用new 关键字来进行调用的函数。
引用类型的构造函数是可以被修改的，而基础类型的构造函数是不可以被修改的。
所以原型链继承的方案里面:

```js
function Parent() {
    this.age = 42;
}
Parent.prototype = {
    method: function() {}
};

function Child() {}

// 设置 Child 的 prototype 属性为 Parent 的实例对象
Child.prototype = new Parent();
Child.prototype.foo = 'Hello World';

Child.prototype.constructor === Object;
// true

// 修正 Child.prototype.constructor 为 Child 本身
Child.prototype.constructor = Child;

var test = new Child() // 创建 Child 的一个新实例
console.log(test);

```

就需要用类似 ```Bar.prototype.constructor = Bar;``` 这样的方式来修正constructor。


## prototype

__proto__ 指向所属类的原型
prototype  所有的类都有一个prototype属性  但是实例化的是没有的  prototype只存在在类上面和所有的函数上面但是不存在实例化的方法上面   其实实例化之后 都是一个对象
constructor prototype.constructor 每个类上都有这个属性

## Class

Object.create的原理:

```js
function create (parentProto) {
    function Fn () {}
    Fn.prototype = parentProto
    return new Fn()
}

```

class Child extends Parent {
    constructor(name){
        super(name) // 调用super   Animal.call(tiger, name)
        // super 指代的是父类
        console.log(super.flag)
    }
}

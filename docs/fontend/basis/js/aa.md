/*
 * @Description: 
 * @Author: scf
 * @Date: 2019-08-23 22:24:38
 * @LastEditors: scf
 * @LastEditTime: 2019-08-30 11:11:03
 */
// // console.log(Object.prototype)
// // console.log(Object.prototype.__proto__)

function create(proto, propertiesObject) {
    function Fn () {}
    Fn.prototype = proto
    
    let fn = new Fn()
    fn.constructor = propertiesObject.constructor.value

    return fn
}

function Animal (age) {
    this.age = age
    this.eyes = 2
}

Animal.prototype.say = function () {
    console.log('我是动物')
    
}

// const Tiger = new Animal()

function Tiger () {
    Animal.call(this, arguments[0])// 这是为了继承属性
}

Tiger.prototype.eat = function () {
    console.log('我在吃')
}

// 正确的继承方法
Tiger.prototype = new Animal()
// Tiger.prototype = create(Animal.prototype,{constructor:{value: Animal}})// 目的是Tiger继承Animal的原型
// console.log(Tiger.prototype === Animal.prototype)


// 错误的继承方法
// Tiger.prototype = new Animal()
//  new Tiger 的时候无法传值

const tiger = new Tiger('888')
// const aniaml = new Animal()
console.log(tiger.age)


function A () {}

var  a = new A()

// console.log(a.__proto__ === A.prototype)
// console.log(a.prototype)


const sleep = (duration) =>  new Promise((resolve, reject) => {
    setTimeout(resolve, reject)
})

sleep(2000).then(() => {console.log(222)})
/*
 * @Description:  
 * @Author: scf
 * @Date: 2019-08-24 14:49:59
 * @LastEditors: scf
 * @LastEditTime: 2019-08-24 22:14:22
 */
// 装饰器
class Parent{
    
}

function before(prototype, )


// mixin 混合

function mixin(obj) {
    return function(Constructor){
        Object.assign(Constructor.prototype, obj)
    }
}
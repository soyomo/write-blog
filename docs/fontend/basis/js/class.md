/*
 * @Description: 
 * @Author: scf
 * @Date: 2019-08-24 12:21:21
 * @LastEditors: scf
 * @LastEditTime: 2019-08-24 12:23:06
 */
class Animal{
    flag = 1
}

class Tiger extends Animal{
    constructor(){
        console.log(super.flag)
        super()
    }
}
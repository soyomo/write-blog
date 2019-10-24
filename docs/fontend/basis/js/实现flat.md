/*
 * @Description: flat的实现
 * @Author: scf
 * @Date: 2019-08-24 15:11:52
 * @LastEditors: scf
 * @LastEditTime: 2019-08-25 15:45:00
 */

 // 实现compose 函数
 // 实现数组扁平化
 // 实现  反柯力化
 //实现reduce
const a = [1,2,3,4,5,[6,7,8,9,[10,[15,16,[17,18]],11,12,13]]]

Array.prototype.flat = function(number) {
    return this.reduce((pre, item) => {
        return (Array.isArray(item) && number>0) ? pre.concat(item.flat(--number)) : pre.concat(item)
    }, [])
}

// Array.prototype.flat = function(number) {
//     const returnArray = this.reduce((pre, item) => {
//         if(Object.prototype.toString.call(item) === "[object Array]"){
//             number--
//             const array = pre.concat(item)
//             if(!number || number <= 0){
//                 return array
//             }else{
//                 return array.flat(number)
//             }
//         }
//         pre.push(item)
//         return pre
//     },[])
//     return returnArray
// }




// Array.prototype.flat = function (num){
//     return this.reduce((pre,current,index,arr)=>{
//         // return pre.concat(Array.isArray(current)?current.flat(current):current)
//         if(Array.isArray(current) && num>1){
//             return pre.concat(current.flat(--num))
//         }
//         return pre.concat(current)   
//     },[])
// }
// console.log(a.flat())
// console.log(a.flat(2))
// console.log(a.flat(3))
console.log(a.flat())
// console.log(a.flat(5))
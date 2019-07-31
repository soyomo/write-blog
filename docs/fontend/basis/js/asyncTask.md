# js的异步任务

```js
const sleep = (duration) =>  new Promise((resolve, reject) => {
        setTimeout(resolve, reject)
    })
const changeColor = (color, duration) => {
    console.log(color);
    sleep(duration);
}
const loop = async () => {
    while(true){
        await changeColor('red', 3000)
        await changeColor('blue', 2000)
        await changeColor('green', 1000)
    }
}
```

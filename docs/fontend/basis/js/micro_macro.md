# 宏任务和微任务

## 前言

js是一个动态的语言,js语言的运行通常需要一个宿主环境,常见的宿主环境主要有浏览器和Node. js在每个宿主环境中运行，宿主环境会给js提供一系列的api来供给js使用，比如web环境提供的window对象，document对象，Node环境提供的global对象等。

## 宏任务

对于js而言，可以简单理解成为宿主环境分配的异步任务都是宏任务。浏览器中常见的异步任务是：setTimeOut,setInterval,postmessage

# css

[[toc]]
{{1+1}}

## css简介

css的全称是：Cascading Style Sheets意为层叠样式表

## 收集的一些css工具网站

> [css Reference](cssreference.io)
> []

## flex布局

flex的子元素的属性：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>flex demo</title>
</head>
<body>
    <style>

    </style>   
    <div class="box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

flex的心得体会:
<blockquote>
<style style="display: block" contenteditable>
    .box{
        display: flex;
    }
    .box > * {
        border:1px solid gray;
        flex: 1 1 auto
    }
</style>
<div>
    <div class="box">
        <div class="left">
        a
        </div>
        b
        <div class="center">
        </div>
        <div class="right">
        ni kan wo sho zio chang de dandi
        </div>
    </div>
</div>
</blockquote>

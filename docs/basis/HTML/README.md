# HTML

## HTML简介

HTML的全称是：

## 技巧

### 可以再页面中直接编辑代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <style style="display: block;" contenteditable="">
        .box {
            display: flex;
            width: 500px;
            border: 2px dotted rgb(96, 139, 168);
        }

        .box>* {
            flex: 1 1 auto;
            border: 2px solid rgb(96, 139, 168);
            border-radius: 5px;
            background-color: rgba(96, 139, 168, .2);
        }
    </style>
    <div class="box">
        <div>One</div>
        <div>two</div>
        <div>three has more content</div>
    </div>
</body>

</html>

```

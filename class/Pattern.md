# fabric. Pattern

图案

link：http://fabricjs.com/docs/fabric.Pattern.html

## 示例

``` javascript
function loadPattern(url) {
    fabric.util.loadImage(url, function(img) {
        text.set('fill', new fabric.Pattern({
            source: img,
            repeat: document.getElementById('repeat').value
        }));
        shape.set('fill', new fabric.Pattern({
            source: img,
            repeat: document.getElementById('repeat').value
        }));
        canvas.renderAll();
    });
}
```

## 成员

### crossOrigin : String

    交叉原点的至，(one of "", "anonymous", "use-credentials")

赋值类型： `String` 

### offsetX : Number

    与对象左/上角的图案水平偏移

赋值类型： `Number` 

### offsetY : Number

    图案与对象左/上角的垂直偏移

赋值类型： `Number` 

### patternTransform : Array

    转换矩阵以更改从SVG导入的模式。

赋值类型： `Array` 

### repeat : String

    模式的重复属性，(one of repeat, repeat-x, repeat-y or no-repeat)

赋值类型： `String('repeat')` 

## 方法

### initialize(optionsopt, callbackopt) → {fabric. Pattern}

    初始化

 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象
callback|function|选填|回调初始化后调用的函数。
返回： `fabric.Pattern` 

### toLive(ctx) → {CanvasPattern}

    返回CanvasPattern的实例

 参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|上下文创建模式
返回： `CanvasPattern` 

### toObject(propertiesToIncludeopt) → {Object}

    返回模式的对象表示

参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回： `Object` 

### toSVG(object) → {String}

### toSVG(reviveropt) 

    返回画布的SVG表示形式

参数|类型|性质|描述
|---|---|---|---
object|fabric. Object|选填|SVG表示的进一步解析方法
返回： `String` ，实例的 svg 表示

# fabric.Gradient 
渐变

## 成员

### gradientTransform :Array.<Number>
    在绘制之前应用于渐变的变换矩阵。
    从svg渐变导入的值不适用于当前位于中心的变换。在应用此变换之前，原点位于对象的左上角，再加上offsetY和offsetX。
赋值类型：`Array.<Number> (null)`

### gradientUnits :String
    协调坐标单位。如果是像素，则坐标数以宽度/高度的相同单位表示。如果设置为“百分比”，则坐标仍然是数字，但是1表示X的宽度为100％，y的高度为100％。
    它可以大于1且为负数。允许的值像素或百分比。
赋值类型：`String(pixels)` 

### offsetX :Number
    在路径组之外时用于对齐来自SVG的渐变的水平偏移
赋值类型：`Number(0)`

### offsetY :Number
    当外部路径组时，来自 SVG 的梯度对齐的垂直偏移
赋值类型：`Number(0)`

### type :String
    渐变型线性或径向
赋值类型：`String(pixels)`

### 

返回：``



## 方法

### (static) fromElement(el, instance, opacityAttr, svgOptions, viewBoxWidth, viewBoxHeight, width, height) → {fabric.Gradient}
    从SVG元素返回fabric.Gradient实例
参数|类型|性质|描述
|---|---|---|---
el|SVGGradientElement|必填|SVG 梯度元素
instance|fabric.Object|必填| 
opacityAttr|String|必填|填充不透明度或笔触不透明度属性，用于乘以每个停靠点的不透明度。

svgOptions|Object|必填|一个对象，该对象包含SVG的大小，以便正确解析使用grafficUnits作为“ userSpaceOnUse”和百分比的图形。
viewBoxWidth|Object.number|必填|svg上viewBox属性的宽度部分
viewBoxHeight|Object.number|必填|svg上viewBox属性的高度部分
width|Object.number|必填|如果没有指定 viewBox，则使用 svg 标记的 width 部分
height|Object.number|必填|如果没有指定 viewBox，则使用 svg 标记的 height 部分
返回：`fabric.Gradient`，渐变实例

### addColorStop(colorStop) → {fabric.Gradient}
    添加另一种颜色
参数|类型|性质|描述
|---|---|---|---
colorStop|Object|必填|具有偏移量和颜色的对象
返回：`fabric.Gradient`

### initialize(options) → {fabric.Gradient}
    初始化
参数|类型|性质|描述
|---|---|---|---
options|Object|必填|选项对象的类型，协调，渐变单位和着色停止
options
参数|类型|性质|描述
|---|---|---|---
type|Object|选填|渐变型线性或径向
gradientUnits|Object|选填|渐变单位
offsetX|Object|选填|SVG导入兼容性
offsetY|Object|选填|SVG导入兼容性
colorStops|Array.<Object>|必填|包含着色块
coords|Object|必填|包含了梯度的大小
coords
参数|类型|性质|描述
|---|---|---|---
x1|Number|选填|线性的第一个点或径向的焦点的X坐标
y1|Number|选填|线性的第一个点的Y坐标或径向的焦点的Y坐标
x2|Number|选填|线性的第二点或径向的中心点的X坐标
y2|Number|选填|线性的第二个点的Y坐标或径向的焦点的Y坐标
r1|Number|选填|仅适用于径向渐变，内圆半径
r2|Number|选填|仅适用于径向渐变，外圆半径
返回：`fabric.Gradient`

### toLive(ctx) → {CanvasGradient}
    返回CanvasGradient的实例
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文
返回：`CanvasGradient`

### toObject(propertiesToIncludeopt) → {Object}
    返回渐变的对象表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`Object`

### toSVG(object) → {String}
    返回渐变的SVG表示形式
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|用于为其创建渐变的对象
返回：`String`，梯度的SVG表示（线性/径向）

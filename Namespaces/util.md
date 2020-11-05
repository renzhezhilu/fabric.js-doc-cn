# fabric.util
实用方法

## Namespaces命名空间
- [array](xxx)
- [ease](xxx)
- [object](xxx)
- [string](xxx)

## 成员

### (static) getElementStyle
    返回给定元素的样式属性值

### (static) setImageSmoothing
    setImageSmoothing设置上下文imageSmoothingEnabled属性。由canvas和ImageObject使用。

## 方法

### (static) addClass(element, className)
    将类添加到元素
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|要添加类的元素
className|String|必填|要添加到元素的类

### (static) addListener(element, eventName, handler)
    将事件侦听器添加到元素
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|
eventName|String|必填|
handler|function|必填|

### (static) animate(optionsopt)
    在一定时间内将值从一个值更改为另一个值，并在更改值时调用回调。
参数|类型|性质|描述
|---|---|---|---
options|Object|选填|动画选项
options
参数|类型|性质|默认值|描述
|---|---|---|---
onChange|function|选填||每次值更改时调用
onComplete|function|选填||值更改完成后调用
startValue|Number|选填|0|起始值
endValue|Number|选填|100|终值
byValue|Number|选填|100|修改属性的值
easing|function|选填||缓动功能
duration|Number|选填|500|变化持续时间（毫秒）
abort|function|选填||带有逻辑的附加功能。如果返回true，则调用onComplete。

### (static) animateColor(fromColor, toColor, durationopt, optionsopt)
    在一定时间内将颜色从一种更改为另一种，并在更改值时调用回调。
参数|类型|性质|描述
|---|---|---|---
fromColor|String|必填|十六进制或rgb（a）格式的起始颜色。
toColor|String|必填|十六进制或rgb（a）格式的起始颜色。
duration|Number|选填|十六进制或rgb（a）格式的起始颜色。
toColor|String|选填|更改的持续时间（以毫秒为单位）。
options|Object|选填|动画选项
options
参数|类型|性质|描述
|---|---|---|---
onChange|function|选填|每次值更改时调用
onComplete|function|选填|值更改完成后调用
colorEasing|function|选填|缓动功能。请注意，此函数仅采用两个参数（currentTime，duration）。因此，无法使用常规的动画缓动功能。
abort|function|选填|带有逻辑的附加功能。如果返回true，则调用onComplete。


### (static) calcDimensionsMatrix(options) → {Array.<Number>}
    从与qrDecompose返回的对象相同类型的对象开始，返回一个转换矩阵，如果您要从尚未激活的对象计算某些转换，该方法也很有用。
    之所以称为DimensionsTransformMatrix，是因为这些属性会影响对象的结果框的大小。
参数|类型|性质|描述
|---|---|---|---
options|Object|必填|动画选项
options
参数|类型|性质|描述
|---|---|---|---
scaleX|Number|选填|水平比例
scaleY|Number|选填|垂直比例
flipX|Boolean|选填|水平翻转
flipY|Boolean|选填|垂直翻转
skewX|Number|选填|水平倾斜
skewY|Number|选填|垂直倾斜
返回：`Array.<Number>`，变换矩阵

### (static) calcRotateMatrix(options) → {Array.<Number>}
    从与qrDecompose返回的对象相同类型的对象开始返回一个转换矩阵，如果您要从尚未激活的对象计算一些转换，此方法也很有用
参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
angle|Number|选填|角度（度）
返回：`Array.<Number>`，变换矩阵

### (static) clearFabricFontCache(fontFamilyopt)
    如果没有指定fontFamily，则清除给定字体系列的字符宽度缓存或所有缓存。
    如果您知道要以惰性方式加载字体并且在将文本对象添加到画布时不等待自定义字体正确加载，请使用它。
    如果在尚未加载其自身字体时添加文本对象，则会得到错误的度量值以及错误的边界框。
    清除字体缓存后，更改textObject文本内容或调用initDimensions（）触发重新计算
参数|类型|性质|描述
|---|---|---|---
fontFamily|String|选填|字体系列要清除

### (static) composeMatrix(options) → {Array.<Number>}
    从与qrDecompose返回的对象相同类型的对象开始返回一个转换矩阵，如果您要从尚未激活的对象计算一些转换，此方法也很有用
参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
angle|Number|选填|
scaleX|Number|选填|水平比例
scaleY|Number|选填|垂直比例
flipX|Boolean|选填|水平翻转
flipY|Boolean|选填|垂直翻转
skewX|Number|选填|水平倾斜
skewY|Number|选填|垂直倾斜
translateX|Number|选填|
translateY|Number|选填|
返回：`Array.<Number>`，变换矩阵

### (static) copyCanvasElement(canvas) → {CanvasElement}
    创建一个canvas元素，该元素是另一个元素的副本并且也被绘制
参数|类型|性质|描述
|---|---|---|---
canvas|CanvasElement|必填|复制的大小和内容
返回：`CanvasElement`，初始化的canvas元素

### (static) cos(angle) → {Number}
    计算角度的cos，避免返回已知结果的浮点数

参数|类型|性质|描述
|---|---|---|---
angle|Number|必填|以弧度或度为单位的角度
返回：`Number`


### (static) createCanvasElement() → {CanvasElement}
    创建画布元素 
返回：`CanvasElement`,初始化的canvas元素

### (static) createClass(parentopt, propertiesopt)
    创建“类”的助手。
参数|类型|性质|描述
|---|---|---|---
parent|function|选填|从中继承的可选“类”
properties|Object|选填|此类的所有实例共享的属性（请谨慎修改此处定义的对象，因为这会影响所有实例）

### (static) createImage() → {HTMLImageElement}
    创建图像元素（在客户端和节点上工作）
返回：`HTMLImageElement`，HTML图像元素

### (static) degreesToRadians(degrees) → {Number}
    将度数转换为弧度。
参数|类型|性质|描述
|---|---|---|---
degrees|Number|必填|值（度）
返回：`Number`,弧度值

### (static) drawDashedLine(ctx, x, y, x2, y2, da)
    在两点之间绘制虚线此方法用于在选择区域周围绘制虚线。在画布上查看虚线
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|上下文
x|Number|必填|起始点的x坐标
y|Number|必填|起始点的y坐标
x2|Number|必填|结束点的x坐标
y2|Number|必填|结束点的y坐标
da|Array|必填|破折号阵列模式

### (static) enlivenObjects(objects, callback, namespace, reviver)
    根据其对象表示创建相应的结构实例

参数|类型|性质|描述
|---|---|---|---
objects|Array|必填|活跃对象
callback|function|必填|创建所有对象时进行调用的回调
namespace|String|必填|命名空间，用于从中获取klass“ Class”对象
reviver|function|必填|进一步解析对象元素的方法，在创建每个结构对象之后调用。

### (static) enlivenPatterns(patterns, callback)
    创建并等待模式加载
参数|类型|性质|描述
|---|---|---|---
patterns|Array|必填|活跃对象
callback|function|必填|在创建所有结构对象之后调用创建所有对象时调用的回调。

### (static) falseFunction() → {Boolean}

    总是返回false的函数。
返回：`Boolean`

### (static) findScaleToCover(source, destination) → {Number}
    查找对象源的比例以完全覆盖对象目标，并保持宽高比不变。尊重缓存允许的总面积。
参数|类型|性质|描述
|---|---|---|---
source|Object 、 fabric.Object|必填|来源
destination|Object 、 fabric.Object|必填|目标
source
参数|类型|性质|描述
|---|---|---|---
height|Number|必填|对象的自然未缩放高度
width|Number|必填|对象的自然未缩放宽度
destination
参数|类型|性质|描述
|---|---|---|---
height|Number|必填|对象的自然未缩放高度
width|Number|必填|对象的自然未缩放宽度
返回：`Number`，应用于来源以覆盖目标的比例因子


### (static) findScaleToFit(source, destination) → {Number}
    查找对象源以适合对象目标的比例，同时保持宽高比不变。尊重缓存允许的总面积。
参数|类型|性质|描述
|---|---|---|---
source|Object 、 fabric.Object|必填|来源
destination|Object 、 fabric.Object|必填|目标
source
参数|类型|性质|描述
|---|---|---|---
height|Number|必填|对象的自然未缩放高度
width|Number|必填|对象的自然未缩放宽度
destination
参数|类型|性质|描述
|---|---|---|---
height|Number|必填|对象的自然未缩放高度
width|Number|必填|对象的自然未缩放宽度
返回：`Number`,适用于源以适合目标的比例因子

### (static) getById(id) → {HTMLElement|null}
    取得id并返回具有该id的元素（如果文档中存在一个元素）
参数|类型|性质|描述
|---|---|---|---
id|String 、 HTMLElement|必填|
返回：`HTMLElement 、 null`

### (static) getElementOffset(element) → {Object}
    返回给定元素的偏移量
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|要偏移的元素
返回：`Object`,具有“ left”和“ top”属性的对象

### (static) getKlass(type, namespace) → {Object}
    返回给定名称空间的klass“ Class”对象
参数|类型|性质|描述
|---|---|---|---
type|String|必填|对象的类型（例如“圆”）
namespace|String|必填|命名空间，用于从中获取klass“ Class”对象
返回：`Object`,klass "Class"

### (static) getRandomInt(min, max) → {Number}
    返回2个指定数字之间的随机数。
参数|类型|性质|描述
|---|---|---|---
min|Number|必填|下限
max|Number|必填|上限
返回：`Number`，随机值（介于最小值和最大值之间）

### (static) getScrollLeftTop(element) → {Object}
    返回元素滚动偏移量
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|要操作的元素
返回：`Object`,具有“ left”和“ top”属性的对象

### (static) getSvgAttributes(type) → {Array}
    返回结构解析的给定svg的属性数组
参数|类型|性质|描述
|---|---|---|---
type|String|必填|svg元素的类型（例如'circle'）
返回：`Array`，支持属性的字符串名称

### (static) groupSVGElements(elements, optionsopt, path) → {fabric.Object|fabric.Group}
    分组SVG元素（通常是从SVG文档检索的元素）
参数|类型|性质|描述
|---|---|---|---
elements|Array|必填|要分组的SVG元素
options|Object|选填|选项    
path|String|必填|将源路径设置为的值
返回：`fabric.Object | fabric.Group`

### (static) invertTransform(t) → {Array}
    逆变换t
参数|类型|性质|描述
|---|---|---|---
t|Array|必填|转变

返回：`Array`,倒置变换

### (static) isTransparent(ctx, x, y, tolerance)
    如果上下文在指定位置具有透明像素，则返回true（考虑公差）
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|上下文
x|Number|必填|水平坐标
y|Number|必填|垂直坐标
tolerance|Number|必填|公差
返回：`Boolean`

### (static) limitDimsByArea(ar, maximumArea) → {Object.x|Object.y}
    给定当前的宽高比，请确定可以考虑缓存允许的总面积的最大宽度和高度。
参数|类型|性质|描述
|---|---|---|---
ar|Number|必填|长宽比
maximumArea|Number|必填|您想要达到的最大面积
返回：`Object.x`,X限制的尺寸 `Object.y`,Y限制的尺寸

### (static) loadImage(url, callback, contextopt, crossOriginopt)
    从给定的URL加载图像元素，并将其传递给回调
参数|类型|性质|描述
|---|---|---|---
url|String|必填|图片的网址
callback|function|必填|加载图像后调用
context|*|选填|调用回调的上下文
crossOrigin|Object|必填|crossOrigin值，将图像元素设置为

### (static) loadImageInDom(img, callback) → {Object}
    将SVG图片与数据：URL附加到dom
参数|类型|性质|描述
|---|---|---|---
img|Object|必填|带有data:image/svg src的图像对象
callback|function|必填|加载图像后调用
返回：`Object`，DOM元素（包含SVG图像的div）

### (static) makeBoundingBoxFromPoints(points, transformopt) → {Object}
    返回点的边界矩形的坐标（左，上，宽，高）
参数|类型|性质|描述
|---|---|---|---
points|Array|必填|4点数组
transform|Array|选填|代表2x3转换矩阵的6个数字组成的数组
返回：`Object`，具有left，top，width，height属性的对象

### (static) makeElement(tagName, attributesopt) → {HTMLElement}
    创建具有指定属性的指定元素
参数|类型|性质|描述
|---|---|---|---
tagName|String|必填|要创建的元素的类型(标签)
attributes|Object|选填|要在元素上设置的属性
返回：`HTMLElement`，新创建的元素
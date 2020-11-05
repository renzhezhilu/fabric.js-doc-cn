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

### (static) makeElementSelectable(element) → {HTMLElement}
    使元素可选
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|要选择的元素
返回：`HTMLElement`，传入的元素

### (static) makeElementUnselectable(element) → {HTMLElement}
    使元素不可选择
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|不可选择的元素
返回：`HTMLElement`，传入的元素

### (static) matrixToSVG(trasnform) → {String|Object.y}
    给定一个由6个数字组成的数组，则返回类似““ matrix（... numbers）”`之类的东西
参数|类型|性质|描述
|---|---|---|---
trasnform|Array|必填|具有6个数字的数组
返回：`String`,SVG的转换矩阵  `Object.y`,受Y限制的尺寸

### (static) multiplyTransformMatrices(a, b, is2x2) → {Array}
    将矩阵A乘以矩阵B即可嵌套转换
参数|类型|性质|描述
|---|---|---|---
a|Array|必填|第一个变换矩阵
b|Array|必填|第二个变换矩阵
is2x2|Boolean|必填|将该矩阵乘以2x2矩阵的标志
返回：`Array`,两个变换矩阵的乘积

### (static) parsePreserveAspectRatioAttribute(attribute) → {Object}
    解析元素中的preserveAspectRatio(保留宽高比)属性 
参数|类型|性质|描述
|---|---|---|---
attribute|string|必填|被解析
返回：`Object`,包含align和MeetOrSlice属性的对象

### (static) parseUnit(value, fontSize) → {Number|String}
    如果适用，从属性值转换为像素值。返回转换后的像素或未转换的原始值。
参数|类型|性质|描述
|---|---|---|---
value|Number 、 String|必填|要操作的号码
fontSize|Number|必填|
返回：`Number | String`

### (static) populateWithProperties(source, destination) → {Array}
    用另一个对象的属性填充一个对象
参数|类型|性质|描述
|---|---|---|---
source|Object|必填|来源对象
destination|Object|必填|目标对象
返回：`Array`，属性要包含的属性名称

### (static) qrDecompose(a) → {Object}
    将标准2x3矩阵分解为变换分量
参数|类型|性质|描述
|---|---|---|---
a|Array|必填|变换矩阵 transformMatrix
返回：`Object`,变换的组成部分

### (static) radiansToDegrees(radians) → {Number}
    将弧度转换为度
参数|类型|性质|描述
|---|---|---|---
radians|Number|必填|弧度值
返回：`Number`

### (static) removeFromArray(array, value) → {Array}
    从数组中删除值。值的存在（及其在数组中的位置）是通过Array.prototype.indexOf确定的
参数|类型|性质|描述
|---|---|---|---
radians|Number|必填|弧度值
返回：`Array`,原始数组

### (static) removeListener(element, eventName, handler)
    从元素中删除事件监听器
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|
eventName|String|必填|
handler|function|必填|

### (static) request(url, optionsopt) → {XMLHttpRequest}
    发送请求的跨浏览器抽象
参数|类型|性质|描述
|---|---|---|---
url|String|必填|发送请求到的URL
options|Object|选填|
options
参数|类型|性质|默认值|描述
|---|---|---|---
method|String|选填|"GET"|发送请求到的URL
parameters|String|选填||附加到GET或正文中url的参数
body|String|选填||带有POST或PUT请求发送的正文
onComplete|String|选填||请求完成后进行调用的回调
返回：`XMLHttpRequest`


### (static) requestAnimFrame(callback, element)
    基于http://paulirish.com/2011/requestanimationframe-for-smart-animating/的requestAnimationFrame 
    polyfill为了获取准确的开始时间，应调用`requestAnimFrame`作为该方法的条目
参数|类型|性质|描述
|---|---|---|---
callback|function|必填|回调调用
element|DOMElement|必填|与动画关联的可选元素

### (static) resetObjectTransform(target)
    将对象变换状态重置为中性。顶部和左侧不占
参数|类型|性质|描述
|---|---|---|---
target|fabric.Object|必填|转换对象

### (static) resolveNamespace(namespace) → {Object}
    返回给定名称空间的对象
参数|类型|性质|描述
|---|---|---|---
namespace|String|必填|命名空间字符串，例如'fabric.Image.filter'或'fabric'
返回：`Object`，给定名称空间的对象（默认结构）

### (static) rotatePoint(point, origin, radians) → {fabric.Point}
    用“弧度”围绕“原点”旋转“点”(Rotates `point` around `origin` with `radians`
)
参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|旋转点
origin|fabric.Point|必填|旋转原点
radians|Number|必填|旋转角度的弧度
返回：`fabric.Point`,新的旋转点

### (static) rotateVector(vector, radians) → {Object}
    用弧度旋转`vector`
参数|类型|性质|描述
|---|---|---|---
vector|Object|必填|旋转向量（x和y）
radians|Number|必填|旋转角度的弧度
返回：`Object`，新的旋转点

### (static) saveObjectTransform(target) → {Object}
    提取对象变换值
参数|类型|性质|描述
|---|---|---|---
target|fabric.Object|必填|读取对象
返回：`Object`,变换的组成部分

### (static) setStyle(element, styles) → {HTMLElement}
    跨浏览器包装器，用于设置元素的样式
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|
styles|Object|必填|
返回：`HTMLElement`,作为第一个参数传递的元素

### (static) sin(angle) → {Number}
    计算角度的正弦，避免返回浮点数以获得已知结果
参数|类型|性质|描述
|---|---|---|---
angle|Number|必填|以弧度或度为单位的角度
返回：`Number`

### (static) sizeAfterTransform(width, height, options) → {Object.x|Object.y}
    在给定宽度和高度的情况下，返回边界框的大小，该边界框可以包含具有选项中描述的应用变换的宽度/高度的框。
    用于计算控件对象周围的框。
参数|类型|性质|描述
|---|---|---|---
width|Number|必填|
height|Number|必填|
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
scaleX|Number|必填|水平比例
scaleY|Number|必填|垂直比例
skewX|Number|必填|水平倾斜
skewY|Number|必填|锤子倾斜
返回：`Object.x`,容纳宽度 `Object.y`,容纳高度

### (static) toArray(arrayLike) → {Array}
    将类似数组的对象（例如，arguments或NodeList）转换为数组
参数|类型|性质|描述
|---|---|---|---
arrayLike|Object|必填|水平
返回：`Array`

### (static) toDataURL(canvasEl, format, quality) → {String}
    生成base64数据还是Blob url？,从2.6.0开始，它从canvas实例移至实用程序。
参数|类型|性质|描述
|---|---|---|---
canvasEl|CanvasElement|必填|复制的大小和内容
format|String|必填|'jpeg'或'png'，在某些浏览器中，'webp'也可以
quality|Number|必填|0-1
返回：`String`，数据网址

### (static) toFixed(number, fractionDigits) → {Number}
    Number＃toFixed周围的包装器，与本机方法相反，它返回数字，而不是字符串。
参数|类型|性质|描述
|---|---|---|---
number|Number 、 String	|必填|要操作的号码
fractionDigits|Number|必填|要“离开（leave）”的小数位数
返回：`Number`

### (static) transformPoint(p, t, ignoreOffsetopt) → {fabric.Point}
    将变换t应用于点p
参数|类型|性质|描述
|---|---|---|---
p|fabric.Point|必填|转变点
t|Array|必填|转变
ignoreOffset|Boolean|选填|指示不应应用偏移量
返回：`fabric.Point`，转换点

### (static) wrapElement(element, wrapper, attributesopt) → {HTMLElement}
    用另一个元素包装元素
参数|类型|性质|描述
|---|---|---|---
element|HTMLElement|必填|要包装的元素
wrapper|HTMLElement 、 String|必填|要包装的元素
attributes|Object|选填|在包装器上设置的属性
返回：`HTMLElement`,包装纸
# fabric

## 子类
- [ActiveSelection](xxx)
- [BaseBrush](xxx)
- [Canvas](xxx)
- [Circle](xxx)
- [CircleBrush](xxx)
- [Color](xxx)
- [Ellipse](xxx)
- [Gradient](xxx)
- [Group](xxx)
- [Image](xxx)
- [Intersection](xxx)
- [IText](xxx)
- [Line](xxx)
- [Object](xxx)
- [Path](xxx)
- [Pattern](xxx)
- [PatternBrush](xxx)
- [PencilBrush](xxx)
- [Point](xxx)
- [Polygon](xxx)
- [Polyline](xxx)
- [Rect](xxx)
- [Shadow](xxx)
- [SprayBrush](xxx)
- [StaticCanvas](xxx)
- [Text](xxx)
- [Textbox](xxx)
- [Triangle](xxx)

## 命名空间
- [Collection](xxx)
- [CommonMethods](xxx)
- [Observable](xxx)
- [util](xxx)


## 成员

### (static) arcToSegmentsCache
    该对象包含弧到beizer转换的结果，如果需要再次转换相同的弧，可以更快地进行检索。
    它是一个内部变量，自版本2.3.4起可以访问

### (static) boundsOfCurveCache
    该对象保留由boundsOfCurve计算结果所必需的联接参数映射。
    如果解析并添加始终相同的路径，它的确会加快计算速度，但是如果大量使用自由绘制，则不会获得任何速度优势，并且会在内存中产生很大的对象。
    该对象以前是一个私有变量，而现在则被附加到库中，以便您可以访问它并最终将其清除。它是一个内部变量,自版本2.3.4起可以访问

### (static) browserShadowBlurConstant :Number
    特定于浏览器的常数，用于调整CanvasRenderingContext2D.shadowBlur值，该值是无单位的，并且在浏览器之间的呈现方式不同。
    截至2017年10月，效果很好的值包括：、Chrome：1.5 、Edge：1.75 、Firefox：0.9 、Safari：0.95
读取类型：`Number(1)`

### (static) cachesBoundsOfCurve
    如果禁用，则不使用boundsOfCurveCache。
    对于大量使用铅笔素描的应用程序，最好禁用它 
读取类型：`Boolean(true)`

### (static) charWidthsCache
    缓存对象，用于在文本呈现中显示字符的宽度。
读取类型：``

### (static) devicePixelRatio
    设备像素比

### (static) disableStyleCopyPaste :Boolean
    如果为“ true”，则在复制/粘贴文本时不保留样式信息，从而使粘贴的文本使用目标样式。默认为“假”。
读取类型：`Boolean(false)`

### (static) DPI
    每英寸像素数的默认值设置为96。可以更改以实现更真实的转换。
读取类型：`Number(96)`

### (static) enableGLFiltering :Boolean
    启用webgl来过滤图片可用过滤后端将被初始化，这将占用内存和时间，
    因为将为gl上下文创建默认的2048x2048画布
读取类型：`Boolean(true)`

### (static) forceGLPutImageData :Boolean
    跳过setupGLContext的性能测试，并强制使用看起来似乎最适合在Chrome +旧硬件上使用的putImageData。
    如果您的用户在过滤后遇到空白图片，则可以尝试强制将其设置为true，这必须在实例化过滤后端之前（在过滤第一张图片之前）进行设置
读取类型：`Boolean(false)`

### (static) isLikelyNode :boolean
    在可能是Node.js的环境中为真
读取类型：`boolean`

### (static) isTouchSupported :boolean
    在支持触摸事件的环境中为真
读取类型：`boolean`

### (static) log
    包装在`console.log`附近（如果有）
读取类型：``

### (static) maxCacheSideLimit :Number
    缓存画布宽度或高度的像素限制。 
    IE将最大值固定为5000 
读取类型：`Number(4096)`,总像素不能超过4096x4096=16777216

### (static) minCacheSideLimit :Number
    缓存画布的最低像素限制，设置为256PX
读取类型：`Number(256)`

### (static) perfLimitSizeTotal :Number
    缓存画布的像素限制。 1Mpx，4Mpx应该可以。    
读取类型：`Number(2097152)`

### (static) SHARED_ATTRIBUTES :array
    从所有SVG元素解析的属性
读取类型：`Array`

### (static) textureSize :Number
    如果启用了webgl并可用，则TextureSize将确定画布后端的大小
读取类型：`Number(2048)`

### (static) warn
    `console.warn`周围的包装器（如果有）


## 方法

### (static) getCSSRules(doc) → {Object}
    返回给定SVG文档的CSS规则
参数|类型|性质|描述
|---|---|---|---
doc|SVGDocument|必填|SVG文档解析
返回：`Object`，本文档的CSS规则

### (static) getGradientDefs(doc) → {Object}
    解析SVG文档，返回在其中找到的所有渐变声明
参数|类型|性质|描述
|---|---|---|---
doc|SVGDocument|必填|SVG文档解析
返回：`Object`，渐变定义；键对应于元素id，值-对应于渐变定义元素

### (static) isWebglSupported(tileSize) → {Boolean}
    指示用户的浏览器是否支持此筛选后端。
参数|类型|性质|描述
|---|---|---|---
tileSize|Number|必填|检查是否支持tileSize
返回：`Boolean`，用户的浏览器是否支持WebGL。

### (static) loadSVGFromString(string, callback, reviveropt, optionsopt)
    提取与SVG文档对应的字符串，并将其解析为一组Fabric对象
参数|类型|性质|描述
|---|---|---|---
string|String|必填|
callback|function|必填|
reviver|function|选填|进一步解析SVG元素的方法，在创建每个结构对象之后调用。
options|Object|选填|包含解析选项的对象
options
参数|类型|性质|描述
|---|---|---|---
crossOrigin|String|选填|crossOrigin crossOrigin设置用于外部资源

### (static) loadSVGFromURL(url, callback, reviveropt, optionsopt)
    获取对应于SVG文档的url，并将其解析为一组Fabric对象。
    请注意，SVG是通过XMLHttpRequest提取的，因此它需要符合SOP（相同来源策略）
参数|类型|性质|描述
|---|---|---|---
string|String|必填|
callback|function|必填|
reviver|function|选填|进一步解析SVG元素的方法，在创建每个结构对象之后调用。
options|Object|选填|包含解析选项的对象
options
参数|类型|性质|描述
|---|---|---|---
crossOrigin|String|选填|crossOrigin crossOrigin设置用于外部资源


### (static) parseAttributes(element, attributes) → {Object}
    返回属性名称/值的对象，给定的元素和属性名称数组；向上递归解析父级“ g”节点。
参数|类型|性质|描述
|---|---|---|---
element|DOMElement|必填|要解析的元素
attributes|Array|必填|要解析的属性数组
返回：`Object`，包含已解析属性的名称/值的对象

### (static) parseElements(elements, callback, optionsopt, reviveropt)
    将svg元素数组转换为相应的fabric。*实例
参数|类型|性质|描述
|---|---|---|---
elements|Array|必填|要解析的元素数组
callback|function|必填|被传递一组矩阵实例（从SVG元素转换而来）
options|Object|选填|选项对象
reviver|function|选填|进一步解析SVG元素的方法，在创建每个结构对象之后调用。

### (static) parseFontDeclaration(value, oStyle)
    解析简短的字体声明，将其属性添加到样式对象中
参数|类型|性质|描述
|---|---|---|---
value|String|必填|字体声明
oStyle|Object|必填|定义

### (static) parsePointsAttribute(points) → {Array}
    解析“点”属性，返回值数组
参数|类型|性质|描述
|---|---|---|---
points|String|必填|点属性字符串
返回：`Array`，点数组

### (static) parseStyleAttribute(element) → {Object}
    解析“样式”属性，使用值重新调整对象
参数|类型|性质|描述
|---|---|---|---
element|SVGElement|必填|要解析的元素
返回：`Object`，具有从元素的style属性解析的值的对象

### (static) parseSVGDocument(doc, callback, reviveropt, parsingOptionsopt)
    解析SVG文档，将其转换为相应的fabric。*实例数组，并将其传递给回调

参数|类型|性质|描述
|---|---|---|---
doc|SVGDocument|必填|SVG文档解析
callback|function|必填|解析完成后回叫；它正在传递一个元素数组（从文档中解析）。
reviver|function|选填|进一步解析SVG元素的方法，在创建每个结构对象之后调用。
parsingOptions|Object|选填|包含解析选项的对象
options
参数|类型|性质|描述
|---|---|---|---
crossOrigin|String|选填|crossOrigin设定

### (static) parseTransformAttribute(attributeValue) → {Array}
    解析“ transform”属性，返回值数组
参数|类型|性质|描述
|---|---|---|---
attributeValue|String|必填|包含属性值的字符串

返回：`Array`，代表变换矩阵的6个元素的数组

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``

### xxxx
    xxxx
返回：``


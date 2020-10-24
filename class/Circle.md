
# fabric.Circle
继承fabric.Object

link：http://fabricjs.com/docs/fabric.Circle.html

## 成员

### ATTRIBUTE_NAMES
    静态方法
    解析SVG元素时要考虑的属性名称列表（由fabric.Circle.fromElement使用）
返回：``

### __corner 
    保持鼠标移动过程中最后一个悬停的角的值。 
    0是无角，或'mt'，'ml'，'mtr'等。它应该是私有的，但是将其用作只读属性没有任何危害。
赋值类型：`number|string|any`

### absolutePositioned
    仅在将对象用作clipPath时才有意义。
    如果为true，clipPath的顶部和左侧将相对于画布，并且不受对象转换的影响。这将使clipPath相对于画布，但仅剪切特定对象。警告这是测试版，此功能可能会更改或重命名。从2.4.0开始

赋值类型：`boolean`

### aCoords
    在画布对象中描述对象的角位置绝对坐标属性为tl，tr，bl，br，并描述四个主角。
    每个属性都是一个带有x，y，Fabric.Point实例的对象。坐标取决于以下属性：宽度，高度，scaleX，scaleY skewX，skewY，角度，strokeWidth，顶部，左侧。
    这些坐标对于了解对象在哪里很有用。它们会使用oCoords更新，但是在缩放或平移更改时不需要更新。坐标使用@method setCoords更新。您可以计算它们而无需使用@method calcACoords（）更新。

### angle 
    物体的旋转角度（度）
赋值类型：`Number`

### backgroundColor 
    对象的背景颜色，使用 css 颜色
赋值类型：`String`

### borderColor
    控制对象边界(当它处于活动状态时)的颜色
赋值类型：`String`

### borderDashArray
    指定对象边框的虚线图案的数组（hasBorder必须为true）
赋值类型：`Array`

### borderOpacityWhenMoving
    当对象处于活动和移动状态时，对象的控制边界不透明
赋值类型：`Number`

### borderScaleFactor
    物体控制边界的比例因子越大，边界越厚，边界越厚，边界基本上是1，因为没有办法改变边界本身。
赋值类型：`Number`

### cacheProperties
    检查高速缓存是否需要刷新时要考虑的属性列表可以通过statefullCache ON（或如果需要的话是惰性模式）或通过单次调用Object.set（key，value）来检查那些属性。
    如果关键点在此列表中，则将该对象标记为脏并在下一次渲染时刷新
赋值类型：`Array`

### centeredRotation
    设置为true时，通过控件旋转时，此对象将使用中心点作为变换的原点。
    向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
赋值类型：`Boolean`

### centeredScaling
    如果为true，则在通过控件缩放时，此对象将使用中心点作为变换的原点。
    向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
赋值类型：`Boolean`

### clipPath 
    一个无需描边就定义其形状的裁剪区域的fabricObject。
    呈现为黑色时，将在呈现对象时使用clipPath对象，并将上下文放置在对象cacheCanvas的中心。
    如果您希望clipPath的0,0与对象中心对齐，请使用clipPath.originX / Y来“居中”
赋值类型：`fabric.Object`

### colorProperties 
    为动画设置颜色时要考虑的属性列表。
赋值类型：`Array`

### controls
    自定义控件界面控件由default_controls.js添加

### cornerColor
    控制对象角落的颜色(当它处于活动状态时)
赋值类型：`String`

### cornerDashArray 
    指定对象控件的破折号模式的数组（hasBorder必须为true）
赋值类型：`Array`

### cornerSize 
    对象控制角的大小（以像素为单位）
赋值类型：`Number`

### cornerStrokeColor
    控制对象角的颜色（当它处于活动状态且透明时，角为false）
赋值类型：`String`

### cornerStyle
    指定控制方式，“矩形”或“圆形”
赋值类型：`String`

### dirty
    当设置为“ true”时，对象的缓存将在下一次渲染调用时重新渲染。从1.7.0开始
赋值类型：`Boolean`

### endAngle
    圆弧形的结束角度，应为度，这是一个疏忽。
    在下一个主要版本中可能会更改为度
赋值类型：`Number`

### evented 
    设置为false时，对象不能成为事件的目标。所有事件都通过它传播。在v1.3.4中引入
赋值类型：`Boolean(true)`

### excludeFromExport
    如果为true，则不会以OBJECT / JSON格式导出对象
赋值类型：`Boolean`

### fill
    对象填充的颜色采用 css 颜色/
赋值类型：`String`

### fillRule
    用于填充对象接受值的填充规则为非零，偶数向后不兼容说明：此属性用于设置globalCompositeOperation直到v1.4.12（改用`fabric.Object＃globalCompositeOperation`）
赋值类型：`String`

### flipX
    如果为 true，则将对象呈现为水平翻转
赋值类型：`Boolean`

### flipY
    如果为 true，则将对象作为翻转垂直呈现
赋值类型：`Boolean`

### globalCompositeOperation
    用于画布globalCompositeOperation的复合规则
赋值类型：`String`

### hasBorders
    设置为false时，不呈现对象的控制边界
赋值类型：`Boolean`

### hasControls 
    设置为false时，不显示对象的控件，并且不能用于操作对象
赋值类型：`Boolean`

### height 
    高度
赋值类型：`Number`

### hoverCursor 
    将鼠标悬停在画布上此对象时使用的默认光标值
赋值类型：`String`

### includeDefaultValues 
    如果为false，则默认对象的值不包含在其序列化中
赋值类型：`Boolean`

### inverted 
    仅在将对象用作clipPath时才有意义。如果为true，则clipPath将使对象从2.4.0版本开始剪辑到clipPath的外部
赋值类型：`Boolean`

### left
    对象的左侧位置。请注意，默认情况下，它是相对于左侧的对象。您可以通过设置originX = {left / center / right}来更改此设置
赋值类型：`Number`

### lineCoords
    在画布元素坐标中描述对象的角位置。包括填充。用于物体检测。使用setCoords和calcCoords进行设置和刷新。

### lockMovementX 
    为“ true”时，对象水平移动被锁定
赋值类型：`Boolean`

### lockMovementY 
    为“ true”时，对象垂直运动被锁定
赋值类型：`Boolean`

### lockRotation 
    当‘ true’时，物体旋转被锁定
赋值类型：`Boolean`

### lockScalingFlip 
    如果为true，则无法通过缩放为负值来翻转对象
赋值类型：`Boolean`

### lockScalingX 
    当为true时，对象水平缩放被锁定
赋值类型：`Boolean`

### lockScalingY 
    当“ true”时，对象垂直缩放被锁定
赋值类型：`Boolean`

### lockSkewingX 
    当“ true”时，对象的水平倾斜被锁定
赋值类型：`Boolean`

### lockSkewingY 
    当“ true”时，对象的垂直倾斜被锁定
赋值类型：`Boolean`

### matrixCache
    对象全变换矩阵的存储

### minScaleLimit 
    对象的最小允许比例值
赋值类型：`Number`

### moveCursor 
    在画布上移动此对象时使用的默认光标值
赋值类型：`String`

### noScaleCache 
    如果为true，则在缩放期间不会更新缓存。
    如果缩放比例过大，图片将变得块状，并在缩放结束时以正确的细节重新绘制。此设置取决于性能和应用程序。自1.7.0起默认为true
赋值类型：`Boolean(true)`

### objectCaching 
    当为true时，对象被缓存在另一个画布上。
    当为false时，除非必要（clipPath）默认为true，否则不缓存对象
赋值类型：`Boolean(true)`

### oCoords
    在画布元素坐标中描述对象的角位置。
    属性取决于控制键和填充主控件。每个属性都是一个带有x，y和角的对象。 “ corner”属性以类似的方式包含角的交互区域的4个点。坐标取决于控件positionHandler，并用于绘制和定位控件

### opacity
    不透明度    
赋值类型：`Number(1)`

### originX
    对象转换的水平原点（“左”，“右”，“中心”之一）请参见http://jsfiddle.net/1ow02gea/244/，有关originX / originY如何影响组中的对象
赋值类型：`String`

### originY
    对象转换的垂直原点（“顶部”，“底部”，“中心”之一），请参见http://jsfiddle.net/1ow02gea/244/，有关originX / originY如何影响组中的对象
赋值类型：`String`

### ownMatrixCache
    对象变换矩阵的存储

### padding
    对象与其控制边框之间的填充(以像素为单位)
赋值类型：`Number`

### paintFirst
    确定是先绘制填充还是笔划（“填充”或“笔划”之一）
赋值类型：`String`

### perPixelTargetFind
    设置为“ true”时，将在画布上以像素为单位“找到”对象，而不是根据边界框
赋值类型：`Boolean`

### radius
    圆的半径
赋值类型：`Number`

### scaleX
    对象缩放因子（水平）
赋值类型：`Number`

### scaleY
    对象缩放因子(垂直)
赋值类型：`Number`

### selectable
    当设置为“ false”时，不能选择一个对象进行修改（使用基于点击的选择或基于组的选择）。但是仍然有很多事情发生。
赋值类型：`Boolean`

### selectionBackgroundColor
    选择对象的背景颜色。处于活动状态时位于对象后面的着色层。
    不能与globalCompositeOperation方法混合使用
赋值类型：`String`

### shadow.Shadow
    表示此形状阴影的阴影对象
赋值类型：`fabric.Shadow`

### skewX
    物体 x 轴上的倾斜角度(以度为单位)
赋值类型：`Number`

### skewY
    物体y轴上的偏斜角（以度为单位）
赋值类型：`Number`

### startAngle
    圆的起始角度，沿顺时针方向偏移，该角度应为度，这是一个疏忽。
    在下一个主要版本中可能会更改为度
赋值类型：`Number`

### statefullCache
    当为true时，检查对象属性的高速缓存无效。
    在某些特定情况下，您可能希望禁用此功能（喷刷，超大笔，组），或者如果您的应用程序不允许您修改要为组禁用的子组的属性。自1.7.0起默认为false
赋值类型：`Boolean(false)`

### stateProperties
    检查对象的状态是否已更改（fabric.Object＃hasStateChanged）以及历史记录（撤消/重做）时要考虑的属性列表
赋值类型：`Array`

### stroke
    定义后，将通过笔触渲染对象，并且此属性指定其颜色采用CSS颜色https://www.w3.org/TR/css-color-3/
赋值类型：`String`

### strokeDashArray
    指定对象笔划的虚线图案的数组（必须定义笔划）
赋值类型：`Array`

### strokeDashOffset
    对象笔触的线偏移
赋值类型：`Number`

### strokeLineCap
    对象笔画的线尾样式（“对接(butt)”，“圆形(round)”，“正方形(square)”之一）
赋值类型：`String(butt)`

### strokeLineJoin
    对象笔触的角样式（“ bevil”，“ round”，“ miter”之一）
赋值类型：`String(miter)`

### strokeMiterLimit
    对象笔划的最大斜接长度（用于strokeLineJoin =“ miter”）
赋值类型：`Number(4)`

### strokeUniform
    如果为“ false”，则笔画宽度将随对象缩放。
    设为true时，笔划将始终与为笔划宽度输入的确切像素大小匹配。默认为假
赋值类型：`Boolean(false)`

### strokeWidth
    用于渲染此对象的笔触宽度
赋值类型：`Number(1)`

### top
    对象的最高位置。请注意，默认情况下，它是相对于对象顶部的。您可以通过设置originY = {top / center / bottom}来更改此设置
赋值类型：`Number`

### touchCornerSize
    检测到触摸交互时对象控制角的大小
赋值类型：`Number`

### transparentCorners
    设置为true时，对象的控制角在内部呈现为透明（即笔触而不是填充）
赋值类型：`Boolean`

### type
    对象的类型
赋值类型：`String(circle)`

### visible
    设置为false时，对象不会在画布上渲染
赋值类型：`Boolean(true)`

### width
    宽度
赋值类型：`Number`

## 方法
### fromElement(element, callbackopt, optionsopt)
    静态方法
    从一个 SVG 元素返回 fabric
参数|类型|性质|描述
|---|---|---|---
element|SVGElement|必填|要解析的元素
callback|function|选填|解析完成后调用的选项回调
options|Object|选填|选项
错误时返回：`Error`

### fromObject(object, callbackopt)
    静态方法
    从对象表示中返回fabric.Circle实例
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|对象创建实例
callback|function|选填|以新实例作为第一个参数调用
返回：`Object`

### _calcRotateMatrix() 
    计算对象的旋转矩阵
返回：`Array`，对象的旋转矩阵

### _calcTranslateMatrix() 
    计算对象变换的转换矩阵
返回：`Array`，物体的旋转矩阵

### _getCoords(absolute) 
    返回相交的正确坐标集，这将返回aCoords或lineCoords。
参数|类型|性质|描述
|---|---|---|---
absolute|Boolean|必填|如果为 true 或 lineCoords，则返回 aCoords
返回：`Object`，{tl, tr, br, bl} points

### _limitCacheSize(dims) |Object|Object}
    限制缓存的大小，这样 x * y 就不会跨越 fabric.perfLimitSizeTotal，
    而且每一方也不会跨越 fabric.cacheSideLimit 这些数字是可配置的，这样你就可以获得尽可能多的细节，从而在性能上获得优势。
参数|类型|性质|描述
|---|---|---|---
dims|Object|必填|
dims
参数|类型|性质|描述
|---|---|---|---
width|Object|必填|画布宽度
height|Object|必填|画布高度
zoomX|Object|必填|在绘制缓存之前取消画布的缩放值
zoomY|Object|必填|缩放缩放值，在绘制缓存之前取消画布的缩放
d
返回：`{width,height,zoomX,zoomY}`

### _removeCacheCanvas()
    从对象中删除cacheCanvas及其尺寸

### _renderControls(ctx, styleOverrideopt)
    呈现对象的控件和边框
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文
styleOverride|Object|选填|属性以覆盖对象样式

### _setupCompositeOperation(ctx)
    为特定对象设置canvas globalCompositeOperation可以使用globalCompositeOperation属性指定特定对象的自定义合成操作
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### _toSVG() 
    返回实例的 svg 表示形式
返回：`Array`

### adjustPosition(to)
    调整位置
参数|类型|性质|描述
|---|---|---|---
to|String|必填|'left', 'center', 'right'

### animate(property, value)
    动画对象的属性
参数|类型|性质|描述
|---|---|---|---
property|String、Object|必填|要设置动画的属性（如果是字符串）或要设置动画的属性（如果是对象）
value|Number、Object|必填|将属性设置为动画的值（如果首先给出了字符串）或options对象
返回：`fabric.Object`

### bringForward(intersectingopt)
    在绘制的对象堆栈中向上移动对象
参数|类型|性质|描述
|---|---|---|---
intersecting|Boolean|选填|如果为true，则在下一个相交的对象之前发送对象
返回：`fabric.Object`

### bringToFront()
    将对象移动到绘制对象堆栈的顶部
返回：`fabric.Object`

### calcCoords() 
    计算并返回对象的.coords。未使用的库，仅用于最终开发人员。
    Deprecated
返回：`Object`，with tl, tr, br, bl 

### calcOwnMatrix() 
    根据对象的属性计算表示当前变换的变换矩阵，该矩阵不包括组变换
返回：`Array`对象的变换矩阵

### calcTransformMatrix(skipGroupopt) 
    从对象的属性计算表示当前变换的变换矩阵。
参数|类型|性质|描述
|---|---|---|---
skipGroup|Boolean|选填|返回对象的变换矩阵，不计入父变换在某些情况下，这对于避免假旋转很有用。
返回：`Array`对象的变换矩阵

### center()
    在最后添加了画布的画布上将对象垂直和水平居中居中您可能需要在居中后在对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### centerH()
    在最后添加对象的画布上水平居中放置对象。居中后，您可能需要在一个对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### centerV()
    将对象垂直放置在最后添加对象的画布上。居中后，您可能需要在一个对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### clone(callback, propertiesToIncludeopt)
    使用回调方法克隆实例将适用于每个对象。
参数|类型|性质|描述
|---|---|---|---
callback|function|必填|回调是以一个克隆作为第一个参数调用的
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
在回调中调用返回

### cloneAsImage(callback, optionsopt)
    创建fabric的实例。对象外的图像可以同时使用toDataUrl或toCanvasElement。
参数|类型|性质|描述
|---|---|---|---
callback|function|必填|以实例作为第一个参数调用
options|Object|选填|用于克隆作为图像，传递给toDataURL

options
参数|类型|性质|描述
|---|---|---|---
format|	String('png')|选填|输出图像的格式。“ jpeg”或“ png”
quality|	Number(1)|选填|质量等级(0. . 1)。仅用于 jpeg。
multiplier|	Number(1)|选填|按比例放大的倍数
left|	Number|选填|左偏裁剪
top|	Number|选填|上偏裁剪
width|	Number|选填|裁剪宽度
height|	Number|选填|裁剪高度
enableRetinaScaling|	Boolean|选填|为克隆图像启用视网膜缩放
withoutTransform|	Boolean|选填|移除当前对象变换(无比例、无角度、无倒装、无歪斜)。
withoutShadow|	Boolean|选填|移除当前对象的阴影

返回：`fabric.Object`

### complexity() 
    返回实例的复杂性
返回：`Number`，此实例的复杂度（除非是子类，否则为1）

### containsPoint(point, linesopt, absoluteopt, calculateopt) 
    检查点是否在对象内
参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|要检查的点
lines|Object|选填|对象从@method _ getImageLines 返回
absolute|Boolean|选填| 使用不带viewportTransform的坐标
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords
返回：`Boolean`，如果点在对象内，则为true

### drawBorders(ctx, styleOverride)
    绘制对象边界框的边界。需要公共属性：宽度，高度需要公共选项：padding，borderColor
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|可以利用的上下文
styleOverride|Object|必填|对象以覆盖对象样式
返回：`fabric.Object`

### drawBordersInGroup(ctx, options, styleOverride)
    当对象在组中时，绘制对象的边界的边界。需要公共属性：宽度，高度需要公共选项：padding，borderColor
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|可以利用的上下文
options|object|必填|代表当前对象参数的对象
styleOverride|Object|必填|对象以覆盖对象样式
返回：`fabric.Object`

### drawCacheOnCanvas(ctx)
    在目标上下文上绘制对象的缓存副本
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### drawClipPathOnCache(ctx)
    对对象clipPath执行绘图操作
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### drawControls(ctx, styleOverride)
    绘制对象边界框的角。需要公共属性：宽度，高度需要公共选项：cornerSize，padding
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|可以利用的上下文
styleOverride|Object|必填|对象以覆盖对象样式
返回：`fabric.Object`

### drawObject(ctx)
    在指定的上下文中对对象执行绘图操作
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### drawSelectionBackground(ctx)
    在对象的选择边界内，在对象后面绘制一个彩色层。
    需要公共选项：padding，selectionBackgroundColor转换上下文时调用此函数，当对象位于staticCanvas上时将跳过检查
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文
返回：`fabric.Object`

### forEachControl(fn)
    为每个控件调用一个函数。该函数通过控件被调用，该对象正在调用迭代器和控件的键
参数|类型|性质|描述
|---|---|---|---
fn|function|必填|函数在控件上迭代

### fxStraighten(callbacks)
    与fabric.Object.prototype.straighten相同，但带有动画
参数|类型|性质|描述
|---|---|---|---
callbacks|Object|必填|具有回调函数的对象
callbacks
参数|类型|性质|描述
|---|---|---|---
onComplete|function|选填|完成时调用
onChange|function|选填|在动画的每个步骤中调用
返回：`fabric.Object`

### getBoundingRect(absoluteopt, calculateopt) 
    返回框要与画布的轴对齐的对象边界矩形（左，上，宽，高）的坐标。
参数|类型|性质|描述
|---|---|---|---
absolute|Boolean|选填|使用不带viewportTransform的坐标
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords / .aCoords
返回：`Object`，具有左、顶、宽、高属性的对象

### getCenterPoint()
    返回对象的真实中心坐标
返回：`fabric.Point`

### getCoords() 
    返回相交的正确坐标集，这将返回aCoords或lineCoords。坐标以数组形式返回。
返回：`Array`,[tl, tr, br, bl] of points

### getLocalPointer(e, pointeropt) 
    返回相对于对象的指针坐标
参数|类型|性质|描述
|---|---|---|---
e|Event|必填|要操作的事件
pointer|Object|选填|要操作的指针（而不是事件）
返回：`Object`,指针的坐标（x，y）

### getObjectOpacity() 
    返回对象不透明度计数和组属性
返回：`Number`

### getObjectScaling() 
    返回对象缩放因子计数和组缩放
返回：`Object`,具有scaleX和scaleY属性的对象

### getPointByOrigin(originX, originY)
    返回对象的坐标，就好像它具有不同的原点
参数|类型|性质|描述
|---|---|---|---
originX|String|必填|横向起点: 'left', 'center' or 'right'
originY|String|必填|垂直起点: 'top', 'center' or 'bottom'
返回：`fabric.Point`

### getRadiusX() 
    返回对象的水平半径（根据对象的缩放比例)
返回：`Number`

### getRadiusY() 
    返回对象的垂直半径（根据对象的缩放比例）
返回：`Number`

### getScaledHeight() 
    返回对象边界框的高度，该对象的边界框计算了2.0之前的转换，并将其命名为getHeight（）的转换
返回：`Number`,高度值

### getScaledWidth() 
    返回对象边界框的宽度，该宽度计数2.0之前的名为getWidth（）的转换
返回：`Number`，宽度值

### getSvgCommons() 
    返回svg输出的id属性
返回：`String`

### getSvgFilter() 
    返回svg阴影的过滤器
返回：`String`

### getSvgSpanStyles(style, useWhiteSpace) 
    返回svg-export的样式字符串
参数|类型|性质|描述
|---|---|---|---
style|Object|必填|从中检索样式属性的对象
useWhiteSpace|Object|必填|在样式中包含附加属性的布尔值
返回：`String`

### getSvgStyles(skipShadow) 
    返回svg-export的样式字符串
 参数|类型|性质|描述
|---|---|---|---
skipShadow|Boolean|必填|跳过阴影滤镜输出的布尔值
返回：`String`

### getSvgTextDecoration(style) 
    返回svg-export的text-decoration属性
 参数|类型|性质|描述
|---|---|---|---
style|Object|必填|从中检索样式属性的对象
返回：`String`

### getSvgTransform(use) 
    返回svg-export的转换字符串
 参数|类型|性质|描述
|---|---|---|---
skipShadow|Boolean|必填|完整转换或单个对象之一
返回：`String`

### getTotalObjectScaling() 
    返回对象比例因子，还计算组比例，缩放和视网膜
返回：`Object`，具有scaleX和scaleY属性的对象

### getViewportTransform() 
    如果可能，从Object的画布检索viewportTransform
返回：`Array`

### hasFill()
    如果对象将绘制填充，则返回true。
    不考虑文本样式。这只是渲染时使用的快捷方式。我们希望它是一种近似且快速的方法。
    为了避免额外的缓存而写的，它必须在填充发生时返回true，可以猜测何时不会以100％的机会发生，如果它错过了某些填充不可见的用例，则无所谓。
返回：`Boolean`

### hasStateChanged(propertySetopt) 
    如果对象状态（其状态属性之一）已更改，则返回true
 参数|类型|性质|描述
|---|---|---|---
propertySet|String|必填|我们要保存的属性集的可选名称
返回：`Boolean`，如果自从调用fabric.Object＃saveState以来实例的状态已更改，则为true

### hasStroke()
    如果对象将绘制笔触，则返回true。
    不考虑文本样式。这只是渲染时使用的快捷方式。
    我们希望它是一种近似且快速的方法。为避免额外的缓存而编写的方法，它必须在发生笔划时返回true，可以以100％的机会猜测何时不会发生，如果它错过了笔划不可见的某些用例，则无所谓。
返回：`Boolean`

### initialize(optionsopt)
    初始化Constructor
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象

### intersectsWithObject(other, absoluteopt, calculateopt) 
    检查对象是否与其他对象相交
 参数|类型|性质|描述
|---|---|---|---
other|Object|必填|测试对象
absolute|Boolean|选填|使用坐标而不使用 viewportTransform
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords
返回：`Boolean`，如果对象与另一个对象相交，则为 true

### intersectsWithRect(pointTL, pointBR, absoluteopt, calculateopt) 
    检查对象是否与2点形成的区域相交
 参数|类型|性质|描述
|---|---|---|---
pointTL|Object|必填|左上角区域
pointBR|Object|必填|右下角区域
absolute|Boolean|选填|使用坐标而不使用 viewportTransform
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords
返回：`Boolean`，如果对象与2点形成的区域相交，则返回true

### isCacheDirty(skipCanvas)
    检查缓存是否脏
 参数|类型|性质|描述
|---|---|---|---
skipCanvas|Boolean|必填|跳过画布检查，因为此对象已绘制在父画布上。

### isContainedWithinObject(other, absoluteopt, calculateopt) 
    检查对象是否完全包含在另一个对象的区域内
 参数|类型|性质|描述
|---|---|---|---
other|Object|必填|需要检查的对象
absolute|Boolean|选填|使用坐标而不使用 viewportTransform
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords
返回：`Boolean`，如果对象完全包含在另一个对象的区域内，则为 true

### isContainedWithinRect(pointTL, pointBR, absoluteopt, calculateopt) 
    检查对象是否完全包含在由2个点组成的区域内
 参数|类型|性质|描述
|---|---|---|---
pointTL|Object|必填|左上角区域
pointBR|Object|必填|右下角区域
absolute|Boolean|选填|使用坐标而不使用 viewportTransform
calculate|Boolean|选填|使用当前位置的坐标而不是.oCoords
返回：`Boolean`，如果对象完全包含在由2个点组成的区域内，则为true

### isControlVisible(controlKey) 
    如果指定的控件可见，则返回 true，否则返回 false。
 参数|类型|性质|描述
|---|---|---|---
controlKey|String|必填|控制键。可能的值为“ tl”，“ tr”，“ br”，“ bl”，“ ml”，“ mt”，“ mr”，“ mb”，“ mtr”。
返回：`Boolean`，如果指定的控件可见，则为 true，否则为 false

### isOnScreen(calculateopt) 
    检查对象是否包含在具有当前视口的画布中转换完成检查后会在屏幕上出现的第一点停止
 参数|类型|性质|描述
|---|---|---|---
calculate|Boolean|选填|使用当前位置的坐标代替. aCoords
返回：`Boolean`，如果对象完全或部分包含在画布中，则为true

### isPartiallyOnScreen(calculateopt) 
    检查对象是否部分包含在当前 viewportTransform 的画布中
 参数|类型|性质|描述
|---|---|---|---
calculate|Boolean|选填|使用当前位置的坐标代替. aCoords
返回：`Boolean`，如果对象部分包含在 canvas 中，则为 true

### isType(type) 
    如果指定的类型与实例的类型相同，则返回 true
 参数|类型|性质|描述
|---|---|---|---
type|String|必填|要检查的类型
返回：`Boolean`

### moveTo(index) 
    将对象移动到绘制对象堆栈中的指定级别
 参数|类型|性质|描述
|---|---|---|---
index|Number|必填|对象的新位置
返回：`fabric.Object`

### needsItsOwnCache()
    设置为true时，强制对象具有自己的缓存，即使它在组中，当对象在缓存上以特定方式运行并且始终需要自己的隔离画布才能正确呈现时，也可能需要该对象。创建自1.7.12起被覆盖
返回：`Boolean`

### onDeselect(optionsopt)
    每次_discardActiveObject或_setActiveObject尝试取消选择此对象时，都会调用此回调函数。如果函数返回true，则该过程被取消
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|从上面的函数发送选项
options
 参数|类型|性质|描述
|---|---|---|---
e|Event|选填|从上面的函数发送选项

### onSelect(optionsopt)
    每次_discardActiveObject或_setActiveObject尝试选择此对象时，都会调用此回调函数。如果函数返回true，则该过程被取消
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|从上面的函数发送选项
options
 参数|类型|性质|描述
|---|---|---|---
e|Event|选填|从上面的函数发送选项

### render(ctx)
    在指定的上下文中渲染对象
 参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### rotate(angle) 
    设置实例的中心旋转“角度”
 参数|类型|性质|描述
|---|---|---|---
angle|Number|必填|角值(以度为单位)
返回：`fabric.Object`

### saveState(optionsopt) 
    保存对象的状态
 参数|类型|性质|描述
|---|---|---|---
options|Object|必填|保存状态时要包含带有附加“ stateProperties”数组的对象
返回：`fabric.Object`

### scale(value) 
    缩放对象（相等于x和y）
 参数|类型|性质|描述
|---|---|---|---
value|Number|必填|比例因子
返回：`fabric.Object`

### scaleToHeight(value, absolute) 
    相对于边界框将对象缩放到给定的高度（相等地按x / y缩放
 参数|类型|性质|描述
|---|---|---|---
value|Number|必填|新的高度
absolute|Boolean|必填|忽略视口
返回：`fabric.Object`

### scaleToWidth(value, absolute) 
    相对于边界框将对象缩放到给定的宽度（相等地按x / y缩放）
 参数|类型|性质|描述
|---|---|---|---
value|Number|必填|新的高度
absolute|Boolean|必填|忽略视口
返回：`fabric.Object`

### sendBackwards(intersectingopt) 
    将对象向下移动到绘制的对象堆栈中
 参数|类型|性质|描述
|---|---|---|---
intersecting|Boolean|选填|如果为true，则在下一个较低的相交对象之后发送对象
返回：`fabric.Object`

### sendToBack() 
    将对象移动到绘制对象堆栈的底部
返回：`fabric.Object`

### setControlsVisibility(optionsopt) 
    设置对象控件的可见性状态。
返回：`fabric.Object`
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|对象选项

options
 参数|类型|性质|描述
|---|---|---|---
bl|Boolean|选填|true启用左下角（bottom-left ）控件，false禁用它
br|Boolean|选填|true启用右下角（bottom-right ）控件，false禁用它
mb|Boolean|选填|true启用中间底部（middle-bottom ）控件，false禁用它
ml|Boolean|选填|true启用中间左侧（middle-left ）控件，false禁用它
mr|Boolean|选填|true启用中间右侧（middle-right）控件，false禁用它
mt|Boolean|选填|true启用中间顶部（middle-top ）控件，false禁用它
tl|Boolean|选填|true启用左上角（ top-left）控件，false禁用它
tr|Boolean|选填|true启用右上角（ top-right ）控件，false禁用它
mtr|Boolean|选填|true启用中间顶部旋转（middle-top-rotate）控件，false禁用它

### setControlVisible(controlKey, visible) 
    设置指定控件的可见性。
 参数|类型|性质|描述
|---|---|---|---
controlKey|String|必填|控件的键。可能的值是‘ tl’、‘ tr’、‘ br’、‘ bl’、‘ ml’、‘ mt’、‘先生’、‘ mb’、‘ mtr’。
visible|Boolean|必填|若要将指定的控件设置为可见，则为 true，否则为 false
返回：`fabric.Object`

### setCoords(skipCornersopt) 
    根据当前角度，宽度和高度设置角位置坐标。 
    oCoords用于查找拐角aCoords用于在画布行上快速查找对象Coords用于在指针事件期间快速查找对象。请参阅通话时设定座标
 参数|类型|性质|描述
|---|---|---|---
skipCorners|Boolean|选填|跳过oCoords的计算
返回：`fabric.Object`

### setOnGroup()
    每当对象的父组的未委派属性发生更改时，该回调函数就会由该对象的父组调用。
    将键和值作为参数传递给它。不添加此函数的签名可避免Travis关于未使用变量的生成错误。

### setOptions(optionsopt)
    从选项设置对象的属性
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象

### setPositionByOrigin(pos, originX, originY) 
    根据对象的原点设置对象的位置
 参数|类型|性质|描述
|---|---|---|---
pos|fabric.Point|选填|物体的新位置
originX|String|选填|横向起点：'left', 'center' or 'right'
originY|String|选填|垂直起点：'top', 'center' or 'bottom'
返回：`void`

### setRadius() 
    设置对象的半径（并相应地更新宽度）
返回：`fabric.Circle`

### setupState(optionsopt) 
    对象的设置状态
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|保存状态时要包含带有附加“ stateProperties”数组的对象
返回：`fabric.Object`

### shouldCache() 
    确定对象是否应该缓存。
    创建自己的缓存级别objectCaching是一个全局标志，可以满足所有需求。当对象绘制方法需要缓存步骤时，应使用ItsOwnCache。没有一个结构类要求它。
    通常，您不缓存组中的对象，因为缓存了外部的组。读取为：缓存（如果需要），或者是否已启用该功能，但我们尚未缓存。
返回：`Boolean`

### straighten() 
    拉直物体（根据当前角度将其从当前角度旋转到0、90、180、270等之一）
返回：`fabric.Object`

### toCanvasElement(options) 
    将对象转换为HTMLCanvas元素
 参数|类型|性质|描述
|---|---|---|---
options|Object|必填|选项对象

options
 参数|类型|性质|描述
|---|---|---|---
multiplier|Number(1)|选填|按比例放大的倍数
left|Number|选填|裁剪左偏移
top|Number|选填|裁剪上偏移
width|Number|选填|裁剪宽度
height|Number|选填|裁剪高度
enableRetinaScaling|Boolean|选填|为克隆图像启用视网膜缩放
withoutTransform|Boolean|选填|删除当前对象转换(无缩放、无角度、无倒装、无倾斜)。
withoutShadow|Boolean|选填|删除当前对象阴影。
返回：`HTMLCanvasElement`，dom元素

### toClipPathSVG(reviveropt) 
    返回实例的svg clipPath表示形式
 参数|类型|性质|描述
|---|---|---|---
reviver|function|选填|进一步解析svg表示的方法。
返回：`String`，实例的svg表示

### toDatalessObject(propertiesToIncludeopt) 
    返回实例的（无数据）对象表示
 参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的任何属性
返回：`Object`，实例的对象表示形式

### toDataURL(options) 
    将对象转换为类似于 url 的数据字符串
 参数|类型|性质|描述
|---|---|---|---
options|Object|必填|选项对象

options
 参数|类型|性质|描述
|---|---|---|---
format|String('png')|选填|输出图像的格式。“ jpeg”或“ png”
quality|Number(1)|选填|质量等级（0..1）。仅用于jpeg
multiplier|Number(1)|选填|按比例放大的倍数
left|Number|选填|裁剪左偏移
top|Number|选填|裁剪上偏移
width|Number|选填|裁剪宽度
height|Number|选填|裁剪高度
enableRetinaScaling|Boolean|选填|为克隆图像启用视网膜缩放
withoutTransform|Boolean|选填|移除当前对象变换(无比例、无角度、无倒装、无歪斜)。
withoutShadow|Boolean|选填|移除当前对象的阴影

返回：`String`，返回数据: URL，其中包含对象的 options.format 指定格式的表示形式

### toJSON(propertiesToIncludeopt) 
    返回实例的JSON表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`Object`

### toLocalPoint(point, originX, originY) 
    返回本地坐标点
参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|相对于全局坐标系的点
originX|String|必填|横向起点: 'left', 'center' or 'right'
originY|String|必填|垂直起点: 'top', 'center' or 'bottom'
返回：`fabric.Point`

### toObject(propertiesToIncludeopt) 
    返回画布的对象表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`Object`

### toString() 
    返回实例的字符串表示形式
返回：`String`

### toSVG(reviveropt) 
    返回画布的SVG表示形式
参数|类型|性质|描述
|---|---|---|---
reviver|function|选填|SVG表示的进一步解析方法
返回：`String`，实例的 svg 表示

### transform(ctx)
    渲染对象时变换上下文
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文

### translateToCenterPoint(point, originX, originY) 
    将坐标从原点转换为中心坐标（基于对象的尺寸）
 参数|类型|性质|描述
|---|---|---|---
pos|fabric.Point|选填|对应于originX和originY参数的点
originX|String|选填|横向起点：'left', 'center' or 'right'
originY|String|选填|垂直起点：'top', 'center' or 'bottom'
返回：`fabric.Point`

### translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY) 
    将坐标从一组原点平移到另一个原点（基于对象的尺寸）
 参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|对应于originX和originY参数的点
fromOriginX|String|选填|横向起点：'left', 'center' or 'right'
fromOriginY|String|选填|垂直起点：'top', 'center' or 'bottom'
toOriginX|String|选填|另一个横向起点：'left', 'center' or 'right'
toOriginY|String|选填|另一个垂直起点：'top', 'center' or 'bottom'
返回：`fabric.Point`

### translateToOriginPoint(center, originX, originY) 
    将坐标从中心坐标转换为原点坐标（基于对象的尺寸）
point 参数|类型|性质|描述
|---|---|---|---
center|fabric.Point|必填|与物体中心相对应的点
originX|String|选填|另一个横向起点：'left', 'center' or 'right'
originY|String|选填|另一个垂直起点：'top', 'center' or 'bottom'
返回：`fabric.Point`

### viewportCenter() 
    将对象在最后添加画布的当前视口上居中。
    居中后，您可能需要在对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### viewportCenterH() 
    在最后添加画布的当前视口上将对象水平居中。居中后，您可能需要在对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### viewportCenterV() 
    将对象垂直放置在最后添加画布的当前视口上。居中后，您可能需要在对象上调用`setCoords`，以更新控件区域。
返回：`fabric.Object`

### willDrawShadow() 
    检查此对象或子对象是否将投射Group.shouldCache使用的阴影以知道子对象是否有递归阴影 
返回：`Boolean`


### 

返回：``



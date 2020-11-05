

# fabric.StaticCanvas
静态画布，没有交互，不能修改？

link :http://fabricjs.com/docs/fabric.StaticCanvas.html
```javascript
(function() {
  var canvas = this.__canvas = new fabric.StaticCanvas('c');
  canvas.add(
    new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
    new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
    new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'blue' })
  );
  fabric.Image.fromURL('../lib/pug.jpg', function(img) {
    canvas.add(img.set({ left: 400, top: 350, angle: 30 }).scale(0.25));
  });
  function animate() {
    canvas.item(0).animate('top', canvas.item(0).get('top') === 500 ? '100' : '500', {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: animate
    });
  }
  animate();
})();
```
## Fires
- before:render
- after:render
- canvas:cleared
- object:added
- object:removed

## 成员

### (static) EMPTY_JSON :String

类型：`String`  默认值：`{"objects": [], "background": "white"}`


### allowTouchScrolling `Boolean`
    指示在使用触摸屏并在画布上拖动时是否可以滚动浏览器
类型：`Boolean`
<!-- 
### altActionKey `:String('shiftKey')`
    alt动作键 
    指示对角点值启用替换操作的键: 
    'altKey'、'shiftKey'、'ctrlKey'
    如果禁用null或none或任何其他不是修饰符关键特性的字符串特性

### altSelectionKey `null|String`
    alt选择键
    指示在目标与活动对象值（'altKey'，'shiftKey'，'ctrlKey'）重叠的情况下，哪个键启用替代选择。出于对事物应如何工作的普遍期望而产生的一系列原因，此功能仅在true时才起作用。如果`null`或'none'或其他不是修饰键功能的字符串被禁用。 -->

### backgroundColor :String|fabric.Pattern
    画布实例的背景色
    可通过setBackgroundColor设置

### backgroundImage :fabric.Image
    画布实例的背景图像。
    因为2.4.0图像缓存是活动的，所以当将图像作为背景时，请在画布属性中添加对它所在画布的引用。否则图像无法检测缩放值。作为替代方案，您可以禁用图像对象缓存

### backgroundVpt :Boolean(true)

    如果设置为假背景图像，则不受 viewport 变换的影响

### centeredKey :String(altKey)
    中心键
    指示哪个键启用居中的Transform值：“ altKey”，“ shiftKey”，“ ctrlKey”。如果'null'或'none'或不是修饰键功能的任何其他字符串被禁用，则禁用功能。

### centeredRotation :Boolean
    中心旋转
    如果为true，则对象将中心点用作旋转变换的原点。向后不兼容说明：此属性替代“ centerTransform”（布尔值）。

### centeredScaling :Boolean
    居中缩放比例
    如果为true，则对象将中心点用作比例转换的原点。向后不兼容说明：此属性替代“ centerTransform”（布尔值）。

### clipPath :fabric.Object
    剪辑路径
    一个无需描边就定义其形状的裁剪区域的fabricObject。填充为黑色时，在渲染画布时将使用clipPath对象，并且上下文位于画布的左上角。如果您不希望发生这种情况，clipPath将裁剪掉控件，请使用controlsAboveOverlay = true
<!-- 
### containerClass :String(canvas-container)
    容器类
    给画布的包装器（div）元素的默认元素类 -->

### controlsAboveOverlay :Boolean
    覆盖上方控件
    指示对象控件(边框/控件)是否呈现在覆盖图像之上

<!-- ### defaultCursor :String(default)
    用于整个画布的默认光标值 -->

### enableRetinaScaling :Boolean(true)
    启用视网膜缩放
    设置为true时，devicePixelRatio缩放画布，以在视网膜屏幕上更好地渲染

<!-- ### fireMiddleClick :Boolean
    指示画布是否可以触发中间点击事件 -->

<!-- ### fireRightClick :Boolean
    指示画布是否可以触发右键单击事件

### freeDrawingCursor :String(crosshair)
    自由绘制类型期间使用的光标 -->

### FX_DURATION :Number('500')
    Fx * 方法的动画持续时间(毫秒)

<!-- ### hoverCursor :String('move')
    将鼠标悬停在画布上的对象上时使用的默认光标值 -->

### imageSmoothingEnabled :Boolean(true)
    启用图像平滑
    指示此画布是否将使用图像平滑，在浏览器中默认为此设置

### includeDefaultValues :Boolean(true)
    指示如果设置为 false，则 toObject/toDatalessObject 是否应包含默认值，该值优先于对象值。

<!-- ### interactive :Boolean(true)
    指示画布是交互式的。不应更改此属性。 -->

<!-- ### isDrawingMode :Boolean(false)
    启用绘图模式
    如果为true，则画布上的鼠标事件（mousedown / mousemove / mouseup）会导致自由绘制。按下鼠标后，mousemove将创建一个形状，然后将其进行最终确定并在画布上添加一个“ fabric.Path”实例。

### moveCursor :String('move')
    在画布上移动对象时使用的默认光标值

### notAllowedCursor :String('not-allowed')
    用于禁用元素的游标值（具有禁用操作的角） -->

### overlayColor :String|fabric.Pattern
    覆盖颜色
    画布实例的叠加颜色。应该通过fabric.StaticCanvas＃setOverlayColor进行设置

### overlayImage :fabric.Image
    画布实例的叠加图像。由于2.4.0图像缓存处于活动状态，因此当将图像作为叠加层放置时，请向canvas属性添加对其所在画布的引用。否则，图像将无法检测到变焦。或者，您可以禁用图像对象缓存

### overlayVpt :Boolean(true)
    如果设置为false，则图像不受视口变换的影响

<!-- ### perPixelTargetFind :Boolean
    设置为true时，对象检测基于每个像素而不是每个边界框进行 -->

<!-- ### preserveObjectStacking :Boolean
    指示选定对象后是否应将其保留在当前堆栈位置。将虚假对象置于顶部并呈现为选择组的一部分时 -->

### renderOnAddRemove :Boolean(true)
    指示
    fabric.Collection.add、
    fabric.Collection.insertAt、
    fabric.Collection.remove、
    fabric.StaticCanvas.moveTo、
    fabric.StaticCanvas.clear
    等是否也应该重新渲染画布。一次向画布添加/从画布移除大量对象时，禁用此选项将不会提高性能，因为渲染已被排队并每帧执行一次。无论如何，建议禁用，并且手动管理应用程序的渲染不是一件大事（canvas.requestRenderAll（））保留默认值为true不会破坏文档和旧版应用程序，这很麻烦。

<!-- ### rotationCursor :String('crosshair')
    用于旋转点的光标值 -->
<!-- 
### selection :Boolean(true)
    指示是否应启用组选择

### selectionBorderColor :String('rgba(255, 255, 255, 0.3)')
    选区边框的颜色（通常比选区本身的颜色稍深）

### selectionColor :String('rgba(100, 100, 255, 0.3)')
    选择颜色

### selectionDashArray :Array
    默认破折号阵列模式如果不为空，则选择边框为虚线

### selectionFullyContained :Boolean
    仅选择完全包含在拖动的选择矩形中的形状。

### selectionKey :String('shiftKey')|Array
    指示哪个键或多个键启用多次单击选择将值作为字符串或字符串值数组传递：'altKey'，'shiftKey'，'ctrlKey'。如果为“ null”，为空或包含非修饰键功能的任何其他字符串，则将其禁用。

### selectionLineWidth :Number(1)
    对象/组选择中使用的线宽 -->

### skipOffscreen :Boolean(true)
    基于vptCoords和object.aCoords，跳过当前视口中不包含的对象的渲染。在拥挤的画布和使用缩放/平移的应用程序中可能会大有帮助。如果对象边界框的一角在画布上，则将呈现对象。

<!-- ### skipTargetFind :Boolean
    如果为true，则跳过目标检测。目标检测将始终返回未定义的状态。点击选择将不再起作用，事件将触发而没有目标。如果在将其设置为true之前选择了某项，则将在第一次单击时将其取消选择。区域选择仍然有效。还要检查`selection`属性。如果同时停用这两个功能，则应查看staticCanvas。 -->
<!-- 
### snapAngle :Number
    指示对象旋转时将锁定的角度。

### snapThreshold :null|Number
    指示旋转将锁定到snapAngle的距snapAngle的距离。当为null时，snapThreshold将默认为snapAngle。 -->

### stateful :Boolean
    指示是否应保存对象的状态
<!-- 
### stopContextMenu :Boolean
    指示右键单击画布是否可以输出上下文菜单 -->

### svgViewportTransformation :Boolean(true)
    设置为true时，getSvgTransform（）将把StaticCanvas.viewportTransform应用于SVG转换。如果为true，则缩放的画布将产生缩放的SVG输出。
<!-- 
### targetFindTolerance :Number
    在目标检测期间目标像素周围容忍(考虑活动)的像素数

### targets :Array.<fabric.Object>
    跟踪鼠标事件的子目标

### uniformScaling :Boolean(true)
    当为真时，对象可以转换的一方(不成比例)时，拖动的角落，通常不会这样做。

### uniScaleKey :String('shiftKey')
    指示哪个键切换均匀缩放。值：“ altKey”，“ shiftKey”，“ ctrlKey”。如果`null`或'none'或其他不是修饰键功能的字符串被禁用。完全错误的命名。如果Canvas.uniformScaling为true，这听起来像“均匀缩放”，按此键会将其设置为false，反之亦然。 -->

### viewportTransform :Array
    聚焦视口的变换（采用Canvas变换的格式）

### vptCoords
    描述画布元素在设计属性tl，tr，bl，br上的扩展。如果画布未缩放/平移，则这些点是画布的四个角（如果画布是viewportTransformed），则这些点指示画布元素在普通未变换坐标中的扩展。使用@method calcViewportBoundaries更新坐标。


---
---
---

## 方法

### (static) supports(methodName) → {Boolean|null}
    提供一种检查某些canvas方法（HTMLCanvasElement本身或呈现上下文）是否支持的方法
 参数|类型|性质|描述
|---|---|---|---
methodName|String|必填|检查支持的方法；可能是“ setLineDash”之一
返回：`Boolean | null`,如果支持方法（或至少存在方法），则为true；如果不能初始化canvas元素或上下文，则为null。
<!-- ### __onMouseWheel(e)
定义事件鼠标滚轮时的操作
|类型|描述
|---|---
|Event|事件对象在 mouseup 上触发

### _chooseObjectsToRender()
    
    将对象分成两组，一组用于立即呈现，另一组用于作为 activeGroup 呈现。
返回: `Array`
### _setCursorFromEvent(e, target)
    根据画布悬停的位置设置光标。注意: Opera 中有很多 bug
参数|类型|描述
|---|---|---
e|Event|事件对象
target|Object|如果是，则为鼠标悬停状态 -->

### absolutePan(point)
    平移视口，以便将点放置在画布的左上角
参数|类型|描述
|---|---|---
point|fabric.Point|移动到
 返回: `fabric.Canvas`

### add(…object)
    将对象添加到集合、画布或组中，然后呈现画布(如果“ renderOnAddRemove”不是“ false”)。
    如果第组没有改变包围盒。对象应该是 fabric 的实例(或从 fabric 继承)。对象此函数的使用对于组是非常不鼓励的。
    您可以使用 add 方法添加一系列对象，但是您需要为 Group 类或 position/bbox 运行 addWithUpdate 调用将是错误的。
参数|类型|性质|描述
|---|---|---|---
point|fabric.Object|必填可重复|零个或多个Fabric实例
返回: `Self`

### bringForward(object, intersectingopt) 
    将对象或选定对象向上移动到绘制对象的堆栈中。
    可选的相交参数允许将对象移动到第一个相交对象的前面。其中交点是用边界框计算的。
    如果没有找到相交，则堆栈中不会有任何变化。
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|需要移动的对象
intersecting|Boolean|选填|如果为‘ true’ ，则将物体送到下一个上交的物体前面
返回：`fabric.Canvas`

### bringToFront(object)
    将对象或多重选择的对象移动到绘制对象堆栈的顶部
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|需要移动的对象
返回：`fabric.Canvas`

### calcOffset()
    计算画布元素相对于文档的偏移量
    此方法也作为窗口的“resize(调整大小)”事件处理程序附加
返回：`fabric.Canvas`


### calcViewportBoundaries()
    使用当前的viewportTransform计算画布的4个角的位置。
    使用对象绝对坐标（aCoords）有助于确定对象何时在当前渲染视口中
返回：`Object`


### centerObject(object)
    在画布中垂直和水平中心对象
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象以垂直和水平方向居中
返回：`fabric.Canvas`


### centerObjectH(object)
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象以水平方向居中
返回：`fabric.Canvas`


### centerObjectV(object)
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|将对象垂直中心放在画布中
返回：`fabric.Canvas`

### clear()
    清除实例的所有上下文（背景，主要，顶部）
返回：`fabric.Canvas`

### clearContext(ctx) 
    清除画布元素的指定上下文
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|需要清除的背景
返回：`fabric.Canvas`


### clone(callbackopt, propertiesopt)
    克隆画布实例
参数|类型|性质|描述
|---|---|---|---
callback|Object|选填|作为第一个参数接收克隆实例
properties|Array|选填|要包括在克隆画布和子画布中的属性数组
没有返回，用回调接受

### cloneWithoutData(callbackopt) 注意⚠️
    无需克隆现有数据即可克隆 canvas 实例。
    这基本上复制了画布维度、剪辑属性等，但是留下了空的数据(这样您就可以用自己的数据填充它)
参数|类型|性质|描述
|---|---|---|---
callback|Object|必填|接收克隆的实例作为第一个参数
没有返回，用回调接受


### complexity()
    返回数字形式表示的集合复杂性
返回：`Number`

### contains(object)
    如果集合包含对象，则返回 true
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|对象进行检查
返回：`Boolean`

### createSVGFontFacesMarkup(objects)
    创建包含SVG字体的标记
    字体的字体URL必须由开发人员收集，而不是fabricjs从DOM中提取
参数|类型|性质|描述
|---|---|---|---
object|Array|必填|fabric objects组成的数组
返回：`String`

### createSVGRefElementsMarkup()
    创建包含 SVG 引用元素(如模式、渐变等)的标记。
返回：`String`

<!-- ### discardActiveObject(e)
    丢弃当前活动的对象和火灾事件。
    如果构造函数是由于鼠标事件而由Fabric调用的，则该事件将作为参数传递并发送到自定义事件的fire函数。
    当用作方法时，e参数没有任何应用程序。
参数|类型|性质|描述
|---|---|---|---
e|event|| -->

### dispose()
    清除画布元素并放置对象
返回：`fabric.Canvas`

### drawClipPathOnCanvas(ctx)
    在lowerCanvasEl上绘制缓存的clipPath
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要渲染的上下文
没有返回
<!-- 
### drawControls(ctx)
    绘制对象的控件(边框/控件)
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|要呈现控件的上下文
没有返回

### findTarget(e, skipGroup)
    确定我们在skipGroup参数上单击的对象是供内部使用的方法，对于shift + click动作来说是必需的。
    11/09/2018 TODO：如果findTarget可以辨别是完整目标还是角落的外部，这将很酷。
参数|类型|性质|描述
|---|---|---|---
e|Event||鼠标事件
skipGroup|Boolean||为true时，将跳过activeGroup并仅遍历对象
返回：`fabric.Object` -->

### fire(eventName, optionsopt)
    触发带有可选选项对象的事件
参数|类型|性质|描述
|---|---|---|---
eventName|String|必填|事件名称
optionsopt|Boolean|选填|选项对象Options object
返回：`Self`

### forEachObject(callback, context)
    为该组中的每个对象执行给定的功能
参数|类型|性质|描述
|---|---|---|---
callback|function|必填|使用当前对象作为第一个参数调用索引，第二个索引作为第三个参数，所有对象组成的数组作为第三个参数。如果未指定`context`参数，则在全局对象（例如“ window”）的上下文中调用回调
context|Object|必填|上下文（又名thisObject）
返回：`Self`

### fxCenterObjectH(object, callbacksopt)
    中心对象水平与动画。
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|物体居中
callbacks|Object|选填|具有可选“ onComplete”和/或“ onChange”属性的回调对象

参数|类型|性质|描述
|---|---|---|---
onComplete|function|必填|完成时调用
onChange|function|选填|调用动画的每个步骤
返回：`fabric.Canvas`

### fxCenterObjectV(object, callbacksopt) 
    中心对象垂直与动画。
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|物体居中
callbacks|Object|选填|具有可选“ onComplete”和/或“ onChange”属性的回调对象

参数|类型|性质|描述
|---|---|---|---
onComplete|function|必填|完成时调用
onChange|function|选填|调用动画的每个步骤
返回：`fabric.Canvas`

### fxRemove(object, callbacksopt)
    与`fabric.Canvas＃remove`相同，但动画化
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|要删除的
callbacks|Object|选填|具有可选“ onComplete”和/或“ onChange”属性的回调对象

参数|类型|性质|描述
|---|---|---|---
onComplete|function|必填|完成时调用
onChange|function|选填|调用动画的每个步骤
返回：`fabric.Canvas`

### fxStraightenObject(object)
    和 fabric 一样，Canvas.prototype.straightenObject，但是是动画的
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|整理
返回：`fabric.Canvas`

<!-- ### getActiveObject()
    返回当前活动对象
返回：`fabric.Object`

### getActiveObjects()
    返回具有当前选定对象的数组
返回：`fabric.Object` -->

### getCenter() 
    返回画布中心的坐标。返回值是一个具有左上方属性的对象
返回：`Object`

### getContext() 
    返回绘制对象的画布上下文

返回：`CanvasRenderingContext2D`

### getElement() 
    返回与此实例对应的 < canvas > 元素
返回：`HTMLCanvasElement`

### getHeight() 
    返回画布高度(px)
返回：`Number`

### getObjects(typeopt) 
    返回此实例类型参数的子对象数组，该对象在1.3.10中引入，因为自2.3.5开始，此方法始终返回该数组的COPY；
参数|类型|性质|描述
|---|---|---|---
type|String|选填|如果指定，则只返回此类型的对象
返回：`Array`
<!-- 
### getPointer(e, ignoreZoom) 
    返回相对于画布的指针坐标。可以返回带或不带viewportTransform的坐标。 
    ignoreZoom false会返回表示在画布元素上单击的点的坐标。 ignoreZoom true是由viewportTransform处理后返回的坐标（单击的画布上显示的坐标的某种坐标。
    ignoreZoom true =相对于顶部的HTMLElement坐标，左为ignoreZoom false，默认=织物空间坐标，用于形状位置要在顶部和左侧与形状进行交互，大多数时候您都想使用ignoreZoom true，而ignoreZoom false将使您当时的坐标与object.oCoords系统兼容。
参数|类型|性质|描述
|---|---|---|---
e|Event	||
ignoreZoom|Boolean||
返回：`Object`数值为“ x”和“ y”的对象

### getSelectionContext() 
    返回绘制对象选择的画布的上下文
返回：`CanvasRenderingContext2D`

### getSelectionElement() 
    返回在其上绘制对象选择的<canvas>元素
返回：`HTMLCanvasElement` -->

### getVpCenter() 
    计算画布中与实际视口中心相对应的点。
返回：`fabric.Point`视口中心

### getWidth() 
    返回画布宽度(px)
返回：`Number`

### getZoom() 
    返回画布缩放级别
返回：`Number`

### initialize(el, optionsopt) 
    初始化
参数|类型|性质|描述
|---|---|---|---
el|HTMLElement、String|必填|`<canvas>`元素以初始化实例
options|Object|选填|选项对象 Options object
返回：`Object`

### insertAt(object, index, nonSplicing) 
    在指定的索引处将一个对象插入到集合中，然后渲染画布（如果`renderOnAddRemove`不是`false`），则该对象应该是fabric的一个实例（或继承自该对象）。
    您可以使用insertAt方法添加一堆对象，但随后需要为Group类或position / bbox运行addWithUpdate调用将是错误的。
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|要插入对象
index|Number|必填|要插入对象的索引
nonSplicing|Boolean|必填|如果为true，则不会发生对象的拼接（移动）
返回：`Self`

### isEmpty() 
    如果collection不包含任何对象，则返回true
返回：`Boolean`
<!-- 
### isTargetTransparent(target, x, y) 
    如果对象在某个位置是透明的，则返回 true
参数|类型|性质|描述
|---|---|---|---
target|fabric.Object|必填|要检查的对象
x|Number|必填|左座标
y|Number|必填|上座标
返回：`Boolean` -->

### item(index) 
    返回指定索引处的对象
参数|类型|性质|描述
|---|---|---|---
index|Number||
返回：`Self`


### loadFromJSON(json, callback, reviveropt)
    使用来自指定JSON的数据填充画布。 JSON格式必须符合fabric.Canvas＃toJSON之一。
参数|类型|性质|描述
|---|---|---|---
json|String、Object|必填|JSON 字符串或对象
callback|function|必填|回调，在解析json并初始化对应的对象（例如fabric.Image）时调用
reviver|function|选填|进一步解析JSON元素的方法，在创建每个Fabric对象之后调用。
返回：`fabric.Canvas`
```javascript
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
});
```
### moveTo(object, index) 
    将对象移动到绘制对象堆栈中的指定级别
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|要设置的对象
index|Number|必填|要移动到的位置
返回：`fabric.Canvas`

### relativePan(point) 
    相对平移观点
参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|（位置向量）移动
返回：`fabric.Canvas`

### remove(…object) 
    从集合中移除对象，然后渲染画布（如果`renderOnAddRemove`不是`false`）
参数|类型|性质|描述
|---|---|---|---
object|	fabric.Object|可重复的|零个或多个Fabric实例
返回：`Self`
<!-- 
### removeListeners()
    删除所有事件监听器
没有返回 -->

### renderAll() 
    渲染画布
返回：`fabric.Canvas`

### renderCanvas(ctx, objects) 
    渲染背景，对象，叠加层和控件
参数|类型|性质|描述
|---|---|---|---
ctx|CanvasRenderingContext2D|必填|
objects|Array|必填| 要渲染的对象数组
返回：`fabric.Canvas`

<!-- ### renderTop() 
    仅渲染顶部画布的方法。也用于渲染组选择框。
返回：`fabric.Canvas` -->


### requestRenderAll() 
    将renderAll请求追加到下一个动画帧。
    除非已经进行过，否则在这种情况下将不做任何操作，布尔标志将避免附加更多内容。
返回：`fabric.Canvas`

<!-- 
### restorePointerVpt(pointer) 
    返回不受视口影响的指针坐标
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|具有“ x”和“ y”数字值
返回：`Object` -->

### sendBackwards(object, intersectingopt) 
    将对象或选区向下移动到绘制对象的堆栈中。可选参数，相交允许将对象移至第一个相交对象的后面。其中交点是用边界框计算的。如果没有找到相交，则堆栈中不会有任何变化。
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|具有“ x”和“ y”数字值
intersecting|Boolean|选填|如果为true，则在下一个较低的相交对象之后发送对象
返回：`fabric.Canvas`

### sendToBack(object) 
    将一个或多个选择的对象移动到绘制对象堆栈的底部
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象发送回
返回：`fabric.Canvas`

<!-- ### setActiveObject(object, eopt) 
    将给定对象设置为画布上唯一的活动对象
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象设置为活动对象
e|Event|选填|事件（触发“ object：selected”时传递）
返回：`fabric.Canvas` -->

### setBackgroundColor(backgroundColor, callback) 
    设置此画布的背景颜色
参数|类型|性质|描述
|---|---|---|---
backgroundColor|String、fabric.Pattern|必填|对象设置为活动对象
callback|function|必填|设置背景颜色时要调用的回调
返回：`fabric.Canvas`
```javascript
// 颜色值
canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
// fabric.Pattern
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
// 用作背景的图案。带重复和偏移的颜色
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
```

### setBackgroundImage(image, callback, optionsopt) 
    设置这个画布的背景图像
参数|类型|性质|描述
|---|---|---|---
image|fabric.Image、String|必填|将背景设置为的图像实例或图像的 URL
callback|function|必填|加载图像并设置为背景时调用的回调
options|Object|选填|为背景图像设置的可选选项
返回：`fabric.Canvas`
```javascript
//正常的 backgroundImage，left/top = 0
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
// 具有不同属性的bac​​kgroundImage
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
// 拉伸的背景图片＃1-宽度/高度对应于画布的宽度/高度
fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});
// 拉伸的背景图片＃2-宽度/高度对应于画布的宽度/高度
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
// 从跨域加载backgroundImage
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});

```
### setDimensions(dimensions, optionsopt) 
    设置此画布实例的尺寸（宽度，高度）。
    当options.cssOnly标志处于活动状态时，您还应该提供度量单位（px /％/ em）
返回：`fabric.Canvas`
参数|类型|性质|描述
|---|---|---|---
dimensions|Object|必填|具有 width/height 属性的对象
options|Object|选填|选项对象 Options object

dimensions
参数|类型|性质|描述
|---|---|---|---
width|Number、String|选填|画布元素宽度
height|Number、String|选填|画布元素高度

options
参数|类型|性质|描述
|---|---|---|---
backstoreOnly|Boolean(false)|选填|将给定尺寸仅设置为画布后台存储尺寸
cssOnly|Boolean(false)|选填|将给定尺寸仅设置为CSS尺寸



### setHeight(value, optionsopt) 
    设置此画布实例的高度
参数|类型|性质|描述
|---|---|---|---
value|Number、String|必填|值设置高度为
options|Object|选填|选项对象Options object
options
参数|类型|性质|描述
|---|---|---|---
backstoreOnly|Boolean(false)|选填|将给定尺寸仅设置为画布后台存储尺寸
cssOnly|Boolean(false)|选填|将给定尺寸仅设置为CSS尺寸
返回：`fabric.Canvas`

### setOverlayColor(overlayColor, callback) 
    设置此画布的前景色
参数|类型|性质|描述
|---|---|---|---
overlayColor|String、fabric.Pattern|必填|将前景色设置为的颜色或图案
callback|function|必填|设置前景色时要调用的回调
返回：`fabric.Canvas`
```javascript
canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
```

### setOverlayImage(image, callback, optionsopt) 
    设置此画布的覆盖图像
参数|类型|性质|描述
|---|---|---|---
image|String、fabric.Image|必填|fabric.Image实例或要设置覆盖的图像URL
callback|function|必填|加载图像并将其设置为叠加层时调用的回调
options|Object|选填|为覆盖图像设置的可选选项

返回：`fabric.Canvas`
```javascript
// 正常的 overlayImage，left/top = 0
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
// 具有不同属性的 overlayImage
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
// 拉伸的overlayImage＃1-宽度/高度对应于画布的宽度/高度
fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
// 拉伸的overlayImage＃2-宽度/高度对应于画布的宽度/高度
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
// 从跨域加载的overlayImage
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});

```
### setViewportTransform(vpt) 
    设置此画布实例的视口变换
参数|类型|性质|描述
|---|---|---|---
vpt|Array|必填|以context.transform形式的转换
返回：`fabric.Canvas`

### setWidth(value, optionsopt) 
    设置此画布实例的宽度
参数|类型|性质|描述
|---|---|---|---
value|Number、String|必填|值设置宽度为
options|Object|选填|选项对象Options object
options
参数|类型|性质|描述
|---|---|---|---
backstoreOnly|Boolean(false)|选填|将给定尺寸仅设置为画布后台存储尺寸
cssOnly|Boolean(false)|选填|将给定尺寸仅设置为CSS尺寸
返回：`fabric.Canvas`

### setZoom(value) 
    设置此画布实例的缩放级别
参数|类型|性质|描述
|---|---|---|---
value|Number|必填|设置缩放到小于1
返回：`fabric.Canvas`

### size() 
    返回集合的大小（即：包含其对象的数组的长度）
返回：`Number`

### straightenObject(object) 
    拉直对象，然后重新渲染画布
参数|类型|性质|描述
|---|---|---|---
object|Number|必填|矫直对象
返回：`fabric.Object`

### toCanvasElement(multiplieropt, croppingopt)
    创建一个涂有当前画布内容的新HTMLCanvas元素。
    无需调整实际尺寸或重新粉刷它。将对象所有权转移到新画布上，对其进行绘画，然后将所有内容放回原处。
    这是用于获取dataUrl的中间步骤，但是在不传递dataUrl字符串的情况下创建画布的快速图像副本也很有用。

参数|类型|性质|描述
|---|---|---|---
multiplier|Number|选填|缩放系数
cropping|Object|选填|裁剪信息

cropping Object
参数|类型|性质|描述
|---|---|---|---
left|Number|选填|裁剪左偏移
top|Number|选填|裁剪上偏移
width|Number|选填|裁剪宽度
height|Number|选填|裁剪高度

### toDatalessJSON(propertiesToIncludeopt) 
    还原画布的无数据JSON表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`String`

### toDatalessObject(propertiesToIncludeopt) 
    返回画布的无数据对象表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的任何属性
返回：`Object`

### toDataURL(optionsopt) 
    将canvas元素导出到dataurl图像。请注意，使用倍增器时，裁剪会适当缩放
参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象
options
参数|类型|性质|描述
|---|---|---|---
format|String('png')|选填|输出图像的格式。 “ jpeg”或“ png”
quality|Number(1)|选填|质量等级（0-1）,仅用于jpeg
multiplier|Number(1)|选填|乘以比例，以保持一致
left|Number|选填|裁剪左偏移
top|Number|选填|裁剪顶偏移
width|Number|选填|裁剪宽度
height|Number|选填|裁剪高度
enableRetinaScaling|Boolean|选填|为克隆图像启用视网膜缩放
返回：`String`
该对象包含由options.format指定的格式的对象的表示形式
```javascript
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```
### toJSON(propertiesToIncludeopt) 
    返回画布的JSON表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`String`
```javascript
var json = canvas.toJSON();
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
// 没有默认值的JSON
canvas.includeDefaultValues = false;
var json = canvas.toJSON();
```
### toObject(propertiesToIncludeopt) 
    返回画布的对象表示形式
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`Object`

### toString() 
    返回实例的字符串表示形式
返回：`String`

### toSVG(optionsopt, reviveropt) 
    返回画布的SVG表示形式
参数|类型|性质|描述
|---|---|---|---
options|Object|选填|SVG输出的选项对象1⃣️
reviver|function|选填|进一步解析svg元素的方法，在将每个结构对象转换为svg表示形式之后调用。

️1⃣️SVG输出的选项对象
参数|类型|性质|描述
|---|---|---|---
suppressPreamble|Boolean(false)|选填|如果为true则不包含xml标记
viewBox|Object|选填|SVG视图框对象2⃣️
encoding|String('UTF-8')|选填|SVG输出的编码
width|String|选填|svg的所需宽度，带或不带单位
height|String|选填|svg的所需高度，带或不带单位
viewBox|Object|选填|svg的所需宽度，带或不带单位
2⃣️SVG视图框对象
SVG输出的选项对象
参数|类型|性质|描述
|---|---|---|---
x|Number|选填|视图框的x坐标
y|Number|选填|视图框的y坐标
width|Number|选填|视图框宽度
height|Number|选填|视图框高度
返回：`String`
```javascript
var svg = canvas.toSVG();
// 没有前导码的SVG输出(without < ?xml ../>)
var svg = canvas.toSVG({suppressPreamble: true});
// 带有viewBox属性的SVG输出
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
// SVG输出具有不同的编码（默认值：UTF-8）
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
// 用 reviver 函数修改 SVG 输出
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```
### viewportCenterObject(object) 
    将对象在视口中垂直和水平居中
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象垂直和水平居中
返回：`fabric.Canvas`

### viewportCenterObjectH(object) 
    将对象在视口中水平居中，object.top不变
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象垂直和水平居中
返回：`fabric.Canvas`

### viewportCenterObjectV(object) 
    将对象垂直居中放置在视口中，object.top不变
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|对象垂直和水平居中
返回：`fabric.Canvas`

### zoomToPoint(point, value) 
    设置此画布实例的缩放级别，以点为中心缩放
参数|类型|性质|描述
|---|---|---|---
point|fabric.Point|必填|相对于
value|Number|必填|设置缩放，小于1缩放
返回：`fabric.Canvas`
返回：``

###

返回：``

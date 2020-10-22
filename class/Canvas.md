
# new Canvas()
```javascript
 let canvas = new fabric.Canvas('canvasElementId');
```
## 事件
#### 对象
- [object:modified]() 在转换结束时进行修改，或者在 statefull 为 true 时进行修改
- [object:rotated]() 旋转结束时
- [object:scaled]() 变换后
- [object:moved]() 移动结束时
- [object:skewed]() 倾斜转换后
- [object:rotating]() 旋转时
- [object:scaling]() 缩放时
- [object:moving]() 移动时
- [object:skewing]() 当一个对象被从控制器上倾斜时，对象的倾斜
#### 鼠标
- [mouse:down]() 鼠标按下时
- [mouse:move]() 鼠标按下并移动时
- [mouse:up]() 鼠标松开时
- [mouse:down:before]() 鼠标按下之前
- [mouse:move:before]() 鼠标按下并移动之前
- [mouse:up:before]() 鼠标松开之前
- [mouse:over]() 完毕
- [mouse:out]() 出去
- [mouse:dblclick]() 双击后
#### 拖拽
- [event:dragover]() 事件: 拖车
- [event:dragenter]() 事件: dragenter
- [event:dragleave]() 事件: dragleave
- [event:drop]() 事件: 跳伞
#### 选中
- [before:selection:cleared]() 选择清除之前
- [selection:cleared]() 清除完后
- [selection:updated]() 更新后
- [selection:created]() 创建后
#### 其他
- [before:transform]() 进行转换之前
- [path:created]() 在绘图操作结束并添加路径之后创建
- [after:render]() 在渲染过程结束时，event: 接收回调中的上下文
- [before:render]() 在开始渲染过程时，事件: 接收回调中的上下文


## 成员

### allowTouchScrolling `Boolean`
类型：`Boolean`  默认值：`false`
是否允许触摸滚动
    使用触摸屏并在画布上拖动时是否可以滚动浏览器

### altActionKey `:String('shiftKey')`
    alt动作键 
    指示对角点值启用替换操作的键: 
    'altKey'、'shiftKey'、'ctrlKey'
    如果禁用null或none或任何其他不是修饰符关键特性的字符串特性

### altSelectionKey `null|String`
    alt选择键
    指示在目标与活动对象值（'altKey'，'shiftKey'，'ctrlKey'）重叠的情况下，哪个键启用替代选择。出于对事物应如何工作的普遍期望而产生的一系列原因，此功能仅在true时才起作用。如果`null`或'none'或其他不是修饰键功能的字符串被禁用。

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

### containerClass :String(canvas-container)
    容器类
    给画布的包装器（div）元素的默认元素类

### controlsAboveOverlay :Boolean
    覆盖上方控件
    指示对象控件(边框/控件)是否呈现在覆盖图像之上

### defaultCursor :String(default)
    用于整个画布的默认光标值

### enableRetinaScaling :Boolean(true)
    启用视网膜缩放
    设置为true时，devicePixelRatio缩放画布，以在视网膜屏幕上更好地渲染

### fireMiddleClick :Boolean
    指示画布是否可以触发中间点击事件

### fireRightClick :Boolean
    指示画布是否可以触发右键单击事件

### freeDrawingCursor :String(crosshair)
    自由绘制类型期间使用的光标

### FX_DURATION :Number('500')
    Fx * 方法的动画持续时间(毫秒)

### hoverCursor :String('move')
    将鼠标悬停在画布上的对象上时使用的默认光标值

### imageSmoothingEnabled :Boolean(true)
    启用图像平滑
    指示此画布是否将使用图像平滑，在浏览器中默认为此设置

### includeDefaultValues :Boolean(true)
    指示如果设置为 false，则 toObject/toDatalessObject 是否应包含默认值，该值优先于对象值。

### interactive :Boolean(true)
    指示画布是交互式的。不应更改此属性。

### isDrawingMode :Boolean(false)
    启用绘图模式
    如果为true，则画布上的鼠标事件（mousedown / mousemove / mouseup）会导致自由绘制。按下鼠标后，mousemove将创建一个形状，然后将其进行最终确定并在画布上添加一个“ fabric.Path”实例。

### moveCursor :String('move')
    在画布上移动对象时使用的默认光标值

### notAllowedCursor :String('not-allowed')
    用于禁用元素的游标值（具有禁用操作的角）

### overlayColor :String|fabric.Pattern
    覆盖颜色
    画布实例的叠加颜色。应该通过fabric.StaticCanvas＃setOverlayColor进行设置

### overlayImage :fabric.Image
    画布实例的叠加图像。由于2.4.0图像缓存处于活动状态，因此当将图像作为叠加层放置时，请向canvas属性添加对其所在画布的引用。否则，图像将无法检测到变焦。或者，您可以禁用图像对象缓存

### overlayVpt :Boolean(true)
    如果设置为false，则图像不受视口变换的影响

### perPixelTargetFind :Boolean
    设置为true时，对象检测基于每个像素而不是每个边界框进行

### preserveObjectStacking :Boolean
    指示选定对象后是否应将其保留在当前堆栈位置。将虚假对象置于顶部并呈现为选择组的一部分时

### renderOnAddRemove :Boolean(true)
    指示
    fabric.Collection.add、
    fabric.Collection.insertAt、
    fabric.Collection.remove、
    fabric.StaticCanvas.moveTo、
    fabric.StaticCanvas.clear
    等是否也应该重新渲染画布。一次向画布添加/从画布移除大量对象时，禁用此选项将不会提高性能，因为渲染已被排队并每帧执行一次。无论如何，建议禁用，并且手动管理应用程序的渲染不是一件大事（canvas.requestRenderAll（））保留默认值为true不会破坏文档和旧版应用程序，这很麻烦。

### rotationCursor :String('crosshair')
    用于旋转点的光标值

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
    对象/组选择中使用的线宽

### skipOffscreen :Boolean(true)
    基于vptCoords和object.aCoords，跳过当前视口中不包含的对象的渲染。在拥挤的画布和使用缩放/平移的应用程序中可能会大有帮助。如果对象边界框的一角在画布上，则将呈现对象。

### skipTargetFind :Boolean
    如果为true，则跳过目标检测。目标检测将始终返回未定义的状态。点击选择将不再起作用，事件将触发而没有目标。如果在将其设置为true之前选择了某项，则将在第一次单击时将其取消选择。区域选择仍然有效。还要检查`selection`属性。如果同时停用这两个功能，则应查看staticCanvas。

### snapAngle :Number
    指示对象旋转时将锁定的角度。

### snapThreshold :null|Number
    指示旋转将锁定到snapAngle的距snapAngle的距离。当为null时，snapThreshold将默认为snapAngle。

### stateful :Boolean
    指示是否应保存对象的状态

### stopContextMenu :Boolean
    指示右键单击画布是否可以输出上下文菜单

### svgViewportTransformation :Boolean(true)
    设置为true时，getSvgTransform（）将把StaticCanvas.viewportTransform应用于SVG转换。如果为true，则缩放的画布将产生缩放的SVG输出。

### targetFindTolerance :Number
    在目标检测期间目标像素周围容忍(考虑活动)的像素数

### targets :Array.<fabric.Object>
    跟踪鼠标事件的子目标

### uniformScaling :Boolean(true)
    当为真时，对象可以转换的一方(不成比例)时，拖动的角落，通常不会这样做。

### uniScaleKey :String('shiftKey')
    指示哪个键切换均匀缩放。值：“ altKey”，“ shiftKey”，“ ctrlKey”。如果`null`或'none'或其他不是修饰键功能的字符串被禁用。完全错误的命名。如果Canvas.uniformScaling为true，这听起来像“均匀缩放”，按此键会将其设置为false，反之亦然。

### viewportTransform :Array
    聚焦视口的变换（采用Canvas变换的格式）

### vptCoords
    描述画布元素在设计属性tl，tr，bl，br上的扩展。如果画布未缩放/平移，则这些点是画布的四个角（如果画布是viewportTransformed），则这些点指示画布元素在普通未变换坐标中的扩展。使用@method calcViewportBoundaries更新坐标。

### 

### 

### 

### 

### 

### 

### 
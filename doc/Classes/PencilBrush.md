# fabric.PencilBrush
铅笔笔刷

## 成员

### color :String
    画笔的颜色
复制类型：`String('rgb(0, 0, 0)')`

### decimate :Number
    舍弃彼此相距小于“十进制”像素的点
复制类型：`Number(0.4)`

### shadow :fabric.Shadow
    表示此形状阴影的阴影对象。向后不兼容注释：自v1.2.12以来，此属性替换“ shadowColor”（字符串），“ shadowOffsetX”（数字），“ shadowOffsetY”（数字）和“ shadowBlur”（数字）
复制类型：`fabric.Shadow`

### strokeDashArray :Array
    笔划破折号数组
复制类型：`Array`

### strokeLineCap :String
    笔刷的线尾样式（“对接 butt”，“圆形 round”，“正方形 square”之一）
复制类型：`String('round')`

### strokeLineJoin :String
    刷子的角样式（“斜角 bevel”，“圆形 round”，“斜角 miter”之一）
复制类型：`String('round')`

### strokeMiterLimit :Number
    笔刷的最大斜接长度（用于strokeLineJoin =“ miter”）
复制类型：`Number(10)`

### width :Number
    画笔的宽度，必须是数字，没有字符串文字
复制类型：`Number(1)`

## 方法

### _drawSegment(pointer)   
    按下鼠标并移动鼠标时在内部调用
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### _finalizeAndAddPath()
    在contextTop画布上绘制路径后，在mouseup上，
    我们使用捕获的点来创建新的结构路径对象并将其添加到结构画布。

### convertPointsToSVGPath(points) → {String}
    将点转换为SVG路径
参数|类型|性质|描述
|---|---|---|---
points|Array|必填|点数组
返回：`String`,SVG 路径


### createPath(pathData) → {fabric.Path}
    创建fabric.Path对象以添加到画布上
参数|类型|性质|描述
|---|---|---|---
pathData|String|必填|路径数据
返回：`fabric.Path`,在画布上添加的路径

### decimatePoints()
    用十进制值抽取poins数组

### initialize(canvas) → {fabric.PencilBrush}
    初始化
参数|类型|性质|描述
|---|---|---|---
canvas|fabric.Canvas|必填|
返回：`fabric.PencilBrush`，铅笔刷的例子

### onMouseDown(pointer)
    鼠标按下时被调用
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### onMouseUp()
    鼠标松开时调用





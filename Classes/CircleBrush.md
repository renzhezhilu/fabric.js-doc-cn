# fabric.CircleBrush

### new CircleBrush()

## 成员

### width :Number
    笔刷宽度
赋值类型：`Number(10)`


## 方法
### addPoint(pointer) → {fabric.Point}
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|
返回：`fabric.Point`，刚刚添加了指针点

### drawDot(pointer)
    按下鼠标并移动鼠标时在内部调用
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### initialize(canvas) → {fabric.CircleBrush}
    初始化
参数|类型|性质|描述
|---|---|---|---
canvas|fabric.Canvas|必填|
返回：`fabric.CircleBrush`，圆形笔刷的实例

### onMouseDown()
    按下鼠标时调用

### onMouseMove(pointer)
    鼠标移动时调用
参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### onMouseUp()
    松开鼠标时调用


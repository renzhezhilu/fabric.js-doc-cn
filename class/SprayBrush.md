# fabric.SprayBrush
喷雾笔刷

## 成员

### density :Number
    喷雾密度（每块点数）
赋值类型：`Number(20)`

### dotWidth :Number
    喷点宽度
赋值类型：`Number(1)`

### dotWidthVariance :Number
    喷点宽度变化
赋值类型：`Number(1)`

### optimizeOverlapping :Boolean
    是否应删除重叠的点（矩形）（出于性能原因）
赋值类型：`Boolean(true)`

### randomOpacity :Boolean
    点的不透明度是否应该是随机的
赋值类型：`Boolean`

### width :Number
    喷雾宽度
赋值类型：`Number(10)`

## 方法

### _render()
    渲染所有喷雾块 

### addSprayChunk(pointer)
    添加喷雾块
 参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### initialize(canvas) → {fabric.SprayBrush}
    初始化
 参数|类型|性质|描述
|---|---|---|---
canvas|fabric.Canvas|必填|

返回：`fabric.SprayBrush`，喷枪实例

### onMouseDown(pointer)
    按下鼠标时调用
 参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|


### onMouseMove(pointer)
    移动鼠标时调用
 参数|类型|性质|描述
|---|---|---|---
pointer|Object|必填|

### onMouseUp()
    鼠标松开时调用

### render()
    渲染新的喷雾刷
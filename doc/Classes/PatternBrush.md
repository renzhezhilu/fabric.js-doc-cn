# fabric.PatternBrush
图案笔刷

## 成员

### color :String
    画笔的颜色
复制类型：`String('rgb(0, 0, 0)')`

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

### _setBrushStyles()
    设置笔刷样式

### createPath()
    创建路径

### getPattern()
    创建“模式”实例属性 




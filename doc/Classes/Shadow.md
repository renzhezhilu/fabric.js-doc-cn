# fabric.Shadow
阴影

## 成员

### (static) reOffsetsAndBlur
    正则表达式匹配阴影offsetX，offsetY和模糊（例如：“ 2px 2px 10px rgba（0,0,0,0.2）”，“ rgb（0,255,0）2px 2px”）

### affectStroke :Boolean
    阴影是否会影响笔划操作
赋值类型：`Boolean`

### blur :Number
    阴影模糊
赋值类型：`Number`

### color :String
    阴影颜色
赋值类型：`String('rgb(0,0,0)')`

### includeDefaultValues :Boolean
    指示toObject是否应包含默认值
赋值类型：`Boolean(true)`

### nonScaling :Boolean
    当为false时，阴影将随对象缩放。
    设为true时，阴影的offsetX，offsetY和模糊将不受对象比例的影响。默认为false
赋值类型：`Boolean(false)`

### offsetX :Number
    阴影水平偏移
赋值类型：`Number`

### offsetY :Number
    阴影垂直偏移
赋值类型：`Number`


## 方法

### initialize(optionsopt) → {fabric.Shadow}
    初始化
 参数|类型|性质|描述
|---|---|---|---
options|Object、String|选填|具有颜色，模糊，offsetX，offsetY属性或字符串的任何选项对象（例如“ rgba（0,0,0,0.2）2px 2px 10px”）
返回：`fabric.Shadow`



### toObject() 
    返回阴影的对象表示
返回：`Object`

### toString() 
    返回实例的字符串表示形式
返回：`String`,返回CSS3文本阴影声明

### toSVG(object) 
    阴影的SVG表示
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|必填|
返回：`String`
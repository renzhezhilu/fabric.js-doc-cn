
# fabric.Ellipse

大部分成员和方法与`fabric.Circle`相同

### new Ellipse() → {fabric.Ellipse}
返回：`fabric.Ellipse`


## 与fabric.Circle不同的：

### type :String
    对象的类型
赋值类型：`String(ellipse)`


### rx :Number
    水平半径
赋值类型：`Number`

### ry :Number
    垂直半径
赋值类型：`Number`

### (static) fromElement(element, callbackopt) → {fabric.Ellipse}
    从 SVG 元素返回 fabric.Ellipse实例
参数|类型|性质|描述
|---|---|---|---
element|SVGElement|必填|要解析的元素
callback|function|选填|解析完成后调用的选项回调
返回：`fabric.Ellipse`

### (static) fromObject(object, callbackopt) → {fabric.Ellipse}
    从对象表示形式返回 fabric.Ellipse实例
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|对象创建实例
callback|function|选填|以新实例作为第一个参数调用
返回：`fabric.Ellipse`

### getRx() → {Number}
    返回对象的水平半径(根据对象的缩放方式)
返回：`Number`

### getRy() → {Number}
    返回对象的垂直半径(根据对象的缩放方式)
返回：`Number`

### initialize(optionsopt) → {fabric.Ellipse}
    初始化Constructor
 参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象
返回：`fabric.Ellipse`

## 与`fabric.Circle`相比没有的：

- endAngle :Number 圆弧形的结束角度
- radius :Number 圆的半径
- startAngle :Number 圆的起始角度
- getRadiusX() → {Number} 返回对象的水平半径
- getRadiusY() → {Number} 返回对象的垂直半径
- setRadius() → {fabric.Circle} 设置对象的半径


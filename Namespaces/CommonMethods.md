
# fabric.CommonMethods

## 方法

### (static) _setOptions(optionsopt)
    通过选项设置对象的属性
参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象

### (static) get(property) → {*}
    基础获取
参数|类型|性质|描述
|---|---|---|---
property|String|必填|属性名称
返回：`*`,属性值

### (static) set(key, value) → {fabric.Object}
    将属性设置为给定值。
    更改与位置/尺寸相关的属性（左，上，比例，角度等）时，set不会更新对象边界/控件的位置。
    如果需要更新这些，请调用`setCoords（）`
参数|类型|性质|描述
|---|---|---|---
key|String 、Object|必填|属性名称或对象（如果是对象，则遍历对象属性）
value|Object 、 function|必填|属性值（如果是函数，则将值传递给它，并将其返回值用作新值）
返回：`fabric.Object`

### (static) toggle(property) → {fabric.Object}
    将指定的属性从“ true”切换为“ false”，或从“ false”切换为“ true”

参数|类型|性质|描述
|---|---|---|---
property|String|必填|切换属性
返回：`fabric.Object`

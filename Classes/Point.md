# fabric.Point
点

### new Point(x, y) → {fabric.Point}
    新建
参数|类型|性质|描述
|---|---|---|---
x|Number|必填|
y|Number|必填|
返回：`fabric.Point`

## 方法

### add(that) → {fabric.Point}
    向该点添加另一点并返回另一点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`,具有附加值的新Point实例

### addEquals(that) → {fabric.Point}
    在此添加另一点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`

### clone() → {fabric.Point}
    返回点的克隆实例
返回：`fabric.Point`

### distanceFrom(that) → {Number}
    返回此点与另一点的距离
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`Number`

### divide(scalar) → {fabric.Point}
    将这一点除以一个值，然后返回一个新的TODO：在scalarDivide中重命名为2.0
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`

### divideEquals(scalar) → {fabric.Point}
    将此点除以值TODO：在2.0中以scalarDivideEquals重命名
返回：`fabric.Point`

### eq(that) → {Boolean}
    如果此点等于另一点，则返回true
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`Boolean`

### gt(that) → {Boolean}
    如果此点大于另一点，则返回true
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`Boolean`

### gte(that) → {Boolean}
    如果此点大于或等于另一点，则返回true
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`Boolean`

### lerp(that, t) → {fabric.Point}
    返回新点，这是线性插值的结果，其中一个和另一个
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
t|Number|必填|插值位置，介于0和1之间，默认值为0.5
返回：`fabric.Point`

### lt(that) → {Boolean}
    如果此点小于另一点，则返回true
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`Boolean`

### lte(that) → {Boolean}
    如果此点小于或等于另一点，则返回true
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`Boolean`

### max(that) → {fabric.Point}
    返回一个新点，该点是该点和另一个点的最大值
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`

### midPointFrom(that) → {fabric.Point}
    返回此点与另一点之间的点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`

### min(that) → {fabric.Point}
    返回一个新点，该点是该点和另一个点的最小值
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`

### multiply(scalar) → {fabric.Point}
    将此值乘以一个值并返回一个新的TODO：在scalar中重命名在2.0中
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`

### multiplyEquals(scalar) → {fabric.Point}
    将此点乘以值TODO：在2.0中以scalarMultiplyEquals重命名
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`

### scalarAdd(scalar) → {fabric.Point}
    在这一点上增加价值并返回一个新的价值
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`,附加值的新点

### scalarAddEquals(scalar) → {fabric.Point}
    增加这一点的价值
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`,附加值的新点

### scalarSubtract(scalar) → {fabric.Point}
    从这一点减去值并返回一个新值
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`,附加值的新点

### scalarSubtractEquals(scalar) → {fabric.Point}
    从这一点减去价值
参数|类型|性质|描述
|---|---|---|---
scalar|Number|必填|
返回：`fabric.Point`,附加值的新点

### setFromPoint(that)
    从另一个点设置该点的x / y
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|

### setX(x)
    设置此点的x
参数|类型|性质|描述
|---|---|---|---
x|Number|必填|

### setXY(x, y)
    设置此点的x / y
参数|类型|性质|描述
|---|---|---|---
x|Number|必填|
y|Number|必填|

### setY(y)
    设置此点的y
参数|类型|性质|描述
|---|---|---|---
y|Number|必填|

### subtract(that) → {fabric.Point}
    从该点减去另一点并返回一个新点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`,减去值的新Point对象

### subtractEquals(that) → {fabric.Point}
    从这一点减去另一点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|
返回：`fabric.Point`

### swap(that)
    交换此点的x / y和另一点
参数|类型|性质|描述
|---|---|---|---
that|fabric.Point|必填|

### toString() → {String}
    返回此点的字符串表示形式
返回：`String`

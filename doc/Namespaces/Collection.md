
# fabric.Collection
集合


## 方法

### (static) add(…object) → {Self}
    将对象添加到集合，Canvas或Group中，然后渲染canvas（如果`renderOnAddRemove`不是`false`）。
    如果是“组”，则不会更改边界框。对象应该是fabric的实例（或从fabric继承）。
    对于组，强烈建议不要使用此功能。您可以使用add方法添加一堆对象，但随后需要为Group类或position / bbox运行addWithUpdate调用将是错误的。

参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|可重复|零个或多个Fabric实例
返回：`Self`

### (static) complexity() → {Number}
    返回集合复杂度的数字表示
返回：`Number`

### (static) contains(object) → {Boolean}
    如果collection包含一个对象，则返回true
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|要检查的对象
返回：`Boolean`，如果集合包含一个对象，则为true


### (static) forEachObject(callback, context) → {Self}
    为该组中的每个对象执行给定的功能
参数|类型|性质|描述
|---|---|---|---
callback|function|必填|以当前对象作为第一个参数，以index为索引（第二个），并以所有对象的数组作为第三个参数，调用回调。如果未指定`context`参数，则在全局对象（例如“ window”）的上下文中调用回调
context|Object|必填|上下文（又名thisObject）
返回：`Self`

### (static) getObjects(typeopt) → {Array}
    返回此实例类型参数的子对象数组，该对象在1.3.10中引入，因为自2.3.5开始，此方法始终返回该数组的COPY；
参数|类型|性质|描述
|---|---|---|---
type|String|选填|指定后，仅返回此类型的对象
返回：`Array`


### (static) insertAt(object, index, nonSplicing) → {Self}
    在指定的索引处将一个对象插入到集合中，然后渲染画布（如果`renderOnAddRemove`不是`false`），则该对象应该是fabric的一个实例（或继承自该对象）。
    您可以使用insertAt方法添加一堆对象，但随后需要为Group类或position / bbox运行addWithUpdate调用将是错误的。
参数|类型|性质|描述
|---|---|---|---
object|Object|必填|要插入的对象
index|Number|必填|在以下位置插入对象的索引
nonSplicing|Boolean|必填|如果为true，则不会发生对象的拼接（移动）
返回：`Self`


### (static) isEmpty() → {Boolean}
    如果collection不包含任何对象，则返回true 
返回：`Boolean`，如果集合为空，则为true

### (static) item(index) → {Self}
    返回指定索引处的对象
    
参数|类型|性质|描述
|---|---|---|---
index|Number|必填|
返回：`Self`

### (static) remove(…object) → {Self}
    从集合中删除对象，然后渲染画布（如果`renderOnAddRemove`不是`false`）
参数|类型|性质|描述
|---|---|---|---
object|fabric.Object|可重复|零个或多个Fabric实例
返回：`Self`

### (static) size() → {Number}
    返回集合的大小（即：包含其对象的数组的长度） 
返回：`Number`，集合大小
    
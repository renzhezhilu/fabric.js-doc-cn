
# fabric.util.object

## 方法

### (static) extend(destination, source) → {Object}
    将一个js对象的所有可枚举属性复制到另一个js对象，但这不会并且无法与通用utils竞争。
    不克隆或扩展fabric.Object子类。
    这主要供内部使用，并且对fabricJS对象有额外的处理，它会跳过深度克隆中的canvas和group属性。
参数|类型|性质|描述
|---|---|---|---
destination|Object|必填|复制到哪里
source|Object|必填|从何处复制

返回：`Object`
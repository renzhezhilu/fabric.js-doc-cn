
# fabric.Observable
可观察的

官方demo：http://fabricjs.com/events

## 方法

### (static) fire(eventName, optionsopt) → {Self}

    使用可选的options对象触发事件

参数|类型|性质|描述
|---|---|---|---
eventName|String|必填|事件名称触发
options|Object|选填|选项对象
返回：`Self`

### off(eventName, handler) → {Self}
    停止对特定事件处理程序的事件观察。
    不带参数调用此方法将删除所有事件的所有处理程序
参数|类型|性质|描述
|---|---|---|---
eventName|String 、 Object|必填|事件名称（例如'after：render'）或具有键/值对的对象（例如{'after：render'：handler，'selection：cleared'：handler}）
handler|function|必填|要从EventListeners中删除的函数
返回：`Self`

### on(eventName, handler) → {Self}
    观察指定的事件
参数|类型|性质|描述
|---|---|---|---
eventName|String 、 Object|必填|事件名称（例如'after：render'）或具有键/值对的对象（例如{'after：render'：handler，'selection：cleared'：handler}）
handler|function|必填|指定类型的事件发生时接收通知的函数
返回：`Self`



# fabric.util.string
字符串工具

## 方法

### (static) camelize(string) → {String}
    使一个字符串驼峰化
参数|类型|性质|描述
|---|---|---|---
string|String|必填|
返回：`String`

### (static) capitalize(string, firstLetterOnlyopt) → {String}
    大写字符串
参数|类型|性质|描述
|---|---|---|---
string|String|必填|
firstLetterOnly|Boolean|选填|如果为true，则仅首字母大写，而其他字母保持不变；如果为false，则将首字母大写并将其他字母转换为小写。
返回：`String`


### (static) escapeXml(string) → {String}
    以字符串转义XML

参数|类型|性质|描述
|---|---|---|---
string|String|必填|字符串转义
返回：`String`


### (static) graphemeSplit(textstring) → {Array}

    将字符串划分为用户可感知的单个单位
参数|类型|性质|描述
|---|---|---|---
textstring|String|必填|字符串转义
返回：`Array`，包含字素的数组

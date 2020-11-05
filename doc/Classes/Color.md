# fabric.Color


## new Color(color) 
    颜色类fabric.Color的目的是抽象和封装常见的颜色操作。 
    fabric.Color是一个构造函数，并创建fabric.Color对象的实例。

参数|类型|性质|描述
|---|---|---|---
color|String|必填|十六进制或rgb（a）或hsl格式或已知颜色列表中的可选
返回：`fabric.Color`

### (static) colorNameMap
    带有十六进制代码的148个颜色名称的映射

### (static) reHex
    正则表达式十六进制格式的匹配颜色(例如: # ff5544cc，# ff5555,010155，aff)

### (static) reHSLa
    正则表达式以 HSL 或 HSLA 格式配色(ex: HSL (200,80% ，10%) ，HSLA (300,50% ，80% ，0.5) ，HSLA (300,50% ，80% ，0.5)

### (static) reRGBa
    正则表达式以 RGB 或 RGB 格式(ex: RGB (0,0,0) ，RGBA (255,100,10,0.5) ，RGBA (255,100,10,0.5) ，RGB (1,1,1) ，RGBA (100% ，60% ，10% ，0.5)

## 方法

### (static) fromHex(color) 
    当以十六进制格式给定颜色时，返回新的颜色对象
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如: FF5555
返回：`fabric.Color`

### (static) fromHsl(color) 
    当给定 HSL 格式的颜色时，返回新的颜色对象
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如: hsl (0-260,0%-100% ，0%-100%)
返回：`fabric.Color`

### (static) fromHsla(color) 
    当以 HSLA 格式给定颜色时，返回新的颜色对象
参数|类型|性质|描述
|---|---|---|---
color|String|必填|
返回：`fabric.Color`

### (static) fromRgb(color) 
    当给定 RGB 格式的颜色时，返回新的颜色对象
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如: rgb(0-255,0-255,0-255)
返回：`fabric.Color`

### (static) fromRgba(color) 
    当给定 RGBA 格式的颜色时，返回新的颜色对象
参数|类型|性质|描述
|---|---|---|---
color|String|必填|
返回：`fabric.Color`

### (static) fromSource(source) 
    在数组表示中给定颜色时返回新的颜色对象(例如: [200,100,100,0.5])
参数|类型|性质|描述
|---|---|---|---
source|Array|必填|
返回：`fabric.Color`

### (static) sourceFromHex(color) 
    返回十六进制格式的颜色的数组表示(例如: [100,100,200,1])
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如: FF5555 or FF5544CC (RGBa)
返回：`Array`

### (static) sourceFromHsl(color) 
    返回 HSL 或 HSLA 格式的颜色的数组表示(例如: [100,100,200,1]) ，改编自 https://github.com/mjijackson
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如:hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
返回：`Array`

### (static) sourceFromRgb(color) 
    返回 RGB 或 RGB 格式的颜色的数组表示形式(例如: [100,100,200,1])
参数|类型|性质|描述
|---|---|---|---
color|String|必填|颜色值，例如:rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
返回：`Array`

### getAlpha() 
    获取此颜色的 alpha 通道值
返回：`Number`,0-1


### getSource() 
    返回此颜色的 Source (其中 Source 是数组表示; ex: [200,200,100,1])
返回：`Array`

### overlayWith(otherColor) 
    用另一种颜色叠加颜色
参数|类型|性质|描述
|---|---|---|---
otherColor|String、fabric.Color	|必填|
返回：`fabric.Color`

### setAlpha(alpha) 
    设置此颜色的 alpha 通道值
参数|类型|性质|描述
|---|---|---|---
alpha|Number|必填|Alpha value 0-1
返回：`fabric.Color`

### setSource(source)
    设置此颜色的源(其中 source 是数组表示; ex: [200,200,100,1])
参数|类型|性质|描述
|---|---|---|---
source|Array|必填|

### toBlackWhite(threshold) 
    将颜色转换为其黑白表示形式
参数|类型|性质|描述
|---|---|---|---
threshold|Number|必填|
返回：`fabric.Color`

### toGrayscale() 
    将颜色转换为其灰度表示
返回：`fabric.Color`

### toHex() 
    返回十六进制格式的颜色表示
返回：`String`,例如： #fff555

### toHexa() 
    返回 HEXA 格式的颜色表示
返回：`String`，例如：FF5555CC

### toHsl() 
    以HSL格式返回颜色表示
返回：`String`，例如：hsl(0-360,0%-100%,0%-100%)

### toHsla() 
    返回 HSLA 格式的颜色表示
返回：`String`，例如：hsla(0-360,0%-100%,0%-100%,0-1)

### toRgb() 
    返回RGB格式的颜色表示
返回：`String`，例如：rgb(0-255,0-255,0-255)

### toRgba() 
    返回RGBA格式的颜色表示
返回：`String`，例如：rgba(0-255,0-255,0-255,0-1)


### 

返回：``


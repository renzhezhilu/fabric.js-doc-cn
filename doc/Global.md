# Global
全局变量/方法


## 成员

### __cachedLines :Array
    缓存的文本换行数组。
赋值类型：`Array`


### dynamicMinWidth :Number
    文本框的最小计算宽度，以像素为单位。
    固定为2，以便空白文本框不能变为0，并且仍然可以选择没有文本。
赋值类型：`Number(2)`

### lockScalingFlip
    覆盖标准对象类值

### minWidth :Number
    文本框的最小宽度
赋值类型：`Number(20)`

### noScaleCache
    覆盖标准Object类值Textbox将此设置为false 

### splitByGrapheme :Boolean
    使用此布尔属性可拆分没有空格概念的字符串。
    这是帮助中国/日本人的便宜方法
赋值类型：`Boolean`

### type :String
    对象类型 
赋值类型：`String('textbox')`


## 方法

### _splitTextIntoLines(text) → {Array}
    获取要在“文本框”中呈现的文本行。每次调用时，此函数都会即时计算自动换行。
参数|类型|性质|描述
|---|---|---|---
text|String|必填|文字分割
赋值类型：`Array`，文本框中的行数组

### _wrapLine(line, lineIndex, desiredWidth, reservedSpace) → {Array}
    使用文本框的宽度和上下文来换行文本。
参数|类型|性质|描述
|---|---|---|---
line|Array|必填|表示线的字素数组
lineIndex|Number|必填|
desiredWidth|Number|必填|您要将行换行的宽度
reservedSpace|Number|必填|从包装中移除的空间可用于自定义功能
赋值类型：`Array`，给定文本被换行的行的数组。



### _wrapText(lines, desiredWidth) → {Array}
    使用文本框的'width'属性包装文本。
    首先，此功能在换行符上分割文本，因此我们保留用户输入的换行符。
    然后，通过调用_wrapLine（）使用文本框的宽度包装每行。
参数|类型|性质|描述
|---|---|---|---
line|Array|必填|分成几行的文本的字符串数组
desiredWidth|Number|必填|您要包装的宽度
返回：`Array`，行数组


### applyFilters(filters, forResizing) → {thisArg}
    应用分配给该图像的滤镜（来自“滤镜”数组）或滤镜参数
参数|类型|性质|描述
|---|---|---|---
filters|Array|必填|要施加
forResizing|Boolean|必填|指定过滤器操作是否为调整大小操作
返回`fabric.Image`

### copyGLTo2DDrawImage(sourceContext, targetCanvas, pipelineState)
    将输入WebGL画布复制到输出2D画布上。
    假定WebGL画布是上下颠倒的，所需输出图像的左上像素出现在WebGL画布的左下角。
参数|类型|性质|描述
|---|---|---|---
sourceContext|WebGLRenderingContext|必填|要复制的 WebGL 上下文
targetCanvas|HTMLCanvasElement|必填|要复制到的2D目标画布。
pipelineState|Object|必填|要复制到的2D目标画布。

### copyGLTo2DPutImageData(sourceContext, targetCanvas, pipelineState)
    使用2d canvas的putImageData API将输入WebGL画布复制到输出2D画布上。
    比在Firefox中使用ctx.drawImage快得多（OSX Sierra上的版本54）。
参数|类型|性质|描述
|---|---|---|---
sourceContext|WebGLRenderingContext|必填|要复制的 WebGL 上下文
targetCanvas|HTMLCanvasElement|必填|要复制到的2D目标画布。
pipelineState|Object|必填|要复制到的2D目标画布。

### isEmptyStyles(lineIndex) → {Boolean}
    如果对象在行中没有样式或没有样式，则返回true
参数|类型|性质|描述
|---|---|---|---
lineIndex|Number|必填|lineIndex在换行符上。
返回：`Boolean`

### isEndOfWrapping(lineIndex) → {Boolean}
    检测文本行是否以硬分隔符文本结尾并且itext没有换行，返回false
参数|类型|性质|描述
|---|---|---|---
lineIndex|Number|必填|文字分割
返回：`Boolean`

### missingNewlineOffset()
    检测线条是否有换行符，因此在移动和计数样式时需要考虑它。
返回：`Number`

### styleHas(lineIndex) → {Boolean}
    如果对象具有样式属性或在指定行上，则返回true
参数|类型|性质|描述
|---|---|---|---
lineIndex|Number|必填|
返回：`Boolean`

### toObject(propertiesToIncludeopt) → {Object}
    返回实例的对象表示
参数|类型|性质|描述
|---|---|---|---
propertiesToInclude|Array|选填|您可能希望在输出中另外包含的所有属性
返回：`Object`

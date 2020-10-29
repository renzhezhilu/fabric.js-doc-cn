# fabric.Image.filters.Resize
调整图像滤镜
继承`fabric.Image.filters.BaseFilter`

``` javascript
var filter = new fabric.Image.filters.Resize();
object.filters.push(filter);
object.applyFilters(canvas.renderAll.bind(canvas));
```

## 成员

### lanczosLobes
    Lanczos过滤器的LanczosLobes参数，对resizeType lanczos有效
默认值： `3`

### resizeType

    webgl resizeType的调整大小类型只是lanczos，对于canvas2d可以是：bilinear，hermite，sliceHack，lanczos。
默认值： `hermite`

### scaleX
    缩放比例因子，x轴 
默认值： `1`

### scaleY
    缩放比例因子，y轴 
默认值： `1`

### type
    滤镜类型
赋值类型： `Resize` 

## 方法

### applyTo(options)

    将调整大小滤镜应用于图像。根据options.webgl标志确定是使用WebGL还是Canvas2D。

参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
passes|Number|必填|剩余要执行的过滤器数
webgl|Boolean|必填|是否使用webgl渲染过滤器
sourceTexture|WebGLTexture|必填|纹理设置为要过滤的源
targetTexture|WebGLTexture|必填|应该绘制过滤输出的纹理
context|WebGLRenderingContext|必填|用于渲染的GL上下文
programCache|Object|必填|映射的着色器程序的映射，以过滤器类型为键。

### applyTo2d(canvasEl, scaleX, scaleY)
    将过滤器应用于画布元素
参数|类型|性质|描述
|---|---|---|---
canvasEl|Object|必填|画布元素以将过滤器应用于
scaleX|Number|必填|
scaleY|Number|必填|

### applyToWebGL(options)

    使用webgl应用此过滤器。

参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
passes|Number|必填|剩余要执行的过滤器数
webgl|Boolean|必填|是否使用webgl渲染过滤器
originalTexture|WebGLTexture|必填|原始输入图像的纹理
sourceTexture|WebGLTexture|必填|纹理设置为要过滤的源
targetTexture|WebGLTexture|必填|应该绘制过滤输出的纹理
context|WebGLRenderingContext|必填|用于渲染的GL上下文
programCache|Object|必填|映射的着色器程序的映射，以过滤器类型为键。

### bilinearFiltering(canvasEl, oW, oH, dW, dH) → {ImageData}
    双线性过滤
参数|类型|性质|描述
|---|---|---|---
canvasEl|Object|必填|画布元素以将过滤器应用于
oW|Number|必填|原始宽度
oH|Number|必填|原始高度
dW|Number|必填|目标宽度
dH|Number|必填|目标高度
返回：`ImageData`

### createHelpLayer()

    如果2D滤镜需要，此函数可以创建要使用的辅助画布，请记住，options.targetCanvas可以使用到链结束。

### createProgram(gl, fragmentSource, vertexSource)

    编译此滤镜的着色器程序

参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|用于着色器编译的GL canvas上下文
fragmentSource|String|必填|fragmentShader的编译源
vertexSource|String|必填|vertexShader编译源

### generateShader(filterWindow)
    从必要的步骤编号生成顶点和着色器源
参数|类型|性质|描述
|---|---|---|---
filterWindow|Number|必填|

### getAttributeLocations(gl, program) → {Object}

    将属性名称的映射返回到WebGLAttributeLocation对象。

参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|canvas上下文用于编译着色器程序
program|WebGLShaderProgram|必填|从中获取属性位置的着色器程序
返回： `Object` , 属性名称到属性位置的映射

### getUniformLocations(gl, program) 
    返回此滤镜着色器的WebGL统一位置
参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|GL画布上下文用于编译此滤镜的着色器
program|WebGLShaderProgram|必填|该过滤器的编译着色器程序

### hermiteFastResize(canvasEl, oW, oH, dW, dH) → {ImageData}
    Hermite快速调整大小
参数|类型|性质|描述
|---|---|---|---
canvasEl|Object|必填|画布元素以将过滤器应用于
oW|Number|必填|原始宽度
oH|Number|必填|原始高度
dW|Number|必填|目标宽度
dH|Number|必填|目标高度
返回：`ImageData`


### initialize(optionsopt)

    初始化

参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象

### isNeutralState(options)

    一种基于参数的过滤器的通用isNeutral实现。仅在图像applyFilters中使用，以丢弃不会对图像产生影响的滤镜其他滤镜可能需要它们自己的版本（ColorMatrix，HueRotation，gamma，ComposedFilter）

参数|类型|性质|描述
|---|---|---|---
options|Object|必填|

### lanczosResize(canvasEl, oW, oH, dW, dH) → {ImageData}
    筛选lanczos的大小
参数|类型|性质|描述
|---|---|---|---
canvasEl|Object|必填|画布元素以将过滤器应用于
oW|Number|必填|原始宽度
oH|Number|必填|原始高度
dW|Number|必填|目标宽度
dH|Number|必填|目标高度
返回：`ImageData`

### retrieveShader(options)

    检索缓存的着色器

    一种基于参数的过滤器的通用isNeutral实现。仅在图像applyFilters中使用，以丢弃不会对图像产生影响的滤镜其他滤镜可能需要它们自己的版本（ColorMatrix，HueRotation，gamma，ComposedFilter）

参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
context |WebGLRenderingContext|必填|用于渲染的GL上下文。
programCache |Object|必填|映射的着色器程序的映射，以过滤器类型为键。

### sendAttributeData(gl, attributeLocations)

    将属性数据从此过滤器发送到GPU上的着色器程序。

参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|canvas上下文用于编译着色器程序
attributeLocations|WebGLShaderProgram|必填|着色器属性名称到其位置的映射。

### sendUniformData(gl, uniformLocations)
    将数据从此滤镜发送到其着色器程序的制服。
参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|GL画布上下文用于编译此滤镜的着色器
uniformLocations|Object|必填|字符串统一名称到WebGLUniformLocation对象的映射


### setOptions(optionsopt)

    从选项设置过滤器的属性

参数|类型|性质|描述
|---|---|---|---
options|Object|选填|选项对象

### sliceByTwo(canvasEl, oW, oH, dW, dH) → {ImageData}
    按两片筛选
参数|类型|性质|描述
|---|---|---|---
canvasEl|Object|必填|画布元素以将过滤器应用于
oW|Number|必填|原始宽度
oH|Number|必填|原始高度
dW|Number|必填|目标宽度
dH|Number|必填|目标高度
返回：`ImageData`

### toJSON() → {Object}

    返回实例的JSON表示形式 

返回： `Object` ，json

### toObject() → {Object}

    返回实例的对象表示 

返回： `Object` 

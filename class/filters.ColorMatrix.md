# fabric.Image.filters.ColorMatrix
颜色矩阵滤镜
继承`fabric.Image.filters.BaseFilter`

``` javascript
var filter = new fabric.Image.filters.ColorMatrix({
 matrix: [
       1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
       -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
       -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
       0, 0, 0, 1, 0
      ]
});
object.filters.push(filter);
object.applyFilters();
```

## 成员

### colorsOnly
    将colormatrix锁定在颜色部分上，跳过alpha，对于非webgl场景，要节省一些计算

### matrix
    像素的Colormatrix。 20个浮点数的数组。位置4、9、14、19中的数字松散，表示超出-1，1范围。 0.0039215686是1的一部分，可以在2d中转换为1 
默认值：`[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]`
    
### type
    滤镜类型
赋值类型： `ColorMatrix` 

## 方法

### applyTo(options)

    此过滤器应用于提供的输入图像数据。根据options.webgl标志确定使用WebGL还是Canvas2D

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

### applyTo2d(options)
    将ColorMatrix操作应用于表示图像像素的Uint8Array。
参数|类型|性质|描述
|---|---|---|---
options|Object|必填|
options
参数|类型|性质|描述
|---|---|---|---
imageData|ImageData|必填|要过滤的Uint8Array

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

### createHelpLayer()

    如果2D滤镜需要，此函数可以创建要使用的辅助画布，请记住，options.targetCanvas可以使用到链结束。

### createProgram(gl, fragmentSource, vertexSource)

    编译此滤镜的着色器程序

参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|用于着色器编译的GL canvas上下文
fragmentSource|String|必填|fragmentShader的编译源
vertexSource|String|必填|vertexShader编译源

### getAttributeLocations(gl, program) → {Object}

    将属性名称的映射返回到WebGLAttributeLocation对象。

参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|canvas上下文用于编译着色器程序
program|WebGLShaderProgram|必填|从中获取属性位置的着色器程序
返回： `Object` , 属性名称到属性位置的映射

### getUniformLocations(gl, program) → {Object}
    返回此滤镜着色器的WebGL统一位置
参数|类型|性质|描述
|---|---|---|---
gl|WebGLRenderingContext|必填|GL画布上下文用于编译此滤镜的着色器
program|WebGLShaderProgram|必填|该过滤器的编译着色器程序
返回： `Object` , 属性名称到属性位置的映射

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

### toJSON() → {Object}

    返回实例的JSON表示形式 

返回： `Object` ，json

### toObject() → {Object}

    返回实例的对象表示 

返回： `Object` 

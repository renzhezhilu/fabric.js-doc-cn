
### 锁定控制点交互和直接隐藏控制点?
    锁定：
        lockRotation:true,
        lockScalingFlip:true,
        lockSkewingX:true,
        lockSkewingY:true,
    隐藏：
        Object.cornerDashArray=[]

### 图片滤镜效果有点卡，如何加强？
    demo:http://fabricjs.com/image-filters
    使用WebGl
```javascript
  if(fabric.isWebglSupported())  fabric.filterBackend = new fabric.WebglFilterBackend();
  else fabric.filterBackend = new fabric.Canvas2dFilterBackend();
```


### 如何羽化？
    没有答案
    研究 用透明渐变色或自定义滤镜


### 画笔模式的事件
    https://stackoverflow.com/questions/54622125/fabric-js-freedrawing-on-hover-of-canvas-instead-of-click-mouse-down
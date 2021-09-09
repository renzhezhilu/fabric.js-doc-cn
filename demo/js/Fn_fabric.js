window.Fn_fabric = {
    // 初始化画布
    initCanvas() {

        if (fabric.isWebglSupported()) {
            fabric.filterBackend = new fabric.WebglFilterBackend();
            fabric.textureSize = fabric.maxTextureSize;
        }
        let canvas = new fabric.Canvas('fabricjsDocCn')
        canvas.setWidth(1000)
        canvas.setHeight(500)
        canvas.setBackgroundColor(
            "rgba(255, 255, 255, 1)",
            canvas.renderAll.bind(canvas)
        );
        canvas.backgroundVpt = false //背景固定
        canvas.preserveObjectStacking = true //活动对象是否顶层
        canvas.isDrawingMode = false
        canvas.freeDrawingBrush.width = 20;
        canvas.freeDrawingBrush.color = "#88ee33";
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: 14,
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: '#88ee11',
        });
        return canvas
    },
    initObject() {
        // 物件通用
        Object.assign(fabric.Object.prototype, {
            // 文本-控制框的样式
            transparentCorners: false, // 角是否透明，默认true，就是边框
            cornerColor: "#333", //角的颜色 0d57e1
            // cornerStyle: "circle",   //角的形状 circle、rect
            cornerSize: "8", //角的大小
            borderColor: "#aaa", //控制框的颜色
            cornerStrokeColor: "#aaa", //角的描边颜色
            // hasControls:false,
            // borderScaleFactor:3,
            // padding:20,//对象与其边界的距离
            // editingBorderColor: "black",
            // 特性
            lockUniScaling: true, //锁定原比例
            // lockScalingFlip: true, //负值来翻转对象
            // lockScalingX:true,         // 水平缩放被锁定
            // lockScalingY:true,         // 垂直缩放被锁定
            objectCaching: false, //不缓存，保持文本清晰
            originX: 'left',
            originY: 'top',
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            skewX: 0,
            skewY: 0,
            opacity: 1,
            strokeWidth: 0,
            stroke: 'green',
            shadow: {
                blur: 0,
                color: '#883912',
                offsetX: 0,
                offsetY: 0
            },
        });
    },
    // 视窗的中心点
    // 哦？和 Canvas.getCenter() 有什么不同？
    Fn_viewCenterCoord(canvas) {
        let _zoom = canvas.getZoom()
        return {
            x: fabric.util.invertTransform(canvas.viewportTransform)[4] + (canvas.width / _zoom) / 2,
            y: fabric.util.invertTransform(canvas.viewportTransform)[5] + (canvas.height / _zoom) / 2
        }
    },
    // 把物件放置画布中心
    // 噢？和 Object.viewportCenter() 有什么不一样？
    putCenter(canvas, obj, isActive = true, isAutoWidth = false) {
        let vxy = this.Fn_viewCenterCoord(canvas)
        if (isAutoWidth) {
            let maxW = canvas.width / 2
            let maxH = canvas.height / 2
            let objWidth = obj.width * obj.scaleX
            let objHeight = obj.height * obj.scaleY
            if (objWidth > maxW || objHeight > maxH) {
                let m = objWidth > objHeight ? objHeight : objWidth
                obj.set({
                    scaleX: maxW / m,
                    scaleY: maxW / m,
                })
            }
        }
        obj.set({
            left: vxy.x - (obj.width * obj.scaleX) / 2,
            top: vxy.y - (obj.height * obj.scaleY) / 2,
        })
        canvas.add(obj)
        if (isActive) canvas.setActiveObject(obj)
        canvas.renderAll()
    },
    putCenter2(canvas, obj) {
        let vxy = this.Fn_viewCenterCoord(canvas)
      
        obj.set({
            // left: vxy.x - (obj.width * obj.scaleX) / 2,
            top: vxy.y - (obj.height * obj.scaleY) / 2,
        })
        canvas.renderAll()
    },
    putCenter3(canvas, obj) {
        let vxy = this.Fn_viewCenterCoord(canvas)
      
        obj.set({
            // left: vxy.x - (obj.width * obj.scaleX) / 2,
            top: vxy.y + (window.innerHeight/2/canvas.getZoom()),
        })
        canvas.renderAll()
    },
    // 节流  throttle.run(() => {}, 200)
    throttle: {
        val: null,
        run(fn, ms = 600) {
            clearTimeout(this.val);
            this.val = setTimeout(() => {
                fn();
            }, ms);
        },
    },
    // 随机生成物件
    randomCreatOnjetc(canvas, count) {
        let getRandomColor = () => '#' + new Array(6).fill(0).map(m => '0123456789ABCDEF' [Math
            .floor(Math.random() * 16)
        ]).join('')
        let getType = () => ['Rect', 'Circle', 'Triangle', 'Ellipse', 'IText'][Math.floor(Math
            .random() * 5)]
        let out = () => {
            let type = getType()
            let parm = _ => {
                return {
                    left: 20 + Math.random() * 500,
                    top: 20 + Math.random() * 400,
                    width: 20 + Math.random() * 200,
                    height: 20 + Math.random() * 200,
                    radius: 20 + Math.random() * 200,
                    rx: 2 + Math.random() * 20,
                    ry: 2 + Math.random() * 20,
                    fill: getRandomColor(),
                }
            }
            if (type === 'IText') {
                return new fabric[type](`文字图层-${getRandomColor()}`, parm())
            } else {
                return new fabric[type](parm())
            }
        }
        new Array(count).fill(0).map(m => out()).map(m => {
            canvas.add(m)
        })
    },
    // 指针是否在物件边缘
    /**
     * @parm o 物件
     * @parm x mouse:move事件的e.pointer.x
     * @parm y mouse:move事件的e.pointer.y
     * @parm padding 边缘范围
     * 
     */
     isEdgeFn(o, x, y, padding = 20) {
        let isLeft = x > o.left && x < o.left + padding
        let isRight = x < o.left + o.width && x > o.left + o.width - padding
        let isTop = y > o.top && y < o.top + padding
        let isBottom = y < o.top + o.height && y > o.top + o.height - padding
        if (isLeft || isRight || isTop || isBottom) return true
        else return false
    },
    // 灵活箭头
    agileArrow(canvas, point = {
        startX: 600,
        startY: 700,
        endX: 390,
        endY: 200
    }) {
        /**
         ********************************* 绘制前
         */
        let _this = this
        let index,
            config,
            controlStart,
            controlEnd,
            line,
            arrow,
            getAtan,
            getSqrt,
            setAllCoords,
            computeStart,
            computeEnd,
            computeAll,
            computeLine,
            initXY,
            isShowPoint,
            FnShowPoint,
            isMe;
        index = canvas.getObjects().filter(f => f.id.includes('agileArrow')).length / 4
        console.log(canvas.getObjects(), index);
        config = {
            radius: 7,
            fill: "blue",
            hasControls: false,
            hasBorders: false,
            selectable: false,
            originX: 'cneter',
            originY: 'center',
        }
        /**
         ********************************* 定义物件
         */
        controlStart = new fabric.Circle({
            ...config,
            id: `agileArrow_${index}_start`,
            fill: "white",
            stroke: config.fill,
            strokeWidth: 3,
            left: point.startX,
            top: point.startY,
            opacity: 0

        })
        controlEnd = new fabric.Circle({
            ...config,
            id: `agileArrow_${index}_end`,
            fill: "white",
            stroke: config.fill,
            strokeWidth: 3,
            left: point.endX,
            top: point.endY,
            opacity: 0
        })
        line = new fabric.Polyline([{
                x: 0,
                y: -2
            },
            {
                x: 180,
                y: -8
            },
            {
                x: 180,
                y: 8
            },

            {
                x: 0,
                y: 2
            },
            {
                x: -1,
                y: 0
            },
        ], {
            ...config,
            id: `agileArrow_${index}_line`,
            left: point.startX,
            top: point.startY,
            selectable: true,
            originX: 'left',
            originY: 'center',

        });
        arrow = new fabric.Polygon([{
            x: 0,
            y: 0
        }, {
            x: 40,
            y: 20
        }, {
            x: 0,
            y: 40
        }, {
            x: 7,
            y: 20
        }, ], {
            ...config,
            id: `agileArrow_${index}_arrow`,
            left: point.endX,
            top: point.endY,
            // evented: false,
            originX: 'right',
            originY: 'center',
            hoverCursor: 'default',
            moveCursor: 'default',
        });
        /**
         ********************************* 定义方法
         */
        // 计算夹角
        getAtan = (x1, x2, y1, y2) => 180 - (Math.atan2((x1 - x2), (y1 - y2)) * 180 / Math.PI)
        // 求边长，勾股定理
        getSqrt = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        // 重新设置默认的控制点
        setAllCoords = _ => {
            controlStart.setCoords()
            controlEnd.setCoords()
            arrow.setCoords()
            line.setCoords()
            canvas.renderAll();
        }
        // 计算控制点交互
        computeAll = _ => {
            // 需要旋转的弧度
            arrow.rotate(getAtan(controlStart.left, controlEnd.left, controlStart.top, controlEnd.top) + 90)
            line.angle = arrow.angle
            // 需要跟随移动
            arrow.set({
                left: controlEnd.left,
                top: controlEnd.top
            })
            // 需要缩放的比例
            let a = Math.abs(controlStart.left - arrow.getCenterPoint().x)
            let b = Math.abs(controlStart.top - arrow.getCenterPoint().y)
            //line的初始长度
            line.scaleX = (getSqrt(a, b)) / 180
            if ('line和arrow是否根据两个控制点的间距大小来缩放') {
                let max = 1.2
                let min = 0.6
                let scaleAll = line.scaleX
                if (scaleAll > max) scaleAll = max
                if (scaleAll < min) scaleAll = min
                line.scaleY = scaleAll
                arrow.scaleX = scaleAll * 0.95
                arrow.scaleY = scaleAll * 0.95
            }
            // 调整end点保持在箭头尖尖位置上
            setAllCoords()
            controlEnd.set({
                left: arrow.oCoords.mr.x,
                top: arrow.oCoords.mr.y,
            })
            setAllCoords()
        }
        // 计算开始点移动时
        computeEnd = () => {
            // 切换line的旋转点
            if (line.originX = 'right') {
                line.left = controlStart.left
                line.top = controlStart.top
                line.originX = 'left'
            }
            computeAll()
        }
        // 计算开始点
        computeStart = () => {
            // 切换line的旋转点
            if (line.originX = 'left') {
                line.left = arrow.getCenterPoint().x
                line.top = arrow.getCenterPoint().y
                line.originX = 'right'
            }
            computeAll()
        }
        // 计算整体移动
        initXY = null
        computeLine = () => {
            if (!initXY) initXY = {
                aX: arrow.left - line.left,
                aY: arrow.top - line.top,
                sX: controlStart.left - line.left,
                sY: controlStart.top - line.top,
            }
            arrow.left = line.left + initXY.aX
            arrow.top = line.top + initXY.aY
            controlStart.left = line.left + initXY.sX
            controlStart.top = line.top + initXY.sY
            setAllCoords()
            controlEnd.set({
                left: arrow.oCoords.mr.x,
                top: arrow.oCoords.mr.y,
            })
            setAllCoords()

        }
        // 判是否现实控制点
        FnShowPoint = (isOpen = true) => {
            if (!isOpen) {
                controlStart.set({
                    opacity: 0,
                    selectable: false,
                    evented: false,
                })
                controlEnd.set({
                    opacity: 0,
                    selectable: false,
                    evented: false,
                })
            } else {
                controlStart.set({
                    opacity: 1,
                    selectable: true,
                    evented: true,
                })
                controlEnd.set({
                    opacity: 1,
                    selectable: true,
                    evented: true,
                })
            }
            setAllCoords()
        }
        // 判断是否是本体
        isMe = (e) => {
            if (
                e.target &&
                (e.target.id === `agileArrow_${index}_start` ||
                    e.target.id === `agileArrow_${index}_end` ||
                    e.target.id === `agileArrow_${index}_arrow` ||
                    e.target.id === `agileArrow_${index}_line`
                )) return true
            else false
        }
        /**
         ********************************* 开始绘制
         */
        computeEnd()
        canvas.add(line, arrow, controlStart, controlEnd)
        computeEnd()

        /**
         ********************************* 设置事件
         */
        // 物件移动事件
        canvas.on('object:moving', function (e) {
            let obj = e.target
            if (obj.id === `agileArrow_${index}_line`) {
                computeLine()
                computeEnd()
            }
            if (obj.id === `agileArrow_${index}_end`) {
                computeEnd()
            }
            if (obj.id === `agileArrow_${index}_start`) {
                computeStart()
            }
        });
        // 进入物件事件
        canvas.on('mouse:over', function (e) {
            if (isMe(e)) {
                FnShowPoint()
                if (isShowPoint) clearTimeout(isShowPoint)
            }
        })
        // 离开物件事件
        canvas.on('mouse:out', function (e) {
            if (isMe(e)) {
                isShowPoint = setTimeout(() => {
                    FnShowPoint(false)
                }, 2000);
            }
        })
        // 物件移动结束事件
        canvas.on('object:modified', function (e) {
            let obj = e.target
            if (obj.id === `agileArrow_${index}_line`) {
                initXY = null
            }
        })

    },
}
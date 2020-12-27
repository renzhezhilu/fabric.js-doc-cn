window.Fn_fabric = {
    // 初始化画布
    initCanvas() {
        let canvas = new fabric.Canvas('fabricjsDocCn')
        canvas.setWidth(1000)
        canvas.setHeight(500)
        canvas.setBackgroundColor(
            "rgba(255, 255, 255, 1)",
            canvas.renderAll.bind(canvas)
        );
        return canvas
    },
    // 视窗的中心点
    Fn_viewCenterCoord(canvas) {
        let _zoom = canvas.getZoom()
        return {
            x: fabric.util.invertTransform(canvas.viewportTransform)[4] + (canvas.width / _zoom) / 2,
            y: fabric.util.invertTransform(canvas.viewportTransform)[5] + (canvas.height / _zoom) / 2
        }
    },
    // 把物件放置画布中心
    putCenter(canvas, obj,isActive=true, isAutoWidth = false) {
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
    go() {
        console.log(fabric);
    }
}
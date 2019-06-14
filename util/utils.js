var slide = function (e) {
    var cueerntEelement = e.target//获取到当前元素
    let x = e.clientX - cueerntEelement.offsetLeft
    let y = e.clientY - cueerntEelement.offsetTop
    document.onmousemove = function (e) {
        //移动后距离左边上上面的问题
        var positionX = e.clientX - x
        var positionY = e.clientY - y
        this.positionX=positionX
        this.positionY=positionY

        if (positionX < 0) {
            positionX = 0
        }
        if (positionY < 0) {
            positionY = 0
        }
        if (positionX > document.documentElement.clientWidth - cueerntEelement.offsetWidth) {
            positionX = document.documentElement.clientWidth - cueerntEelement.offsetWidth
        }
        if (positionY > document.documentElement.clientHeight - cueerntEelement.offsetHeight) {
            positionY = document.documentElement.clientHeight - cueerntEelement.offsetHeight
        }
        cueerntEelement.style.left = positionX + "px"
        cueerntEelement.style.top = positionY + "px"

    }
    //停止移动
    document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
    }

}

function operate(){
    this.slide=function (e) {
        var cueerntEelement = e.target//获取到当前元素
        let x = e.clientX - cueerntEelement.offsetLeft
        let y = e.clientY - cueerntEelement.offsetTop
        document.onmousemove = function (e) {
            //移动后距离左边上上面的问题
            var positionX = e.clientX - x
            var positionY = e.clientY - y
            this.pX=positionX
            this.pY=positionY
            // console.log(this.pX)
            // console.log(this.pY)

            if (positionX < 0) {
                positionX = 0
            }
            if (positionY < 0) {
                positionY = 0
            }
            if (positionX > document.documentElement.clientWidth - cueerntEelement.offsetWidth) {
                positionX = document.documentElement.clientWidth - cueerntEelement.offsetWidth
            }
            if (positionY > document.documentElement.clientHeight - cueerntEelement.offsetHeight) {
                positionY = document.documentElement.clientHeight - cueerntEelement.offsetHeight
            }
            cueerntEelement.style.left = positionX + "px"
            cueerntEelement.style.top = positionY + "px"

        }
        //停止移动
        document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}
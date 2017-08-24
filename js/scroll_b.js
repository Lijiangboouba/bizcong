var columnbTop=document.getElementById("column_b_top");
function wheel(upFn, downFn) {
    window.onmousewheel = getWheelDalta;
    if(window.addEventListener) {
        window.addEventListener("DOMMouseScroll", getWheelDalta, false);
    }
    function getWheelDalta(event) {
        var event = event || window.event;
        var delta = 0;
        if (event.wheelDelta) {
            delta = event.wheelDelta/120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail/3;
        }
        if(delta > 0) {
            upFn();
        }else {
            downFn();
        }
    }
}
function wheelUp() {
    columnbTop.style.display="none";
}
function wheelDown() {
    columnbTop.style.display="block";
}
wheel(wheelUp, wheelDown);
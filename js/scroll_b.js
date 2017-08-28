var columnbTop=document.getElementById("column_b_top");
window.onscroll=function(){
    var win = /.*chrome.*/i.test(navigator.userAgent) ? document.body : document.documentElement;
    var scrollTop = win.scrollTop;
    if(scrollTop>=600){
        columnbTop.style.display="block";
    }if(scrollTop<600){
        columnbTop.style.display="none";
    }
}
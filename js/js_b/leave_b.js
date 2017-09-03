// leave starts
var falg = document.getElementById('falg_t');
var leave_t_content = document.getElementsByClassName('leave_t_content')[0];
var oI = falg.childNodes[0];
var k = true;
console.log(falg)
falg.onclick = function(){

    if(k){
        k=false;
        leave_t_content.style.display = 'none';
        oI.style.background='url(../../images/leave/nodeMax.png) no-repeat';
    }else{
        k=true;
        leave_t_content.style.display = 'block';
        oI.style.background='url(../../images/leave/nodeMin.png) no-repeat';
    }
}
$(function(){
    var ua=navigator.userAgent;
    if(ua.lastIndexOf('Trident')!= -1){
        var txtHolder=$("#txt").attr("placeholder");
        var nameHolder=$("#name").attr("placeholder");
        var phoneHolder=$("#phone").attr("placeholder");
        var emialHolder=$("#emial").attr("placeholder");
        var addHolder=$("#add").attr("placeholder");
        $("#txt").val(txtHolder).addClass("hint");
        $("#name").val(nameHolder).addClass("hint");
        $("#phone").val(phoneHolder).addClass("hint");
        $('#emial').val(emialHolder).addClass("hint");
        $('#add').val(addHolder).addClass("hint");
        function change(ele,text){
            $(ele).focus(function(){
                if($(this).val() == text){
                    $(this).val("").removeClass("hint");
                }
                return false;
            }).blur(function(){
                if($(this).val().trim() === ""){
                    $(this).val(text).addClass("hint");
                }
                return false;
            });
        }
        change("#txt",txtHolder);
        change("#name",nameHolder);
        change("#phone",phoneHolder);
        change("#emial",emialHolder);
        change("#add",addHolder);

    }

})

// leave ends
/**
 * Created by Administrator on 2017/8/29.
 */

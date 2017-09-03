/**
 * Created by Administrator on 2017/8/30.
 */
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
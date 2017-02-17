$(function () {
    $('#date-range13-1').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
    //增加 删除功能
    $(".zengjia").on('click',function () {
        var str="<div class='spacing1'><input type='text' class='form-control spacing' id='exampleInputEmail1' placeholder='占位文本' ><button type='button' class='btn btn-danger shanchu' style='margin-left:4px '>删除</button></div>";
        if( $(".spacing").length==0){
            $(".shangpin label").after(str)
            aa();
        }else{
            $(".spacing1:last").after(str)
            aa();
        }
    })
    aa();
    function aa () {
        var shanchu=$(".shanchu");
        shanchu.on('click',function () {
            $(this).prev().remove();
            $(this).remove();
        })
    }
   // 全局修改  可以外面套一个if  然后如果是1的情况下走 下面这个情况 2的话false 变true ， visibility:hidden;
    $(".quanjuxiugai").on("click",function () {
        $("form input").attr("disabled",false);
        $("form select").attr("disabled",false);
        $(".shanchu").css("visibility","visible");
        $(".zengjia").css("visibility","visible");
    })
})

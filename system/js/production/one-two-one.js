$(function () {
    //增加 删除功能
    $(".zengjia").on('click',function () {
        var isZengjia=$("tbody").children().hasClass("zengjiatr");
        var str='<tr class="">' +
            '<td><input type="text" style="width:100%;height:100%;border:none;text-align:center;"></td>' +
            '<td><input type="text" style="width:100%;height:100%;border:none;text-align:center;"></td>' +
            '<td><input type="text" style="width:100%;height:100%;border:none;text-align:center;"></td>' +
            '<td>' +
            '<form action="processBuy.jsp" method="get" >' +
            '<input type="text" name="item" value="admin" style="width:100%;height:100%;border:none;text-align:center;"/>' +
            '</form>' +
            '</td>' +
            '<td><button type="button" class="btn btn-danger shanchu">删除</button></td>' +
            '</tr>';
        aa();
        if(isZengjia){
            $(".zengjiatr").after(str);
            aa();
            bb();
        }else{
            $(".ZJtbody tr:last-child").before(str);
            aa();
            bb();
        }
    })
    aa();
    bb();
    function aa () {
        var shanchu=$(".shanchu");
        shanchu.on('click',function () {
            $(this).parent().parent().remove()
        })
    }
//    全局修改
    function bb() {
        var sw=$(".sw");
        var xiugai=$(".xiugai");
        var input11=$(".ZJtbody input");
        sw.on("click",function () {
            xiugai.css("display","block");
        })
        input11.on("click",function () {
            xiugai.css("display","block");
        })
    }


})
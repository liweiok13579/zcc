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
        var Tianjia=$(".Tianjia input");
        var sw=$(".sw");
        var xiugai=$(".xiugai");
        var input11=$(".ZJtbody input");
        sw.on("click",function () {
            xiugai.css("display","block");
        })
        input11.on("click",function () {
            xiugai.css("display","block");
        })
        Tianjia.on("click",function () {
            xiugai.css("display","block");
        })
    }


})
var elem = document.querySelector('.js-switch');
// var init = new Switchery(elem);
defaults = {
    color: '#64bd63' //开关打开的颜色
    ,
    secondaryColor: '#dfdfdf' //开关关闭的颜色
    ,
    className: 'switchery' //开关的名称
    ,
    disabled: false //开关是否可用
    ,
    disabledOpacity: 0.5 //开关的透明度
    ,
    speed: '0.1s' //开关的动画时间
}
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
    var switchery = new Switchery(html);
});
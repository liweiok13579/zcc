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
            $(this).parent().remove()
        })
    }
//    添加照片
    $(".file").change(function(){
        var fileImg = $(".fileImg");
        var explorer = navigator.userAgent;
        var imgSrc = $(this)[0].value;
        if (explorer.indexOf('MSIE') >= 0) {
            if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)) {
                imgSrc = "";
                alert(1)
                return false;

            }else{
                alert(2)
                fileImg.attr("src",imgSrc);
            }
        }else{
            if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)) {
                imgSrc = "";
                alert(3)
                return false;
            }else{
                var file = $(this)[0].files[0];
                var url = URL.createObjectURL(file);
                fileImg.attr("src",url);
                alert(4)
            }
        }
    })
//    锁死还是不锁死  java走这
    $("form input").attr("disabled",false);  //这是不锁死
//     $("form input").attr("disabled",true);  //这是锁死

})

$(function () {
    $('#date-range13-1').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
    //value输入几走几
    var shu=$(".Number")
    shu.change(function () {
        $(".spacing1").empty();
        var shunum=$(".Number").val();
        var str="<input type='text' class='form-control spacing' placeholder='占位文本' ><button type='button' class='btn btn-danger shanchu' style='margin-left:4px '>删除</button>";
        for(var i=0;i<shunum;i++){
            $(".spacing1").prepend(str)
        }
        aa();
    })
    aa();
    function aa () {
        var shanchu=$(".shanchu");
        shanchu.on('click',function () {
            $(this).prev().remove()
            $(this).remove()
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
                fileImg.attr("src","/img/default.png");
                return false;
            }else{
                fileImg.attr("src",imgSrc);
            }
        }else{
            if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)) {
                imgSrc = "";
                fileImg.attr("src","/img/default.png");
                return false;
            }else{
                var file = $(this)[0].files[0];
                var url = URL.createObjectURL(file);
                fileImg.attr("src",url);
            }
        }
    })
    //    添加照片2
    $(".file2").change(function(){
        var fileImg = $(".fileImg2");
        var explorer = navigator.userAgent;
        var imgSrc = $(this)[0].value;
        if (explorer.indexOf('MSIE') >= 0) {
            if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)) {
                imgSrc = "";
                fileImg.attr("src","/img/default.png");
                return false;
            }else{
                fileImg.attr("src",imgSrc);
            }
        }else{
            if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)) {
                imgSrc = "";
                fileImg.attr("src","/img/default.png");
                return false;
            }else{
                var file = $(this)[0].files[0];
                var url = URL.createObjectURL(file);
                fileImg.attr("src",url);
            }
        }
    })
//    锁死还是不锁死  java走这
    $("form input").attr("disabled",false);  //这是不锁死
    // $("form input").attr("disabled",true);  //这是锁死

})

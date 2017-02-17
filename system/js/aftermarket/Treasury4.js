$(function () {
    $('#date-range13-1').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
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
//    锁死还是不锁死  java走这 这两个只可以控制下面的  上面无效
    $("form input").attr("disabled",false);  //这是不锁死
    $("form input").attr("disabled",true);  //这是锁死

})

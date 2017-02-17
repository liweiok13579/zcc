
//滑动开关
slidePlay();
function slidePlay(){

    $(".slidePlay").each(function () {
        var flag=true;
        $(this).click(function () {
            if (flag) {
                $(this).find("span").animate({left: '+15px'},100, "linear", function () {
                    $(this).parent().css({"background": "#64BD63"});
                })
                flag = !flag;
            } else {
                $(this).find("span").animate({left: '0px'},100,"linear", function () {
                    $(this).parent().css({"background": "#bbb"});
                    flag = !flag;
                })
            }
        })
    })

}
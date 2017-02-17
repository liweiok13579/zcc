$(function() {
    getTime();
    setInterval(getTime, 1000);
    //顶部时间
    function getTime() {
        var data = new Date;
        var day = data.toLocaleDateString();
        var hours = data.getHours();
        var minutes = data.getMinutes();
        var seconds = data.getSeconds();
        $("#time").html(day + " " + (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds));
    }
    //顶部admin
    $(".btn").on('click', function() {
        var is = $(this).children('span').hasClass('icon-jiantouarrow487');
        if (!is) {
            $(this).children('span').removeClass('icon-jiantouarrow483').addClass('icon-jiantouarrow487').end().siblings('ul').removeClass('dropup').addClass('dropdown')
        } else {
            $(this).siblings('ul').addClass('dropup').end().children('span').removeClass('icon-jiantouarrow487').addClass('icon-jiantouarrow483');
            $(this).parents(".control").siblings().children('ul').removeClass('dropup').parents('.control').children('.btn').children('span').removeClass('icon-jiantouarrow483').addClass('icon-jiantouarrow487');
        }
    })

    //左侧导航
    $(".item_title").each(function(i, v) {
        $(this).on("click", function() {
            var isActive = $(this).parent().hasClass("active") && $(this).find("span").hasClass("active");
            if (!isActive) {
                $(this).parent().siblings().removeClass("active").find("span").removeClass("active").end().find("ul").slideUp();
                $(this).parent().addClass("active").find("span").addClass("active")
                    .end().find("ul").slideDown();
            } else {
                $(this).parent().removeClass("active").find("span").removeClass("active")
                    .end().find("ul").slideUp();
            };
        })
    })
    $(".box_left ").find("li").each(function() {
        $(this).on("click", function() {
            $(".box_left ").find("li").removeClass("active");
            $(this).addClass("active");
        })
    })


    // 导航栏的跳转
    //生产检修模块
    // click one_one
    $("#one_one").click(function() {
        $("#zc_iframe").attr("src", "production/turnaroundPlan.html")
    });

    // click one_two
    $("#one_two").click(function() {
        $("#zc_iframe").attr("src", "production/checkFlow(1-2).html")
    });

    // click one_five
    $("#one_five").click(function() {
        $("#zc_iframe").attr("src", "production/DailyMaintenance.html")
    });
    //售后模块
    // click 售后服务 2-2
    $("#two_one").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/collection(2-1).html");
    });
    // click 售后服务 2-2
    $("#two_two").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/program(2-2).html");
    });
    // click 售后服务 2-2
    $("#two_three").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/fault(2-3).html");
    });
    // click 售后服务 2-4
    $("#two_four").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/carGrade.html");
    });
     // click 售后服务 2-5
    $("#two_five").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/Refund.html");
    });
    // click 售后服务 2-6
    $("#two_six").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/Treasury.html");
    });
    // click 售后服务 2-7
     $("#two_seven").click(function() {
        $("#zc_iframe").attr("src", "./aftermarket/Questionnaire(2-7).html");
    });

    //配件修模块
    // click three_one
    $("#three_one").click(function() {
        $("#zc_iframe").attr("src", "./accessories/accessories（3-1）.html");
    });
    $("#three_two").click(function() {
        $("#zc_iframe").attr("src", "./accessories/accessories（3-1）.html");
    });
    $("#three_three").click(function() {
        $("#zc_iframe").attr("src", "./accessories/accessories（3-1）.html");
    })
    //仓库模块
    $("#four_one").click(function() {
        $("#zc_iframe").attr("src", "./warehouse/materiel.html");
    });



})

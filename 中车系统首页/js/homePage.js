$(function () {
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
})
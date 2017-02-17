$(function () {
    //分页部分
    $('#pageTool').Paging({pagesize:10,count:85,toolbar:true});


    $(".carGrade_box button").on("click", function () {
        layer.ready(function(){
            layer.open({
                type: 2,
                title: '故障分析报告',
                fix: false,
                maxmin: true,
                shadeClose: true,
                area: ['850px', '730px'],
                content: 'fault(2-5).html'
            });
        });
    })
})
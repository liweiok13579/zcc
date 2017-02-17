
$(function () {
    playAdd();//点击详情按钮
    //点击添加按钮 点击关闭
    function playAdd(){
        //点击添加按钮
        $(".process_one_a").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '备件调拨申请单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '70%'],
                    content: 'Treasury1.html'
                });
            });
        })
        //2
        $(".process_one_b").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '备件调拨申请单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '70%'],
                    content: 'Treasury2.html'
                });
            });
        })
        //3
        $("#process_one_f").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '配件装箱单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '80%'],
                    content: 'Treasury3.html'
                });
            });
        })
        //3
        $("#process_one_d").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '配件装箱单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '70%'],
                    content: 'Treasury4.html'
                });
            });
        })
    }
    $('#date-range13-1').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
    $('#date-range13-2').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });

})
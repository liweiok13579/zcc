$(function () {
    playAdd();//点击详情按钮
    //点击添加按钮 点击关闭
    function playAdd() {
        //点击添加按钮
        $(".asb").on("click", function () {
            layer.ready(function () {
                layer.open({
                    type: 2,
                    title: '配件收货单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '70%'],
                    content: 'Refund1.html'
                });
            });
        })
        //2
        $(".tuiku1").on("click", function () {
            layer.ready(function () {
                layer.open({
                    type: 2,
                    title: '配件退库单',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['70%', '70%'],
                    content: 'Refund2.html'
                });
            });
        })
    }
})
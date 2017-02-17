
$(function () {
    playAdd();//点击详情按钮

    //分页部分
    $('#pageToolbar').Paging({pagesize:10,count:85,toolbar:true});


    //点击添加按钮 点击关闭
    function playAdd(){
        //点击添加按钮
        $(".debug_box .add").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '调试单添加模块',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['850px', '650px'],
                    content: 'debug_add.html'
                });
            });
        })
        //点击详情按钮
        $(".debug_box .details").on("click", function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '调试单详情模块',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['850px', '650px'],
                    content: 'debug_add.html'
                });
            });
        })
    }


})




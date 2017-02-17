$(function () {
//    2-2页面维修方案查询
    var valRem = function (id) {
        var vale = id.val();
        id.on('focus', function () {
            $(this).val('');
        });
    };
    valRem($('#remVal'));
    valRem($('#remVal1'));
    valRem($('#remVal2'));
});

// 日期选择插件
$(function () {
    $('#date-range').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
});

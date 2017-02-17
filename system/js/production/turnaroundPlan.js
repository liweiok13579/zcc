$(function () {
    setdatepicker();
    play();
    playFile();
    gante();
    playswitch();
    //维修计划 日期选择
    function setdatepicker() {
        $(".datepicker").datepicker({
            language: "zh-CN",
            autoclose: true,//选中之后自动隐藏日期选择框
            clearBtn: true,//清除按钮
            format: "yyyy-mm-dd"//日期格式
        });
    }

    //维修计划
    function play() {
        //修改设置
        $(".amend").each(function () {
            var flag = true;
            var that = $(this).parent().parent();
            $(this).on("click", function () {
                if (flag) {
                    $(this).parent().parent().find("input").removeAttr("disabled").addClass("active");
                    $(this).parent().parent().find("select").removeAttr("disabled")
                    $(this).html("确定").css({"background": "#FFFF66","color":"#000"});
                    that.siblings().find(".amend").attr({"disabled": "fasle"}).next().attr({"disabled": "fasle"});
                    flag = !flag;
                }
                else {
                    $(this).parent().parent().find("input").attr({"disabled": "disabled"}).removeClass("active");
                    $(this).parent().parent().find("select").attr({"disabled": "disabled"})
                    $(this).html("修改").css({"background": "#428bca","color":"#fff"});
                    that.siblings().find(".amend").removeAttr("disabled").next().removeAttr("disabled");
                    flag = !flag;
                }
                // 计划停时
                var startday, endday, start, end, day;
                $("input").on("change", function () {
                    startday = that.find(".planstart").val().split("-");
                    endday = that.find(".planend").val().split("-");
                    start = new Date(startday[0], startday[1] - 1, startday[2]);
                    end = new Date(endday[0], endday[1] - 1, endday[2]);
                    day = parseInt(Math.abs(start - end) / 1000 / 60 / 60 / 24)
                    day += 1;
                    that.find(".stopTime").val(day);
                })
            })
            //删除设置
            $(".delete").on("click", function () {
                $(this).parent().parent().siblings().find(".amend").removeAttr("disabled").next().removeAttr("disabled");
                $(this).parent().parent().remove();
            })
        })
    }


    function playFile() {
        //上传文件
        $(".file").on("click", function () {
            $(this).siblings().removeAttr("disabled")
        })
        //添加检修计划
        $(".th_eleven>input").on("click",function () {
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '添加检修计划模块',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    area: ['750px', '480px'],
                    content: 'addPlan1-1.html'
                });
            });
        })
    }

    //甘特图展示
    function gante() {
        Highcharts.setOptions({
            lang: {
                contextButtonTitle: "图表导出菜单",
                decimalPoint: ".",
                downloadJPEG: "下载JPEG图片(ie 暂时不支持)",
                downloadPDF: "下载PDF文件(ie 暂时不支持)",
                downloadPNG: "下载PNG文件(ie 暂时不支持)",
                downloadSVG: "下载SVG文件(ie 暂时不支持)",
                /*downloadJPEG: "",
                 downloadPDF: "",
                 downloadPNG: "",
                 downloadSVG: "",*/
                drillUpText: "返回 {series.name}",
                loading: "加载中...",
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                noData: "没有数据",
                numericSymbols: ["千", "兆", "G", "T", "P", "E"],
                printChart: "打印当前图表",
                resetZoom: "恢复缩放",
                resetZoomTitle: "恢复图表",
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                thousandsSep: ",",
                weekdays: ["星期一", "星期二", "星期三", "星期三", "星期四", "星期五", "星期六", "星期天"]
            }
        });
        $('#gante').highcharts({
            chart: {
                // 设置图表的类型
                type: 'columnrange',
                // 是否调换 x y 轴
                inverted: true,
                backgroundColor: '#eee'
            },
            //
            exporting: {
                enabled: true
            },
            // credits: {
            //     enabled: false
            // },
            // 表格的头部
            title: {
                text: '记录时间 : 2016.12'
            },
            // 底部链接
            credits: {
                text: '查看本年度所有维修计划',
                href: ''
            },
            // X轴数据
            xAxis: {
                // X轴的数据
                // 一月<br>计划
                categories: ['车号', '车号', '车号', '车号', '车号',
                    '车号', '车号', '车号', '车号', '车号'
                ],
                // 边框宽度
                lineWidth: 1,
                // 边框颜色
                lineColor: "#1a96ef",
                // 刻度线的宽度
                tickWidth: 0,
                // 轴标签的水平对其方式
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    // 取消X轴的标识
                    // enabled: false,
                    // X轴的字体，颜色设置
                    style: {
                        // color:'red',
                        color: '#19a0f5', //颜色
                        fontSize: '14px' //字体
                    }
                },

                // minTickInterval: 设置最小的X轴的宽度
            },
            yAxis: {
                // 设置轴的最小值
                // min: 0.9,
                max: 31,
                // endOnTick: true,
                // startOnTick:false,
                // maxPadding: 1,
                gridLineColor: '#197F07',
                // 改变网格的颜色fff
                alternateGridColor: "#eee",
                title: {
                    text: ' 单位 ( 日 )'
                },
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        // color: 'green',
                        color: '#19a0f5', //颜色
                        fontSize: '14px' //字体
                    }
                },
                minTickInterval:1
            },
            tooltip: {
                valueSuffix: "日"
            },
            plotOptions: {
                columnrange: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return this.y;
                        }
                    }
                }
            },
            legend: {
                align: 'right', //水平方向位置
                verticalAlign: 'top', //垂直方向位置
                x: 0, //距离x轴的距离
                y: 40 //距离Y轴的距离
            },
            series: [{
                name: '计划 ( 到站 -- 出站 ) 时间',
                data: [
                    [2, 4],
                    [5, 15],
                    [3, 9],
                    [10, 19],
                    [6, 26],
                    [9, 25],
                    [8, 31],
                    [21, 25],
                    [18, 10]
                ]
            }, {
                name: '实际 ( 到站 -- 出站 ) 时间',
                data: [
                    [6, 4],
                    [8, 15],
                    [5, 9],
                    [4, 19],
                    [5, 26],
                    [9, 25],
                    [2, 31],
                    [8, 25],
                    [4, 10]
                ]
            }]
        });
    }

    //图标切换
    function playswitch() {
        var flag = true;
        $(".switch>button").on("click", function () {
            if (flag) {
                $(".gante").css({"display": "none"});
                $(".plan").css({"display": "block"});
                $(this).html('切换至图表页');
                flag = !flag;
            } else {
                $(".gante").css({"display": "block"});
                $(".plan").css({"display": "none"});
                $(this).html('切换至编辑页');
                flag = !flag;
            }
        })
    }

    //分页
    function getParameter(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    $(function () {
        var totalPage = 12;
        var totalRecords = 390;
        var pageNo = getParameter('pno');
        if (!pageNo) {
            pageNo = 1;
        }
        //生成分页
        //有些参数是可选的，比如lang，若不传有默认值
        kkpager.generPageHtml({
            pno: pageNo,
            //总页码
            total: totalPage,
            //总数据条数
            totalRecords: totalRecords,
            mode: 'click',//默认值是link，可选link或者click
            click: function (n) {
                // do something
                //手动选中按钮
                this.selectPage(n);
                return false;
            }
            /*		,lang				: {
             firstPageText			: '首页',
             firstPageTipText		: '首页',
             lastPageText			: '尾页',
             lastPageTipText			: '尾页',
             prePageText				: '上一页',
             prePageTipText			: '上一页',
             nextPageText			: '下一页',
             nextPageTipText			: '下一页',
             totalPageBeforeText		: '共',
             totalPageAfterText		: '页',
             currPageBeforeText		: '当前第',
             currPageAfterText		: '页',
             totalInfoSplitStr		: '/',
             totalRecordsBeforeText	: '共',
             totalRecordsAfterText	: '条数据',
             gopageBeforeText		: '&nbsp;转到',
             gopageButtonOkText		: '确定',
             gopageAfterText			: '页',
             buttonTipBeforeText		: '第',
             buttonTipAfterText		: '页'
             }*/
        });
    });
})

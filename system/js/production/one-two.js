$(function(){
    var delete1=$(".delete1");
    delete1.on('click',function () {
        $(this).parent().parent().remove()
    })
})
$(function () {
    $('a.show-option').click(function (evt) {
        evt.preventDefault();
        $(this).siblings('.options').slideToggle();
    });


    $('#date-range').dateRangePicker({
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

    $(function () {
        $(".sub").on('click', function () {
            window.location.href = "./accessories（3-1）.html"
        })
    })
});
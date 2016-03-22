$("#false-negative").popover({
    trigger: 'manual',
    placement: 'left',
    title: 'False Negative',
    content: 'False Negative yada yada yada'
})

$("#true-negative").popover({
    trigger: 'manual',
    placement: 'right',
    title: 'True Negative',
    content: 'True Negative yada yada yada',
    container: 'body' //allows to be wider than this container 
})

// On each button click, hide the currently displayed popover
// and show the next one.
$("#example").click(function () {
    //$("#test1").popover('show');
    setTimeout(function () {
        $('#false-negative').popover('show');
        $('#true-negative').popover('show');
    }, 1000); //delay popover for 1 sec
});

// This closes all popovers if you click anywhere except on a popover
// ref: http://stackoverflow.com/questions/11703093/how-to-dismiss-a-twitter-bootstrap-popover-by-clicking-outside
$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

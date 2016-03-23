$("#true-positive").popover({
    trigger: 'manual',
    placement: 'top',
    title: 'True Positive',
    content: '10 emails were correctly classified as Spam',
    container: 'body' //allows to be wider than this container 
})

$("#true-negative").popover({
    trigger: 'manual',
    placement: 'right',
    title: 'True Negative',
    content: '85 emails were correctly classified as Non-Spam',
    container: 'body' //allows to be wider than this container 
})

$("#false-negative").popover({
    trigger: 'manual',
    placement: 'left',
    title: 'False Negative',
    content: '5 emails, which were actual Spam, were not predicted as Spam '
})

$("#false-positive").popover({
    trigger: 'manual',
    placement: 'top',
    title: 'False Positive',
    content: 'No email was falsely predicted as Spam',
    container: 'body' //allows to be wider than this container 
})

$("#calculate-button").popover({
    trigger: 'manual',
    placement: 'right',
    title: 'Aditional Measures',
    content: 'By computing additional measures, we get can get more insight about the model',
    container: 'body' //allows to be wider than this container 
})

// On each button click, hide the currently displayed popover
// and show the next one.
$("#example-button").click(function () {
    //$("#test1").popover('show');
    setTimeout(function () {
        $('#true-positive').popover('show');
        $('#true-negative').popover('show');
        $('#false-negative').popover('show');
        $('#false-positive').popover('show');
        $('#calculate-button').popover('show');
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

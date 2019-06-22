// This is where it all goes :)
var options = {
    valueNames: ['title', 'category', 'type', 'company', 'country', 'state'],
    page: 20,
    pagination: true
};

var jobList = new List('jobs', options);

$("#form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $('.form-content').addClass('hidden');
        $('.form-message').removeClass('hidden');
    });
});
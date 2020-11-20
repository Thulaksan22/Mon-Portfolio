//click scroll
$('.scroll').click(function(e) {
    var sectionId = $(this).attr('data-sec-id')
        $('html,body').animate({
            scrollTop: $('#'+sectionId).offset().top},
            'slow');
    });
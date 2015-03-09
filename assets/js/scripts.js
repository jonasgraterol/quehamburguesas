
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/clasica.jpg"
    , "assets/img/backgrounds/panes.jpg"
    , "assets/img/backgrounds/tocineta.jpg"
    , "assets/img/backgrounds/doble.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = 61 * 24 * 60 * 60 * 1000 + now.valueOf();
    
    $('.timer').countdown("2015/04/23", function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

    /*
        Tooltips
    */
    $('.social a.facebook').tooltip();
    $('.social a.twitter').tooltip();
    $('.social a.dribbble').tooltip();
    $('.social a.googleplus').tooltip();
    $('.social a.pinterest').tooltip();
    $('.social a.flickr').tooltip();
    $('.social a.instagram').tooltip();

    /*
        Subscription form
    */
    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });

});


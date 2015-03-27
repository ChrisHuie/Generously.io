/**
 * Created by MainEvent on 3/26/15.
 */

$(function() {
    function spinner($element) {
        var words = [];

        var list = $('li', $element);
        list.each(function() {
            words.push($(this).text());
        });
        list.remove();

        var $ss = $('#spinner-show');

        var i = 0, i_next = 1;

        $('.next em', $ss).text(words[i_next]);
        $ss.width($('.current').width());

        setInterval(function() {
            $ss.addClass('swap');
            i = i_next;
            i_next++;
            if(i_next >= words.length) i_next = 0;
            $ss.width($('.next em').width());
            setTimeout(function() {
                $('.next em', $ss).text(words[i_next]);
                $('.current', $ss).text(words[i]);
                $ss.removeClass('swap');
                console.log('swap!');
            }, 600);
        }, 3800);
    }

    if($('#spinner').length) {
        spinner($('#spinner'));
    }
});

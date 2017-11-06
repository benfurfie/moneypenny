var $ = require('jquery');

var $checkbox, $toggleSwitch;

$checkbox = $('input.toggle__checkbox');
$toggleSwitch = $('.toggle__switch');
$toggleContainer = $('.toggle__container');

$checkbox.change(function(){
    var $this;
    $this = $(this);

    if ($this[0].checked) {
        $toggleSwitch.addClass('toggle__switch--active');
        $toggleContainer.toggleClass('toggle__container--active');
    } else {
        $toggleSwitch.removeClass('toggle__switch--active');
        $toggleContainer.toggleClass('toggle__container--active');
    }
})

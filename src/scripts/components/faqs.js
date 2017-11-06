var $ = require('jquery');

var $faq;

$faqs = $('.faqs__question');

$faqs.click(function(){
    var $this, $answer;
    $this = $(this);
    $answer = $this.next();
    $svg = $this.find('svg');

    $svg.toggleClass('svg--active');
    $answer.toggleClass('faqs__answer--active');

});

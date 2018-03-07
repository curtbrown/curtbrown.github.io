// Stats (Dropcap) Functionality

// Styling Pipes

$(document).ready(function () {
  $('.dropcap').each(function () {
    $(this).html($(this).html().replace(/\|/g, '<span style="font-weight: 300 !important; "> | </span>'));
  });
});

// Main Functionality

$('.dropcap').click(function () {
  $(this).next('.popup').toggleClass('pop-transition');
});
 $('.dropcap').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('.dropcap').click();//Trigger search button click event
        }
    });
$('.glyphicon-remove-circle').click(function () {
  $(this).closest('.popup').toggleClass('pop-transition');
});
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
$('.dropcap span').animateCss('pulse');


// Conclusion Page

$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
$('ol li').animateCss('fadeIn');

// Popover
$(function () {
  $('[data-toggle="popover"]').popover();
});

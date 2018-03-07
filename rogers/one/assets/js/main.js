/** Graphic Tabs **/

   // Add/Remove active class from anchor in graphic tab
   // Used to set font color of active tab
   $('.tab-graphic a').click(function() {
      $('a.active').removeClass('active');
      $(this).addClass('active');
   });
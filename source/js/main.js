(function($){
  $(document).ready(function(){
    //___________________/Counter/___________________//
    (function(){
      $('.counter').counterUp();
    })();

    //___________________/Hamburger/___________________//
    (function(){
      var $checkbox = $('#hamburger__menu-input');
      var menuHeight = $('.hamburger__menu-wrap').height();
      var headerheight = $('header').height();
      var bodyWidth    = $('body').width();

      $('.hamburger__menu-wrap').css({'width': bodyWidth - 150, 'left' :  -bodyWidth});
        $checkbox.change(function(){
          var checked = $(this).prop('checked');
          console.log(checked);

          if(checked == true){
            $('.wrapper').css('height', menuHeight + headerheight);
            $('main').addClass('main-covered');

            $(document).mouseup(function (e){ 
              var div = $(".hamburger__menu"); 
              if (!div.is(e.target)
                  && div.has(e.target).length === 0) {
                  $('.wrapper').css({'min-height':'100%', 'height':'auto'});
                  $('main').removeClass('main-covered');
                  $("#hamburger__menu-input").prop("checked", false);
              }
            });
          }
          else{
            $('.wrapper').css({'min-height':'100%', 'height':'auto'});
            $('main').removeClass('main-covered');
          }
        })
    })();
  })

})(jQuery)
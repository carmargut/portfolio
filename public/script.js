
$(document).ready(function() {

  var html;
  var total = $(".js-Content .js-Content-text").length;

   $(document).on('click', '.js-ProgressBar-caption', function(e){
     e.preventDefault();
     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 1000);
   })


  $(".js-Content-title").each(function(i){
    html  = '<div class="ProgressBar-bar js-ProgressBar-bar">';
    html += '<a href="#' + $(this).data('id') + '" data-scroll="' + $(this).data('id') + '" class="ProgressBar-caption scrolly js-ProgressBar-caption">' + $(this).text() + '</a>';
    html += '<span class="ProgressBar-avancement js-ProgressBar-avancement"></span>';
    html += '<span class="ProgressBar-circle js-ProgressBar-circle"></span>';
    html += '</div>';

    $('.js-ProgressBar-wrapper').append(html);
  })

  $(window).scroll(function (){

    var wrapper_height = $(".js-ProgressBar-bar").outerHeight();
    var top = $(this).scrollTop();
    var bottom = top + $(window).height();

    if( $('.js-Content').offset().top - top <= 10){
      $('.js-ProgressBar').css({position : 'fixed', top : '25px'})
    }else{
      $('.js-ProgressBar').css({position : 'absolute', top : '147px'})
    }

    $(".js-Content .js-Content-text").each(function(i){
      var this_top = $(this).offset().top;
      var height = $(this).outerHeight();
      var this_bottom = this_top + height;
      var percent = 0;

      if (top >= this_top && top <= this_bottom){
        percent = ( (top - this_top) / (height - wrapper_height) ) * 100;
      }else if (top > this_bottom) {
        percent = 100;
        $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-avancement").css("height", percent + "%");
      }
      if( i == total - 1 && Math.round(this_bottom) <= Math.round(bottom) ){ percent = 100; }

      $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-avancement").css("height", percent + "%");

      if( percent > 0){
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-circle").addClass('ProgressBar-circle--active');
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-avancement").addClass('ProgressBar-avancement--active');
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-caption").addClass('ProgressBar-caption--active');
      }else{
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-circle").removeClass('ProgressBar-circle--active');
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-avancement").removeClass('ProgressBar-avancement--active');
          $(".js-ProgressBar-bar:eq("+i+") .js-ProgressBar-caption").removeClass('ProgressBar-caption--active');
      }

    })

  })

})

pace.start()

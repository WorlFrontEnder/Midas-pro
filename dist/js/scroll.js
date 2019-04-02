$(document).ready(function() {
    $(function() {
        $('.header .header-in .top-menu li a').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').stop().animate({
                scrollTop: target.offset().top
              }, 1500);
              return false;
            }
          }
        });
      });    

      $(function() {
        $('.header-middle .header-left .header-btn').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').stop().animate({
                scrollTop: target.offset().top
              }, 1500);
              return false;
            }
          }
        });
      });    
});


                  $(document).ready (function() {
                     if ( navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                        if (window.matchMedia('(max-width: 991px)').matches){
                          $('#search').css("margin-top", "120px");     
                        }
                     }
                  });
                  $(document).ready (function() {
                    if (window.navigator.userAgent.indexOf("Edge") > -1) {
                       if (window.matchMedia('(max-width: 991px)').matches){
                         $('#search').css("margin-top", "120px");     
                       }
                    }
                 });

                  $(document).ready(function(){
                    $('#button-menu').click(function(){
                      $('#icon-parent').css({"display":"block","background-color": "rgba(0, 0, 0, 0.2)"});
                      $('#icon-menu').css("transform", "translateX(250px)");
                      $('#button-menu').css("aria-expanded", "true");                     
                    });
                  });

                 $(document).ready(function(){
                    $('#back-home').click(function(){
                      $("#button-menu").attr("aria-expanded","false");
                      $("#icon-parent").attr("aria-hidden","true");
                      $('#icon-parent').css({"display":"none","background-color": "rgba(0, 0, 0, 0)"});
                      $('#icon-menu').css("transform", "translateX(0px)");
                    });
                  });

                  $(document).ready(function(){
                    $('#right').click(function(){
                      $('#icon-parent').css({"display":"none","background-color": "rgba(0, 0, 0, 0)"});
                      $('#icon-menu').css("transform", "translateX(0px)");
                    });
                  });

                  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
                      if (!$(this).next().hasClass('show')) {
                        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                      }
                      var $subMenu = $(this).next('.dropdown-menu');
                      $subMenu.toggleClass('show');
                      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                        $('.dropdown-submenu .show').removeClass('show');
                      });
                    return false;
                  });
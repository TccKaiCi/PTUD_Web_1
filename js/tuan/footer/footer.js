$( window ).resize(function() {
    $(document).ready (function() {        
          if (window.matchMedia('(max-width: 575px)').matches){
            $('#edit-desktop').attr("href", "#collapseExample");
            $('#collapseExample').attr("class","collapse");
            $('#edit-desktop1').attr("href", "#collapseExample1");
            $('#collapseExample1').attr("class","collapse");
            $('#edit-desktop2').attr("href", "#collapseExample2");
            $('#collapseExample2').attr("class","collapse");
          }else{
            $('#edit-desktop').attr("href", "");
            $('#collapseExample').attr("class","");
            $('#edit-desktop1').attr("href", "");
            $('#collapseExample1').attr("class","");
            $('#edit-desktop2').attr("href", "");
            $('#collapseExample2').attr("class","");
          }   
    });
  });
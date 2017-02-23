

$(document).ready(function(){
    $('#ticket').hide();
    $('.modal').modal();    
    //$('.carousel').carousel();
    $('.carousel-slider').carousel({fullWidth: true});        
    $('.carousel-slider').slider({full_width: true});//slider init
    autoplay();    
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5000);
    };
    $('#IDModal').modal('open');    
     $('#admit').click(function(){
        $('#ticket').toggle("slow");
     });
     
  });

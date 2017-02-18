
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    //$('#LoginModal').modal();
    //$('#VideoModal').modal();
    $('.modal').modal();    
    //$('.carousel').carousel();
    $('.carousel-slider').carousel({fullWidth: true});        
    $('.carousel-slider').slider({full_width: true});//slider init
    autoplay();
    //$('.modal-trigger').leanModal();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5000);
    };
    

  });

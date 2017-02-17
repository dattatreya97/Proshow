
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#LoginModal').modal();
    $('#SignUpModal').modal();
    $('.carousel-slider').carousel({fullWidth: true});        
    $('.carousel-slider').slider({full_width: true});//slider init
    autoplay();

    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5000);
    };
    $('.parallax').parallax();
    
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  });

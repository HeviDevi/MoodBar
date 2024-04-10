$(document).ready(function () {
    $('#btn').click(function () {
      $('.modal-content').css('animation-play-state', 'running');
      
      setTimeout(function () {
        $('#exampleModal').modal('hide');
        
        // Delay showing the form slightly to ensure the modal animation completes
        $('.mood-container').addClass('show-form');
      }, 800); // Match the duration of the spinWipeOut animation
    });
  });
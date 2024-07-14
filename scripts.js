$(document).ready(function(){
    $('.project-card').hover(function(){
        var target = $(this).data('target');
        $('.project-image').removeClass('active');
        $(target).addClass('active');
        $('.project-card').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    $('.carousel-item img').hover(
        function() {
            $(this).attr('src', 'https://via.placeholder.com/800x400?text=Hover+Image'); // Change to the hover image URL
        },
        function() {
            $(this).attr('src', $(this).data('original-src'));
        }
    );
});


$(document).ready(function() {
    $('#exampleModal').on('submit', function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: 'https://getform.io/f/awngqrzb', // replace with your endpoint URL
        data: formData,
        success: function(data) {
          console.log('Form submitted successfully!');
        },
        error: function(xhr, status, error) {
          console.log('Error submitting form:', error);
        }
      });
    });
  });
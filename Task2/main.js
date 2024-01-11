
$(function() {
    let images = [
        'images/hero.jpg',
        'images/1.jpg',
        'images/2(1).jpg',
        'images/2.jpg',
        'images/work-7.jpg'
    ];
    let imagesSlider = $('.images');
    images.forEach(function(image) {
        let slide = $('<div class="slide"><img src="' + image + '" alt="Slide Image"></div>');
        imagesSlider.append(slide);
    });

    let changingTime;
    function startSlider() {
        changingTime = setInterval(nextSlide, 2000); 
    }

    startSlider(); 
    function nextSlide() {
        imagesSlider.animate(500, function() {
            // Move the first slide to the end after animation
            $(this).append($('.slide:first')).css({'margin-left': 0});
        });
    }

    // Pause btn
    $('#stop').click(function() {
        clearInterval(changingTime);
    });
});

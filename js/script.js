// Create a function that will talk to the container in the HTML
function slider() {
    // Store slides
    let slides = document.querySelectorAll('#slides .slide');

    // Current slide
    let currentSlide = 0;

    // Time interval between slides
    let slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        // Remove .showing from currentSlide
        slides[currentSlide].className = 'slide';
        // Add 1 to currentSlide - using % operator to cycle back to 0
        currentSlide = (currentSlide+1)%slides.length;

        slides[currentSlide].className = 'slide showing';
    }
}
slider();

// JQuery - Testimonial
$(document).ready(function() {
    $("#testimonialTwo, #leftArrow").hide();
    $("#rightArrow").click(function() {
        $("#testimonialOne, #rightArrow").hide();
        $("#testimonialTwo, #leftArrow").show();
        $(".arrow-inner").addClass('flex-end');
    });
    $("#leftArrow").click(function() {
        $("#testimonialTwo, #leftArrow").hide();
        $("#testimonialOne, #rightArrow").show();
        $(".arrow-inner").removeClass('flex-end');
    });
});

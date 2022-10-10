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

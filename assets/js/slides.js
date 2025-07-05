document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    
    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.display = "none"; 
        });

        index++;
        if (index > slides.length) { index = 1; }

        slides[index - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
});

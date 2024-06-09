function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("errorMessage");

    if (fullName === "" || email === "" || message === "") {
        errorMessage.textContent = "All fields are required!!";
        errorMessage.style.color = "red";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel .slide');
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
            slide.style.animationName = 'fade-in';
        } else {
            slide.style.display = 'none';
            slide.style.animationName = '';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlides();
}

prevBtn.addEventListener('click', () => {
    prevSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
});

setInterval(nextSlide, 3000);

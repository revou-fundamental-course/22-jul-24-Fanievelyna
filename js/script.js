document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const images = [
        'https://picsum.photos/800/150?random=1',
        'https://picsum.photos/800/150?random=2',
        'https://picsum.photos/800/150?random=3',
        'https://picsum.photos/800/150?random=4'
    ];
    let currentImageIndex = 0;

    function changeBannerImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    // Change image every 3 seconds (3000 milliseconds)
    setInterval(changeBannerImage, 3000);

    // Initialize with the first image
    banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
});



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function(event) {
        validateForm(event);
    });
});

function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    // Log the form element values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Interest:', interest);

    // Get the error display elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const interestError = document.getElementById('interestError');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    interestError.textContent = '';

    // Flag to track if form is valid
    let isValid = true;

    // Name validation
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Email is not valid.';
        isValid = false;
    }

    // Interest validation
    if (interest === '') {
        interestError.textContent = 'Please select an interest.';
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        console.log('Form is valid. Submitting...');
        document.getElementById('contactForm').submit();
    } else {
        console.log('Form is not valid. Correct errors and try again.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const typed = new Typed('#typed', {
        strings: [
            'Business Management Student',
            'Technology Enthusiast',
            'Football Fan',
            'Based in Manchester'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
    });

    // Mobile menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thanks for your message! I\'ll get back to you soon.');
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form');
        });
    });
});


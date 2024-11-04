document.addEventListener('DOMContentLoaded', function() {
  
    // Football animation
    const football = document.getElementById('football');
    const container = document.getElementById('football-container');
    let position = 0;
    let direction = 1;
    let bounce = 0;
  
    function animateFootball() {
      position += 2 * direction;
      bounce = Math.abs(Math.sin(position * 0.05) * 40);
  
      football.style.left = `${position}px`;
      football.style.bottom = `${bounce}px`;
  
      if (position > container.offsetWidth - football.offsetWidth) {
        direction = -1;
      } else if (position < 0) {
        direction = 1;
      }
  
      requestAnimationFrame(animateFootball);
    }
  
    animateFootball();
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


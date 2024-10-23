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
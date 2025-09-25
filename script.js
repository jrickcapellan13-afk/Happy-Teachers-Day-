const card = document.getElementById('card');

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
  
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

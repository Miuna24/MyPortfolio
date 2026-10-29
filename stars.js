(() => {
  const logo = document.querySelector('.image2');
  if (!logo) return;

  logo.setAttribute('tabindex', '0');
  logo.setAttribute('role', 'button');
  logo.setAttribute('aria-label', 'Toggle falling stars');

  const toggleStars = (event) => {
    if (event) event.preventDefault();

    const existing = document.querySelector('.falling-stars');
    if (existing) {
      existing.remove();
      logo.setAttribute('aria-pressed', 'false');
      return;
    }

    const layer = document.createElement('div');
    layer.className = 'falling-stars';
    layer.setAttribute('aria-hidden', 'true');

    const symbols = ['✦', '✧', '✶', '·', '•'];
    for (let i = 0; i < 72; i += 1) {
      const star = document.createElement('span');
      star.className = 'falling-star';
      star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      star.style.left = `${Math.random() * 100}%`;
      star.style.setProperty('--star-size', `${8 + Math.random() * 16}px`);
      star.style.setProperty('--star-delay', `${Math.random() * 3}s`);
      star.style.setProperty('--star-duration', `${4 + Math.random() * 5}s`);
      star.style.setProperty('--star-drift', `${-100 + Math.random() * 200}px`);
      star.style.setProperty('--star-opacity', `${0.45 + Math.random() * 0.55}`);
      layer.appendChild(star);
    }

    document.body.appendChild(layer);
    logo.setAttribute('aria-pressed', 'true');
  };

  logo.addEventListener('click', toggleStars);
  logo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleStars(event);
    }
  });

})();

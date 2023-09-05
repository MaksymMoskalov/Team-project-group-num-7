(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const body = document.body;

  const lockScroll = () => {
    body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
        lockScroll(); 
        modalBackdrop.style.display = 'block';
      } else {
        unlockScroll(); 
        modalBackdrop.style.display = 'none';
      }
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    unlockScroll();
    modalBackdrop.style.display = 'none';
  });
})();

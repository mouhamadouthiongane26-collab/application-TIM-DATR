(() => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-page]').forEach((link) => {
    if (link.dataset.page === path) link.classList.add('active');
  });
})();

(function ensureEmbedded() {
  if (!window.parent || window === window.parent) {
    const redirectPath = location.pathname;
    sessionStorage.setItem('redirectPath', redirectPath);
    location.href = '/index.html';
  }
})();
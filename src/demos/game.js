(function () {
  // Force HTTPS.
  if ((!window.location.port || window.location.port === '80') &&
      location.protocol !== 'https:') {
    window.location.protocol = 'https:';
  }

  navigator.game.authenticate();
})();

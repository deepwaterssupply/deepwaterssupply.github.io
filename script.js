// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fathom gauge: maps scroll position to a depth marker + meter readout
(function () {
  var marker = document.getElementById('fathomMarker');
  var readout = document.getElementById('fathomReadout');
  var rail = document.querySelector('.fathom__rail');
  if (!marker || !readout || !rail) return;

  var MAX_METERS = 60; // depth at the bottom of the page

  function update() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

    var railHeight = rail.clientHeight;
    marker.style.top = (progress * railHeight) + 'px';

    var meters = Math.round(progress * MAX_METERS);
    readout.textContent = meters + 'm';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

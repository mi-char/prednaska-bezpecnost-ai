// Zvýraznění aktuální kapitoly v obsahu. Stránka funguje i bez tohoto skriptu.
(function () {
  if (!('IntersectionObserver' in window)) return;
  var links = {};
  document.querySelectorAll('.toc a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var current = null;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        if (current) current.classList.remove('current');
        current = links[e.target.id] || null;
        if (current) current.classList.add('current');
      }
    });
  }, { rootMargin: '0px 0px -70% 0px' });
  document.querySelectorAll('section.chapter[id]').forEach(function (s) { if (links[s.id]) io.observe(s); });
})();

// MC Air Brothers — shared site behaviour
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var toggle = document.querySelector('.menu-toggle');
    var drawer = document.querySelector('.mobile-nav');
    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        drawer.classList.toggle('open');
      });
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { drawer.classList.remove('open'); });
      });
    }
    // contact form (only on contact page)
    var form = document.getElementById('quote-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(form);
        var name = (data.get('name') || '').toString().trim();
        var phone = (data.get('phone') || '').toString().trim();
        var service = (data.get('service') || '').toString();
        var message = (data.get('message') || '').toString().trim();
        var lines = [
          'Hi MC Air Brothers, I\u2019d like a quote.',
          name ? 'Name: ' + name : '',
          phone ? 'Phone: ' + phone : '',
          service ? 'Service: ' + service : '',
          message ? 'Details: ' + message : ''
        ].filter(Boolean);
        var url = 'https://wa.me/18764784799?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank');
      });
    }
  });
})();

/* Capa animada: cria a camada de efeitos sobre a foto da abertura.
   Enquadramento igual ao CSS da foto: object-fit: cover; object-position: right center. */
(function () {
  var IW = 1672, IH = 941;
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'true');

  function add(cls, style) {
    var el = document.createElement('i');
    el.className = cls;
    if (style) el.setAttribute('style', style);
    layer.appendChild(el);
  }
  add('qs-fx-glow');
  /* fumaça branca: bico do extintor -> lixeira */
  [[0, 2.2, 10, -1, 3.2], [0.25, 2.4, 12, 2, 3.6], [0.5, 2.1, 9, -3, 3.0], [0.75, 2.5, 13, 4, 3.8],
   [1.0, 2.3, 11, -2, 3.4], [1.25, 2.6, 8, 3, 3.2], [1.5, 2.2, 12, -4, 3.7], [1.75, 2.4, 10, 1, 3.3],
   [2.0, 2.5, 13, 5, 4.0], [2.25, 2.3, 9, -2, 3.1]].forEach(function (p) {
    add('qs-fx-puff', '--dl:' + p[0] + 's;--d:' + p[1] + 's;--dx:' + p[2] + 'cqw;--dy:' + p[3] + 'cqw;--s:' + p[4]);
  });
  /* respingo: a fumaça bate na lixeira e se espalha para todos os lados */
  [[0, -7, -6], [.3, -3, -9], [.6, 2, -7], [.9, -8, 1], [1.2, 3, 5], [1.5, -5, 6], [1.8, 0, -10], [2.1, 4, -3]].forEach(function (p) {
    add('qs-fx-splash', '--dl:' + p[0] + 's;--dx:' + p[1] + 'cqw;--dy:' + p[2] + 'cqw');
  });
  /* fogo: línguas sobre a lixeira */
  [[93.6, 60, .8, 0], [95.4, 57, 1, .2], [97, 60, .7, .1], [98.6, 55, 1.05, .35], [96.2, 63, .9, .5]].forEach(function (f) {
    add('qs-fx-flame', 'left:' + f[0] + '%;top:' + f[1] + '%;--d:' + f[2] + 's;--dl:' + f[3] + 's');
  });
  /* fumaça escura */
  [[0, 3.6, -1], [1.2, 4, -2.5], [2.4, 3.4, 0]].forEach(function (s) {
    add('qs-fx-smoke', '--dl:' + s[0] + 's;--d:' + s[1] + 's;--dx:' + s[2] + 'cqw');
  });
  /* faíscas */
  [[94.5, 0, 2, 1.5], [96, .6, 2.4, 2.5], [97.5, 1.1, 1.8, 3], [95.2, 1.6, 2.2, -1], [98.2, .3, 2.6, 2]].forEach(function (k) {
    add('qs-fx-spark', '--x:' + k[0] + '%;--dl:' + k[1] + 's;--d:' + k[2] + 's;--dx:' + k[3] + 'cqw');
  });
  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));

  function place() {
    var w = photo.clientWidth, h = photo.clientHeight;
    if (!w || !h) return;
    var iw = img.naturalWidth || IW, ih = img.naturalHeight || IH;
    var s = Math.max(w / iw, h / ih);
    var rw = iw * s, rh = ih * s;
    layer.style.width = rw + 'px';
    layer.style.height = rh + 'px';
    layer.style.left = (w - rw) + 'px';
    layer.style.top = ((h - rh) / 2) + 'px';
  }
  place();
  img.addEventListener('load', place);
  window.addEventListener('resize', place);
  if (window.ResizeObserver) new ResizeObserver(place).observe(photo);
})();

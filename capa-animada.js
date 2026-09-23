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
  /* fumaça branca do jato: cada nuvem nasce já em cima do jato pintado na
     foto e só balança um pouco no lugar (em vez de UM ponto crescendo do
     bico até a lixeira, que numa distância longa vira uma bolha enorme
     cobrindo o caminho todo). O início do jato (56,9%, 54,6%) foi medido
     na própria foto — é a ponta do bico, onde o branco começa; a nuvem
     não pode nascer antes disso.
     [atraso, duração, nasce em quê% da largura, quê% da altura, quanto anda, quanto sobe/desce, o quanto cresce] */
  [[0.00, 2.0, 63, 58.5, 5, 3, 1.8], [0.25, 2.2, 66, 59, 5, 3, 1.9], [0.50, 1.9, 69, 60, 5, 3, 1.9],
   [0.75, 2.1, 72, 61, 5, 3, 2.0], [1.00, 2.3, 75, 62, 5, 3, 2.1], [1.25, 2.0, 78, 62.5, 5, 3, 2.0],
   [1.50, 2.2, 80, 63, 5, 3, 2.1], [1.75, 1.9, 82, 63.5, 5, 3, 2.2], [2.00, 2.1, 84, 64, 6, 3, 2.2],
   [2.25, 2.3, 71, 61, 6, 3, 2.0]].forEach(function (p) {
    add('qs-fx-puff', 'left:' + p[2] + '%;top:' + p[3] + '%;--dl:' + p[0] + 's;--d:' + p[1] + 's;--dx:' + p[4] + 'cqw;--dy:' + p[5] + 'cqw;--s:' + p[6]);
  });
  /* respingo: a fumaça bate na lixeira e se espalha para todos os lados */
  [[0, -7, -6], [.3, -3, -9], [.6, 2, -7], [.9, -8, 1], [1.2, 3, 5], [1.5, -5, 6], [1.8, 0, -10], [2.1, 4, -3]].forEach(function (p) {
    add('qs-fx-splash', '--dl:' + p[0] + 's;--dx:' + p[1] + 'cqw;--dy:' + p[2] + 'cqw');
  });
  /* fogo: línguas sobre a lixeira (posição refeita para a foto nova, com o
     balde mais ao centro da imagem em vez de colado na borda direita) */
  [[76.4, 58, .8, 0], [78.0, 54, 1, .2], [79.6, 58, .7, .1], [81.2, 52, 1.05, .35], [80.0, 62, .9, .5]].forEach(function (f) {
    add('qs-fx-flame', 'left:' + f[0] + '%;top:' + f[1] + '%;--d:' + f[2] + 's;--dl:' + f[3] + 's');
  });
  /* faíscas — nascem antes da fumaça no HTML de propósito, pra ficarem por
     baixo dela quando a fumaça preta passa por cima (senão sobravam só os
     pontinhos brilhando acesos em cima do preto, tipo "olhos" no escuro) */
  [[76.8, 0, 2, 1.5], [78.4, .6, 2.4, 2.5], [80, 1.1, 1.8, 3], [77.6, 1.6, 2.2, -1], [81.2, .3, 2.6, 2]].forEach(function (k) {
    add('qs-fx-spark', '--x:' + k[0] + '%;--dl:' + k[1] + 's;--d:' + k[2] + 's;--dx:' + k[3] + 'cqw');
  });
  /* fumaça escura */
  [[0, 3.6, -1], [1.2, 4, -2.5], [2.4, 3.4, 0]].forEach(function (s) {
    add('qs-fx-smoke', '--dl:' + s[0] + 's;--d:' + s[1] + 's;--dx:' + s[2] + 'cqw');
  });
  /* fumaça preta "engolindo" o fogo: de vez em quando uma nuvem grande nasce
     em cima da própria chama e cobre ela por um instante antes de subir e
     sumir — dá a sensação de que o extintor está indo aos poucos apagando o
     fogo, que reaparece entre uma passada e outra. */
  [[0.6, 4.4, 79, 59], [3.2, 4.8, 80.5, 57], [5.8, 4.2, 78, 61]].forEach(function (b) {
    add('qs-fx-smoke qs-fx-smoke-big', 'left:' + b[2] + '%;top:' + b[3] + '%;--dl:' + b[0] + 's;--d:' + b[1] + 's;--dx:0cqw');
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

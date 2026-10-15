/* Квіз → Tracking Hub (бот продажів). Замінює старий tracker.js: без токена бота і без запитів у Telegram з браузера.
   Сторінка квізу кличе Track.step / answer / click / cta як і раніше; l.js (/_t/l.js) надсилає прогрес у систему,
   а бот продажів сповіщає баєрів цього сайту. Поки l.js не завантажився — виклики чекають у черзі. */
window.thQuizCfg = { name: 'Zubalenok Quiz', total: 8 }; // назва квізу в боті і кількість питань (крок після останнього — результат)
(function () {
  var q = (window.thQuizQ = window.thQuizQ || []);
  function call(m) {
    return function () {
      var a = Array.prototype.slice.call(arguments);
      try {
        if (window.thQuiz) window.thQuiz[m].apply(null, a);
        else q.push([m, a]);
      } catch (e) {}
    };
  }
  window.Track = { step: call('step'), answer: call('answer'), click: call('click'), cta: call('cta') };
})();

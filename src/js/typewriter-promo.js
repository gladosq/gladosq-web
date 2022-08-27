const spanAnimation = document.querySelector('.promo__animation');

const text = ['web-разработчика'];

document.addEventListener('DOMContentLoaded', function(evt) {
  for (let i = 0; i <= 15; i++) {
    (function(index) {
      setTimeout(function() {
        spanAnimation.innerHTML = text[0].substring(0, index + 1);
      }, i * 130);
    })(i);
  }
})

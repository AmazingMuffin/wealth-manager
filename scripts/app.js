var appVersion = 1.0;


$(document).ready(function () {
  loadFooter();
});

function showMessage(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: 'bottom', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
  }).showToast();
}

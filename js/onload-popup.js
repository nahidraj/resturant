$(document).ready(function () {
  if (sessionStorage.getItem('#popup') !== 'true') {
    $('#popup').modal('show');
    sessionStorage.setItem('#popup', true);
  }
});
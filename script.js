document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

var a = window.document.getElementById(btn-div)
a.addEventListener('click', menos)
function clicar() {
a.innerText = 'Menos'
};
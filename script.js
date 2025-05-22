document.addEventListener('DOMContentLoaded', function () {
  const temaBtn = document.getElementById('tema');

  temaBtn.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
  });

  document.getElementById('sobre').addEventListener('click', () => {
    window.location.href = 'sobremim.html';
  });

  document.getElementById('home').addEventListener('click', () => {
    location.reload();
  });
});

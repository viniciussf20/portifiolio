document.getElementById('home').addEventListener('click', () => {
  window.location.href = 'home.html';
});

document.getElementById('sobre').addEventListener('click', () => {
  location.reload();
});

const btnTema = document.getElementById('tema');
const body = document.body;

function aplicarTema() {
  const temaAtual = localStorage.getItem('tema') || 'claro';
  if (temaAtual === 'escuro') {
    body.classList.add('tema-escuro');
  } else {
    body.classList.remove('tema-escuro');
  }
}

btnTema.addEventListener('click', () => {
  const novoTema = body.classList.contains('tema-escuro') ? 'claro' : 'escuro';
  localStorage.setItem('tema', novoTema);
  aplicarTema();
});

aplicarTema();

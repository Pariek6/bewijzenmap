const button = document.getElementById('button');
let vlak = document.querySelectorAll('.vlakje')

const schuif = () => {
  for(i = 0; i < vlak.length; i++) {
      vlak[i].classList.toggle('vlakje--schuif-uit');
  }
};

button.addEventListener('click', schuif)

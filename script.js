//alert("Hola Mundo <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Reconoces una accion por que tiene parentesis despues del nombre de la accion
//A veces tiene el operador punto
typewriter
  .pauseFor(2000) //milisegundos
  .typeString('Gabriela Limón')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora en progreso')
  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();

let audioElement; // Variable para almacenar el objeto Audio
const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
mainElement.addEventListener('click', function () {
  if (!audioElement) {
    audioElement = new Audio('assets/music/man.mp3');
    audioElement.volume = 0.1;
  }
  audioElement.play();
});
const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    pauseButton.textContent = "Pausar";
  } else {
    audioElement.pause();
    pauseButton.textContent = "Reanudar";
  }
});

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles:', texto);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}
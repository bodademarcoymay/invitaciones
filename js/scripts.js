
$('.parallax-canciones').parallax({
  imageSrc: 'img/canciones.jpg'

});

$('.parallax-portada').parallax({
  imageSrc: 'img/portada.jpg'
});

// ----------------------

// Cuenta regresiva
var fechaObjetivo = "2024-02-24 20:00:00";

    function actualizarContador() {
        var fechaInicio = new Date().getTime();
        var fechaFin = new Date(fechaObjetivo).getTime();
        var diferencia = fechaFin - fechaInicio;

        if (diferencia > 0) {
            var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = dias;
            document.getElementById("hours").innerHTML = horas;
            document.getElementById("minutes").innerHTML = minutos;
            document.getElementById("seconds").innerHTML = segundos;
        } else {
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }

    setInterval(actualizarContador, 1000);

    actualizarContador();

  
// ----------------------

const video = document.getElementById("musica-fondo");
const playButton = document.getElementById("play-pause-music");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});



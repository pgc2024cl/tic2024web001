document.getElementById("btnCreditos").addEventListener("click", function() {
    alert("Autor: Patricia Gómez Cubría\nCurso y Grupo: Nº14 y 2ºB");
});

function ocultarDiv() {
    document.getElementById("primerDiv").style.display = "none";
}

function mostrarDiv() {
    document.getElementById("primerDiv").style.display = "block";
}

function cambiarColorFondo() {
    var color = prompt("Introduce un color en formato hexadecimal (por ejemplo, #ff0000 para rojo):");
    document.getElementById("primerDiv").style.backgroundColor = color;
}

document.querySelector(".bloque1").addEventListener("mouseover", function() {
    alert("Fecha actual: " + new Date());
});

document.querySelector(".bloque2").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ffcccc";
});

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            mostrarMapa(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert("Geolocalización no es soportada por este navegador.");
    }
}

function mostrarMapa(latitud, longitud) {
    var mapa = L.map('mapa').setView([latitud, longitud], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mapa);
    L.marker([latitud, longitud]).addTo(mapa)
        .bindPopup('Ubicación actual.')
        .openPopup();
}
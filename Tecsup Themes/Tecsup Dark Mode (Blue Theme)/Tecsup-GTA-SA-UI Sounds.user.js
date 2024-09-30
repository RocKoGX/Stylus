// ==UserScript==
// @name         Sonido UI de GTA SA para el Tecsup
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Sonidos de la UI del juego GTA San Andreas
// @author       RocKo
// @match        https://tecsup.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Crear el elemento de audio para el clic en los enlaces
    const sonidoClickEnlace = document.createElement("audio");
    sonidoClickEnlace.src = "https://store-screenapp-production.storage.googleapis.com/vid/66f09fd37559877dd20fbdc2/c001e6a5-f944-4303-9e07-c14bf34fbb5a.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG1EINEQV5X2QGY62PSZMBMUR7IGGVLKNDB6ABP5GL6O6FKO76DWA2IE3SB%2F20240923%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240923T174345Z&X-Amz-Expires=604800&X-Amz-Signature=f9dc27ccc3a4c037b68dfd8b794f72020695c91d700f58ad7c4241240edea2d0&X-Amz-SignedHeaders=host#t=0,3"; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlace.preload = "auto";
    document.body.appendChild(sonidoClickEnlace);

    // Seleccionar todos los enlaces de los cursos dentro de varias listas
    const enlaces = document.querySelectorAll("#menu .ic-app-header__menu-list-link");

    // Añadir el evento click a cada enlace para reproducir el sonido de clic
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            sonidoClickEnlace.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });

        // Añadir el evento mouseenter para reproducir el sonido de hover
        enlace.addEventListener("mouseenter", function(e) {
            const sonidoHover = new Audio("https://files.voicy.network/public/Content/Clips/Sound/115ce6ff-9c96-4827-8d6e-19526585fe51.mp3"); // Cambia esta URL por tu archivo de sonido para el hover
            sonidoHover.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de hover:', error);
            });
        });
    });

})();

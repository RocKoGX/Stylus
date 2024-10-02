// ==UserScript==
// @name         Point Blank UI Sounds for Moodle
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  Sonidos de la UI del juego ya extinto Point Blank
// @author       RocKo
// @match        https://aulavirtual.ucsm.edu.pe/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.rui-sidebar-nav-item-link, .rui-sidebar-nav-item-link, .moremenu .nav-link, .dropdown-toggle').forEach(link => {
        link.addEventListener('click', function(e) {
            // Si el enlace tiene la clase 'dropdown-toggle', no realizamos la animación
            if (this.classList.contains('dropdown-toggle')) {
                return; // Salimos del evento sin hacer nada
            }

            const targetUrl = this.href;

            // Verificamos que el enlace tenga un href válido y no sea igual a la URL actual
            if (targetUrl && targetUrl !== '#' && targetUrl !== window.location.href) {
                e.preventDefault(); // Previene la redirección inmediata

                // Retrasamos 1 segundo antes de aplicar la animación
                setTimeout(() => {
                    // Añadimos la clase que dispara la animación de deslizamiento
                    document.querySelector('.main-inner').classList.add('slide-out');

                    // Crear el elemento de audio para el sonido de la animación
                    const sonidoAnimacion = new Audio("https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/UI_Scroll_Out.wav"); // Cambia esta URL por tu archivo de sonido
                    sonidoAnimacion.play().catch((error) => {
                        console.error('Error al intentar reproducir el sonido de animación:', error);
                    });

                    // Esperamos a que la animación termine antes de redirigir
                    setTimeout(() => {
                        window.location.href = targetUrl; // Redirigimos a la nueva página
                    }, 1000); // El tiempo de la animación (1s)
                }, 600); // Esperamos 600ms antes de iniciar la animación
            }
        });
    });

    // SONIDO PARA CLICKS EN ENLACES
    const sonidoClickEnlace = document.createElement("audio");
    sonidoClickEnlace.src = "https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/PB_UI_Button_Click.wav"; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlace.preload = "auto";
    document.body.appendChild(sonidoClickEnlace);

    // SONIDO PARA CLICS EN ENLACES CANCEL
    const sonidoClickEnlaceCancel = document.createElement("audio");
    sonidoClickEnlaceCancel.src = "https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/PB_UI_Button_Cancel.wav"; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlaceCancel.preload = "auto";
    document.body.appendChild(sonidoClickEnlaceCancel);

    // SONIDO PARA CLICS EN ENLACES OK
    const sonidoClickEnlaceOK = document.createElement("audio");
    sonidoClickEnlaceOK.src = "https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/PB_UI_Button_Click_Ok.wav"; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlaceOK.preload = "auto";
    document.body.appendChild(sonidoClickEnlaceOK);

    // SONIDO PARA CLICS EN ENLACES TAB
    const sonidoClickEnlaceTab = document.createElement("audio");
    sonidoClickEnlaceTab.src = "https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/UI_Button_Click_Tab.wav"; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlaceTab.preload = "auto";
    document.body.appendChild(sonidoClickEnlaceTab);

    // SONIDO PARA CAMBIO DE PAGINA
    const sonidoAnimacionEntrada = new Audio("https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/UI_Scroll_In.wav");
    sonidoAnimacionEntrada.play().catch((error) => console.error('Error:', error));

    // Seleccionar todos los enlaces de los cursos dentro de varias listas
    //
    // #myCoursesList... .rui-sidebar-nav-item-link   Lado izquierdo
    // #myCoursesBtn                                  Boton de "Mis cursos"
    // .moremenu .nav-link                            Botones de arriba "Curso", "Participantes, "Calificaciones", etc.
    // .rui-lang-btn                                  Boton de traducir
    // .rui-icon-menu-darkmode                        Boton de Modo Oscuro/Claro
    // #nav-notification-popover-container            Boton de Notificaciones
    // .popover-region                                Boton Chat
    // .activity.activity-wrapper                     Enlaces para cada contenido de un curso

    const enlaces = document.querySelectorAll(".btnlogeo, #myCoursesList .rui-sidebar-nav-item-link, .rui-flatnavigation .rui-sidebar-nav-item-link, #myCoursesBtn, .moremenu .nav-link, .rui-lang-btn, .rui-icon-menu-darkmode, #nav-notification-popover-container, .popover-region, .btn, #id_cancel, id_submitbutton, .btn-danger, .btn-msg-danger, .userpicture, #mainNav, .list-group, .btn-msg, .btn-msg-special, .content-item-container, .dropdown-item, .mod_quiz-next-nav, .questionflag, .btn .btn-secondary .btn-sm, #mobileNav, .main-content .nav-link");
    // Añadir el evento click a cada enlace para reproducir el sonido de clic
    enlaces.forEach(enlace => {
        if(enlace.id.startsWith("id_cancel") || enlace.classList.contains("btn-danger") || enlace.classList.contains("btn-msg-danger")){
        enlace.addEventListener("click", function(e) {
            sonidoClickEnlaceCancel.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });
        }
        else if(enlace.id.startsWith("id_submitbutton") || enlace.classList.contains("mod_quiz-next-nav")){
        enlace.addEventListener("click", function(e) {
            sonidoClickEnlaceOK.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });
        }
        else if (enlace.closest('.moremenu') && enlace.classList.contains("nav-link") || enlace.closest('.main-content') && enlace.classList.contains("nav-link")) {
        enlace.addEventListener("click", function(e) {
            sonidoClickEnlaceTab.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });
        }
        else{
        enlace.addEventListener("click", function(e) {
            const sonidoClick = new Audio("https://github.com/RocKoGX/Stylus/raw/main/Moodle%20Themes/Moodle%20Point%20Blank%20Theme/sounds/PB_UI_Button_Click.wav");
            sonidoClick.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });
        }
        // SONIDO PARA CLICKS EN HOVER
        enlace.addEventListener("mouseenter", function(e) {
            const sonidoHover = new Audio("https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/7785f908eae97527ab63d2a464988b03/PB_UI_Button_Hover_2.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ7KIMSzRKn2FMv5xJqCzcx16O44hyfkgLqLQu0a9Ktl-H-vaI3Ef3fXQ_Rw33Zp1az9CnIdrukQEn-hYdO4PDvnFLE-Tf3AM6kDcZ4DyJbLmc25DcoDPtKd3opKg6jhQJJQg-mIMgoLDdgSspAcvygE="); // Cambia esta URL por tu archivo de sonido para el hover
            sonidoHover.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de hover:', error);
            });
        });
    });
})();
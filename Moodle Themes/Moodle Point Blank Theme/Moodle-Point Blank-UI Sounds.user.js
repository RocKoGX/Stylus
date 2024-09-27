// ==UserScript==
// @name         Point Blank UI Sounds for Moodle
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Sonidos de la UI del juego ya extinto Point Blank
// @author       RocKo
// @match        https://aulavirtual.ucsm.edu.pe/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


  document.querySelectorAll('.rui-sidebar-nav-item-link, .rui-sidebar-nav-item-link, .moremenu .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetUrl = this.href;

      // Verificamos que el enlace tenga un href válido y no sea igual a la URL actual
      if (targetUrl && targetUrl !== '#' && targetUrl !== window.location.href) {
        e.preventDefault(); // Previene la redirección inmediata

        // Retrasamos 1 segundo antes de aplicar la animación
        setTimeout(() => {
          // Añadimos la clase que dispara la animación de deslizamiento
          document.querySelector('.main-inner').classList.add('slide-out');

          // Esperamos a que la animación termine antes de redirigir
          setTimeout(() => {
            window.location.href = targetUrl; // Redirigimos a la nueva página
          }, 1); // El tiempo de la animación (1s)
        }, 600); // Esperamos 1 segundo antes de iniciar la animación
      }
    });
  });



    // SONIDO PARA CLICKS EN ENLACES
    const sonidoClickEnlace = document.createElement("audio");
    sonidoClickEnlace.src = "https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/b08437debf2b5ea1743e37942a22a743/PB_UI_Button_Click.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZzIMukLzMBt13OtnwQScDRg0TU6BIuedE2ApyIJUzHt7BszN1srV8BSyEvxEah5wH1VF0-xmXAkEmfnNY_6ApFbxYxJyM9iDwWLgCdDAa6NsaQceJ75E7HCSSD1vq05sWxRObRfKuTNKVlKR45WJgfY="; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlace.preload = "auto";
    document.body.appendChild(sonidoClickEnlace);

    // SONIDO PARA CLICS EN ENLACES CANCEL
    const sonidoClickEnlaceCancel = document.createElement("audio");
    sonidoClickEnlaceCancel.src = "https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/40ea5db79c29a7859fe7d932a69ed354/PB_UI_Button_Cancel.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ5SLI2kRrhQU4Eu3of8yCWq48uTadt4qZ-8jQAKQWY3YlovMPsUMzQzektefk9gpyyfqMpnZTp7f7tGVVTUSJaRRGLphyx1q2YBBVZb8UqZWL7oxYZUZ9PxM--kBAt9deUzeLYFEGn13uAm5v-zZzbk="; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlaceCancel.preload = "auto";
    document.body.appendChild(sonidoClickEnlaceCancel);

    // SONIDO PARA CLICS EN ENLACES OK
    const sonidoClickEnlaceOK = document.createElement("audio");
    sonidoClickEnlaceOK.src = "https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/301faa0ea33d8a61859fb8b4b1b85452/PB_UI_Button_Click_Ok.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ4Twibr-X-Bv3p3LLkQ4zRt6zyVPApLL4RjjM5N_uWXO3VR7HNsLNTs7IrzFl9m2wn-cJai2KV1EUwT2JQcZgq_cNsft4lFSU0KcXsnT0gJ0koGeVdn6EdQwFP0AMBe0dNiq0R9NLUaRaNsSyWkKx4o="; // Cambia esta URL por tu archivo de sonido para el clic en enlaces
    sonidoClickEnlaceOK.preload = "auto";
    document.body.appendChild(sonidoClickEnlaceOK);

    // SONIDO PARA CLICKS EN BOTONES
    const sonidoClickBoton = document.createElement("audio");
    sonidoClickBoton.src = "https://files.voicy.network/public/Content/Clips/Sound/bd97e77f-3f95-4783-ad73-6ca25cd5afe6.mp3"; // Cambia esta URL por tu archivo de sonido para el clic en botones
    sonidoClickBoton.preload = "auto";
    document.body.appendChild(sonidoClickBoton);

    // SONIDO AL CARGAR LA PÁGINA
    const sonidoCargaPagina = document.createElement("audio");
    sonidoCargaPagina.src = "https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/51ebcc5c9509189d8916512fedebb4a0/PB_UI_Page_Shift.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ7la9T6JqX850RTsx0w22wCP0dgKsjagxMnhPBVRNA6uCN8ZDSc7t7XV6cLaDFALwJPY_dYCdT8bsiJQs_GN-0o55zrx5rHswFa1X-_O0ijH5F05RlW6MgU9lZo8lOH7LWRG2uQoE_uCXWRNkU79Tu0="; // Cambia esta URL por tu archivo de sonido
    sonidoCargaPagina.preload = "auto";
    document.body.appendChild(sonidoCargaPagina);

    // Reproducir el sonido al cargar la página
    window.onload = function() {
        sonidoCargaPagina.play().catch((error) => {
            console.error('Error al intentar reproducir el sonido de carga de la página:', error);
        });
    };

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

    const enlaces = document.querySelectorAll(".btnlogeo, #myCoursesList .rui-sidebar-nav-item-link, .rui-flatnavigation .rui-sidebar-nav-item-link, #myCoursesBtn, .moremenu .nav-link, .rui-lang-btn, .rui-icon-menu-darkmode, #nav-notification-popover-container, .popover-region, .btn, #id_cancel, id_submitbutton, .btn-danger, .btn-msg-danger, .userpicture, #mainNav, .list-group, .btn-msg, .btn-msg-special, .content-item-container, .dropdown-item, .mod_quiz-next-nav, .questionflag, .btn .btn-secondary .btn-sm");
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
        else{
        enlace.addEventListener("click", function(e) {
            const sonidoClick = new Audio("https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/b08437debf2b5ea1743e37942a22a743/PB_UI_Button_Click.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZzIMukLzMBt13OtnwQScDRg0TU6BIuedE2ApyIJUzHt7BszN1srV8BSyEvxEah5wH1VF0-xmXAkEmfnNY_6ApFbxYxJyM9iDwWLgCdDAa6NsaQceJ75E7HCSSD1vq05sWxRObRfKuTNKVlKR45WJgfY=");
            sonidoClick.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de clic en enlace:', error);
            });
        });
        }
        // SONIDO PARA CLICKS EN HOVER
        enlace.addEventListener("mouseenter", function(e) {
            const sonidoHover = new Audio("https://u1.padletusercontent.com/uploads/padlet-uploads/500569185/7785f908eae97527ab63d2a464988b03/PB_UI_Button_Hover_2.mp3?expiry_token=5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ7KIMSzRKn2FMv5xJqCzcx16O44hyfkgLqLQu0a9Ktl-H-vaI3Ef3fXQ_Rw33Zp1az9CnIdrukQEn-hYdO4PDvnFLE-Tf3AM6kDcZ4DyJbLmLLvTsxQ6IzCEPyU-q4GBXnICoNnOK4qpcNnvvKWVi3Q="); // Cambia esta URL por tu archivo de sonido para el hover
            sonidoHover.play().catch((error) => {
                console.error('Error al intentar reproducir el sonido de hover:', error);
            });
        });
    });
})();

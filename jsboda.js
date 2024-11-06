// Función para cerrar el modal y activar la música
document.getElementById("playMusicBtn").addEventListener("click", function() {
    // Cerrar el modal usando Fancybox
    $.fancybox.close();

    // Activar la música de Elfsight
    setTimeout(function() {
        var iframe = document.querySelector('.elfsight-app-05c92374-1475-4acb-b7e2-dd7365d8aadf iframe');
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }, 500);  // Retardo de 500 ms antes de enviar el mensaje
});

// Mostrar el modal cuando la página cargue
window.onload = function() {
    // Mostrar el modal al cargar la página
    document.getElementById("openModal").click();
};

// Función para cerrar el modal y activar la música
document.getElementById("playMusicBtn").addEventListener("click", function() {
    // Cerrar el modal usando Fancybox
    $.fancybox.close();

    // Activar la música de Elfsight
    var iframe = document.querySelector('.elfsight-app-05c92374-1475-4acb-b7e2-dd7365d8aadf iframe');
    if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
});

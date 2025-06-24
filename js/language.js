function switchLanguage(lang) {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const isLocal = window.location.protocol === 'file:';
    const isEnglishPage = currentPath.includes('/en/') || currentPath.endsWith('/en') || fileName === 'en';

    // Si ya estamos en el idioma seleccionado, no hacer nada
    if ((lang === 'en' && isEnglishPage) || (lang === 'es' && !isEnglishPage)) {
        return;
    }

    if (lang === 'es') {
        if (isEnglishPage) {
            if (isLocal) {
                window.location.href = fileName === 'index.html' ? '../index.html' : '../' + fileName;
            } else {
                window.location.href = currentPath.replace('/en/', '/').replace('/en', '/');
            }
        } else if (isLocal) {
            window.location.href = 'index.html';
        } else {
            window.location.href = '/';
        }
    } 
    else if (lang === 'en') {
        if (!isEnglishPage) {
            if (isLocal) {
                window.location.href = fileName === 'index.html' ? 'en/index.html' : 'en/' + fileName;
            } else {
                window.location.href = currentPath === '/' ? '/en/index.html' : '/en/' + fileName;
            }
        } else if (isLocal) {
            window.location.href = 'en/index.html';
        } else {
            window.location.href = '/en/';
        }
    }
}

// Actualizar botones de idioma al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const isEnglishPage = currentPath.includes('/en/') || currentPath.endsWith('/en') || fileName === 'en';
    
    const esButtons = document.querySelectorAll('button[onclick="switchLanguage(\'es\')"]');
    const enButtons = document.querySelectorAll('button[onclick="switchLanguage(\'en\')"]');
    
    esButtons.forEach(button => {
        button.classList.toggle('active', !isEnglishPage);
        button.disabled = !isEnglishPage;
    });
    
    enButtons.forEach(button => {
        button.classList.toggle('active', isEnglishPage);
        button.disabled = isEnglishPage;
    });
});
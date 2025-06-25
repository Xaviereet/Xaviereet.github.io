document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial - ambos cerrados por defecto
    const sections = document.querySelectorAll('.project-section');
    
    sections.forEach(section => {
        const toggleBtn = section.querySelector('.toggle-btn');
        const content = section.querySelector('.projects-content');
        
        // Configurar estado inicial cerrado
        content.style.maxHeight = '0';
        toggleBtn.setAttribute('aria-expanded', 'false');
        
        // Añadir evento click
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            
            // Alternar estado
            toggleBtn.setAttribute('aria-expanded', !isExpanded);
            content.style.maxHeight = isExpanded ? '0' : content.scrollHeight + 'px';
            
            // Rotar icono
            const icon = toggleBtn.querySelector('.toggle-icon');
            icon.classList.toggle('expanded');
        });
    });
});
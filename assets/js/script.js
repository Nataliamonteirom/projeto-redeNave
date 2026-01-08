
// Alternância de tema claro/escuro
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'btn btn-outline-secondary position-fixed bottom-0 end-0 m-3';
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    themeToggle.setAttribute('title', 'Alternar tema');
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        } else {
            document.body.classList.add('dark');
            themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        }
    });
});
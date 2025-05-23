document.addEventListener("DOMContentLoaded", (Event) => {

    let button = document.querySelector(".layout_menu-toggle");
    let icon_bars = document.querySelector(".layout_menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout_menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
 
    });

    window.addEventListener("resize" , () => {
        
        let size = parseInt(document.body.clientWidth);

        if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }


    });

    // Verificar el estado del modo oscuro al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.dark-mode-toggle i');
        const text = document.querySelector('.dark-mode-toggle .menu__overlay');
        if (icon && text) {
            icon.className = 'menu__icono fa-solid fa-moon fa-xl';
            text.textContent = 'Quitar Oscuro';
        }
    }

});

// Función para alternar el modo oscuro
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-toggle i');
    const text = document.querySelector('.dark-mode-toggle .menu__overlay');

    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
        if (icon && text) {
            icon.className = 'menu__icono fa-solid fa-moon fa-xl';
            text.textContent = 'Quitar Oscuro';
        }
    } else {
        localStorage.setItem('darkMode', 'disabled');
        if (icon && text) {
            icon.className = 'menu__icono fa-sharp-duotone fa-solid fa-sun fa-xl';
            text.textContent = 'Poner Oscuro';
        }
    }
}
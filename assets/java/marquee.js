
document.addEventListener("DOMContentLoaded", (event) => {
    let intervalId = null;
    let marquee = (selector_list,speed) => {
        const list = document.querySelector(selector_list);
        let move = 0;

        // Si ya existe un intervalo, lo limpiamos
        if (intervalId) {
            clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
           list.style.marginLeft = `-${move}px`; /*La comilla invertida es con Alt 96*/
           
           if(move > list.clientWidth){
                move = 0;
           }

           move = move + speed;
        }, 0);
    }

    const updateMarqueeSpeed = () => {
        if (window.innerWidth > 1060) {
            marquee(".marquee__list",0.3);
        } else {
            marquee(".marquee__list",0.4);
        }
    }

    // Ejecuta la función cuando se carga el DOM
    updateMarqueeSpeed();

    // Y también cada vez que se cambia el tamaño de la ventana
    window.addEventListener('resize', updateMarqueeSpeed);
});


document.addEventListener("DOMContentLoaded", (event) => {
    let intervalId = null;
    let move = 0;

    let marquee = (selector_list, speed) => {
        const list = document.querySelector(selector_list);

        // Si ya existe un intervalo, lo limpiamos
        if (intervalId) {
            clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
            list.style.marginLeft = `-${move}px`; /*La comilla invertida es con Alt 96*/

            if (move > list.clientWidth) {
                move = 0;
            }

            move = move + speed;
        }, 0);

        // Detener el marquee cuando el ratón está sobre un elemento con la clase marquee__item-1
        const items = document.querySelectorAll('.marquee__item-1, .marquee__item-2');
        items.forEach(item => {
            item.addEventListener('mouseover', () => {
                clearInterval(intervalId);
            });

            item.addEventListener('mouseout', () => {
                intervalId = setInterval(() => {
                    list.style.marginLeft = `-${move}px`;

                    if (move > list.clientWidth) {
                        move = 0;
                    }

                    move = move + speed;
                }, 0);
            });
        });
    }

    const updateMarqueeSpeed = () => {
        if (window.innerWidth > 1060) {
            marquee(".marquee__list", 0.5);
        } else {
            marquee(".marquee__list", 0.5);
        }
    }

    // Ejecuta la función cuando se carga el DOM
    updateMarqueeSpeed();

    // Y también cada vez que se cambia el tamaño de la ventana
    window.addEventListener('resize', updateMarqueeSpeed);
});

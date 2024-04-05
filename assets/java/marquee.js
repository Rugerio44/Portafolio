document.addEventListener("DOMContentLoaded", (event) => {

    let marquee = (selector_list,speed) => {
        const list = document.querySelector(selector_list);
        let move = 0;

        setInterval(() => {
           list.style.marginLeft = `-${move}px` ;/*La comilla invertida es con Alt 96*/
           
           if(move > list.clientWidth){
                move = 0;
           }

           move = move + speed;
        }, 0);
    }
    

    marquee(".marquee__list",0.3);
    /*0.3*/ 
});
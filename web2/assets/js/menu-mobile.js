/* document.addEventListener("DOMContentLoaded", (event) => {


    //Seleccionar mis dos elementos principales

    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    mobile_btn.addEventListener("click", ()=>{
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        } 
    });

    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000 ){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

}); */

document.addEventListener("DOMContentLoaded", (event) => {
    
    /*Selecciona los elementos*/ 

    let mobilebtn = document.querySelector(".navbar__mobile-btn");
    let mobilemenu = document.querySelector(".menu-mobile");

    //Funcion para poder cerrar y abrir la ventana de menú

    const showhidenmenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobilemenu.classList.remove("menu-mobile--show");
        }else{
            mobilemenu.classList.add("menu-mobile--show");
        } 
    }


    mobilebtn.addEventListener("click",showhidenmenu);

    window.addEventListener("resize", () =>{
        let windowwidht =  parseInt(document.body.clientWidth);

        if(windowwidht >= 1000){
            mobilemenu.classList.remove("menu-mobile--show");
        }
    });

    let btnclose = document.querySelector(".menu-mobile__close");

    btnclose.addEventListener("click", showhidenmenu);

    //Desplegar los submenus//
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        
        item.addEventListener("click", (event) => {
           let submenu = item.lastElementChild;
           
            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }



        });

    });

    
});



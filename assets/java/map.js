
document.addEventListener("DOMContentLoaded",(event) => {

    setTimeout(() => {

    document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contacto__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.7298564864227!2d-99.23678179619945!3d19.510254938196784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20327f3afddf3%3A0x95f50214869a519a!2sPlaza%20Sat%C3%A9lite!5e0!3m2!1ses-419!2smx!4v1705425462916!5m2!1ses-419!2smx" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }, 500)
})
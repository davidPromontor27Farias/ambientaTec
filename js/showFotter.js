document.addEventListener("DOMContentLoaded", ()=>{

    insertFooter();
})



function insertFooter(){
    let pages = document.querySelector('body');

    if(pages.classList.contains("footer-show")){
        const contenidoFooter = document.createElement('DIV');
        contenidoFooter.classList.add("footer-section");

        contenidoFooter.innerHTML = `
            <div class="contenido-child-footer">
                <p>Instituto Tecnologico Superior de Cosamaloapan Veracruz</p>

                <div class="enlaces-footer">
                    <div>
                        <a href="temas.html">
                            <h2>Calendario</h2>
                        </a>
                        
                    </div>
                    <div>
                        <a href="propositos.html">
                            <h2>Propositos</h2>
                        </a>
                        
                    </div>
                    <div>
                        <a href="creadores.html">
                            <h2>Creadores</h2>
                        </a>
                        
                    </div>
                    <div>
                        <a href="certificaciones.html">
                            <h2>Certificaciones</h2>
                        </a>
                        
                    </div>
                    <div>
                        <a href="proyectos.html">
                            <h2>Proyectos</h2>
                        </a>
                        
                    </div>
                    <div>
                        <a href="mascota.html">
                            <h2>Mascota</h2>
                        </a>  
                    </div>
                </div>
            </div>
        `
        pages.appendChild(contenidoFooter);

    }
    return;
}
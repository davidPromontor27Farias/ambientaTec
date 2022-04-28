const hamburguesa = document.querySelector('.menu-contenedor img');
const iconoLight = document.querySelector('.icono-light img');


document.addEventListener('DOMContentLoaded',  ()=>{
    showNavMobile(hamburguesa);
    modDark(iconoLight);

})

function showNavMobile(el2){

    el2.addEventListener('click', ()=>{
        
        const navMobile = document.querySelector('.navegacion-mobile');
 
        if(navMobile.classList.contains('show-navMobile')){
            navMobile.classList.remove('show-navMobile');
            hamburguesa.src = './icons/icons8-menu-rounded-50.png';
            hamburguesa.classList.remove('squine');
  
           


        }
        else{
            navMobile.classList.add('show-navMobile');
            hamburguesa.src = './icons/icons8-eliminar.svg';
            hamburguesa.classList.add('squine');

        }
    })
}

function modDark(el3){
    

    el3.addEventListener('click', ()=>{
        document.body.classList.toggle('mod-dark-add');

        if(document.body.classList.contains('mod-dark-add')){
            localStorage.setItem('oscuro', 'true');
            el3.src = './icons/icons8-light-50.png'
            localStorage.setItem('modIcon', './icons/icons8-light-50.png')
    
        }
        else{
            localStorage.setItem('oscuro', 'false');
            el3.src = './icons/icons8-do-not-disturb-ios-50.png';
            localStorage.setItem('modIcon', './icons/icons8-do-not-disturb-ios-50.png');
        }

    })

    if(localStorage.getItem('oscuro') === 'true' && localStorage.getItem('modIcon') === './icons/icons8-light-50.png'){
        document.body.classList.add('mod-dark-add');
        iconoLight.src = './icons/icons8-light-50.png';
    }
    else{
        document.body.classList.remove('mod-dark-add');
        iconoLight.src = './icons/icons8-do-not-disturb-ios-50.png';
    }


        
    
}

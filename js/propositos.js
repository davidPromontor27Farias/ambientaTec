document.addEventListener('DOMContentLoaded', ()=>{

    mostrarPropositos();
});

function mostrarPropositos(){

    const propositosInfo = [
        {
            info: 'Desecha tus aparatos electrónicos viejos en centros de acopio. Actualmente se están implementando centros de acopios en los que reciben aparatos electrónicos y reciclan sus elementos.',
            color: '#148F77'
        
        },
        {
            info: 'Escoge dispositivos con componentes reciclables. Cuando quieras comprar un nuevo gadget, intenta elegir aquellos que tengan enfoque medio ambiental, si es posible que presenten elementos reciclables así como certificaciones.',
            color: '#2E86C1'
        
        },
        {
            info: 'Elige empaques sostenibles.Usa empaques que sean amigables con el ambiente.',
            color: '#27AE60'
        
        },
        {
            info: 'Haz un inventario de cuánto papel desechable consumes: servilletas, papel higiénico, toallas de cocina, pañuelos. De esta forma podrás detectar cuál es la cantidad real que requieres y evitarás un uso desmedido e innecesario.',
            color: '#F1C40F'
        
        },
        {
            info: ' Crea una bolsa con tus jeans desgastados o rotos. Sólo necesitas unas tijeras, aguja e hilo, y echar a volar tu creatividad. De esta forma los reutilizas y les das un nuevo propósito.',
            color: '#F39C12'
        
        },
        {
            info: ' Lee correctamente las instrucciones de uso de los productos que consumes en el hogar. Es común que los utilicemos de manera inadecuada y en grandes cantidades, lo que propicia que se terminen antes de lo esperado. Esto te ayudará a no desperdiciar y aprovecharlos mejor.',
            color: '#2E86C1'
        
        },
        {
            info: 'Compra productos rellenables, ya que, si bien requieren una inversión mayor al inicio, a la larga el costo es menor. Antes de que se terminen puedes instalar el repuesto y rellenar el recipiente que tienes en casa.',
            color: '#148F77'
        
        },
        {
            info: ' Revisa los artículos que vayas a desechar antes de tirarlos, ya que a la mayoría de las cosas que tenemos a nuestro alrededor se les pueden aplicar las cuatro “erres”: reduce, recicla, repara y reutiliza.',
            color: '#27AE60'
        
        },
        {
            info: 'Forra tus libros y cuadernos con hojas de revista o periódicos pasados, así tendrás una forma singular de distinguirlos del resto. Además reciclarás el material, y disminuirás la cantidad de basura que tires.',
            color: '#F1C40F'
        
        },
        {
            info: 'Reduce el uso de tu automóvil, compártelo con tus amigos y compañeros para asistir al trabajo, la escuela o celebraciones.',
            color: '#F39C12'
        
        }

    ]

    const contenidoPropositos = document.querySelector('.contenido-proposito');

    propositosInfo.forEach((proposito, index) => {
        
        const contenidoDiv = document.createElement('DIV');
        const infoParrafo = document.createElement('P');
        const indexParrafo = document.createElement('P');
        indexParrafo.textContent = index+1;
        indexParrafo.classList = 'number';
        indexParrafo.style.backgroundColor = proposito.color;
        infoParrafo.textContent = proposito.info;
        contenidoDiv.style.backgroundColor = proposito.color;
        
        contenidoDiv.appendChild(indexParrafo);
        contenidoDiv.appendChild(infoParrafo);
        contenidoPropositos.appendChild(contenidoDiv);
    })



}
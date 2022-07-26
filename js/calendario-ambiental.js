document.addEventListener("DOMContentLoaded", ()=>{
    creadorCalendario();
})


const enero = [ {dia: "6", celeb: "Extincion de la burcada"}, { dia: "17", celeb: "Accidente de palomares"}, {dia: "28", celeb: "Dia Mundial de la educacion ambiental"}];
const containMaster = document.querySelector('.containMaster');

const febrero = [ {dia: "2", celeb: "Dia mundial de los humedales"}, { dia: "4", celeb: "Manifestacion en Riotino (Huelv, 1888)"}, {dia: "17 al 23", celeb: "Semana de lucha contra la pobreza energetica"}];

const marzo = [ 
    {dia: "5", celeb: "Dia mundial de la Eficiencia Energetica"}, 
    {dia: "8", celeb: "Dia internacional de la Mujer"}, {dia: "11", celeb: "Accidente de Fukushima"},
    {dia: "14", celeb: "Dia internacional de accion por los rios"},
    {dia: "15", celeb: "Dia mundial del consumidor"},
    {dia: "20", celeb: "Semana sin perticidas"},
    {dia: "21", celeb: "Dia internacional de los bosques"},
    {dia: "22", celeb: "Dia mundial del agua"},
    {dia: "23", celeb: "Dia meteorologico mundial"},
    {dia: "24", celeb: "Accidente del Exxon Valdez"},
    {dia: "28", celeb: "Accidente de Three Mile Island"}
   ];

const abril = [ 
    {dia: "17", celeb: "Dia mundial de la lucha campesina"},
    { dia: "20", celeb: "Accidente en plataforma petrolifera de BP en el golfo de Mexico ()"},
    {dia: "22", celeb: "Dia de la tierra"}, 
    {dia: "24", celeb: "Dia mundial del animal de laboratorio"}, {dia: "25", celeb: "Desastre de Doñana"},
    {dia: "26", celeb: "Desastre de Chernobil (1998)"},
    {dia: "29", celeb: "Dia internacional de Concienciacion sobre el Problema del Ruido"},
    {dia: "30", celeb: "Cieera de la central nuclear de Zorita"}    
    
   ];
const mayo = [ 
    {dia: "2", celeb: "Dia mundial de las aves migratorias"},
    {dia: "20", celeb: "Dia mundial de las abejas"},
    {dia: "22", celeb: "Dia mundia de la biodiversidad"},
    {dia: "24", celeb: "Dia europeo de los parques"} 
   ];
const junio = [ 
    {dia: "3", celeb: "Asesinato de Gladys del Estal (1979)"},
    {dia: "3", celeb: "Dia mundial de la bicilceta"},
    {dia: "4", celeb: "Premios de Atila"},
    {dia: "5", celeb: "Dia mundial de medio ambiente"},
    {dia: "8", celeb: "Dia mundial de los oceanos"},
    {dia: "17", celeb: "Dia mundial contra la desirtificacion y la sequia"},
    {dia: "21", celeb: "Dia del sol"},
    {dia: "24", celeb: "Dia internacional contra la contaminacion electromagnetica"},
    {dia: "26", celeb: "Dia internacional para la defensa del ecosistema manglar"}
   ];

const julio = [ 
    {dia: "3", celeb: "Dia Internacional Libre de Bolsas de Plastico)"},
    {dia: "7", celeb: "Dia internacional de la Conservavion del Suelo"},
    {dia: "10", celeb: "Accidente del Seveso (1976)"},
    {dia: "22", celeb: "Declaracion del primer Parque Nacional en España"},
    {dia: "26", celeb: "Dia internacional para la Defensa del Ecossitema Manglar"}
];
const agosto = [ 
    {dia: "6", celeb: "Aniversario de Hiroshima (1945)"},
    {dia: "9", celeb: "Dia internacional de las Poblaciones Indigenas"},
    {dia: "29", celeb: "Dia internacional contra los Ensayos Nucleares"}
];
const septiembre = [ 
    {dia: "7", celeb: "Dia internacional del Aire Limpio por un Cielo Azul"},
    {dia: "13", celeb: "Accidente radiologico de Goiania (Brasil, 1987)"},
    {dia: "16", celeb: "Dia internacional de Proteccion de la Capa de Ozono"},
    {dia: "21", celeb: "Dia internacional de la Paz"},
    {dia: "21", celeb: "Dia internacional contra los monocultivos de Arboles"},
    {dia: "22", celeb: "Dia sin coches"},
    {dia: "26", celeb: "Dia internacional para la eliminacion total de las armas nucleares"},
    {dia: "27", celeb: "Publicacion de la primavera silenciosas de Rachel Carson (1962)"},
    {dia: "29", celeb: "Dia internacional de concienciacion sobre la perdida y el desperdicio de alimentos"},

];
const octubre = [ 
    {dia: "*", celeb: "Primer fin de semana de octubre Dia Mundial de las Aves"},
    {dia: "*", celeb: "Primer lunes de octubre Dia Mundial del Habitat"},
    {dia: "*", celeb: "2do miercoles de octubre Dia Internacional para la Reduccion de las Grandes Catastrofes Naturales"},
    {dia: "*", celeb: "2do sabado de octubre Dia Mundial de las Aves Migratorias"},
    {dia: "4", celeb: "Derrame de la balsa con residuos de la mineria del aluminio en Hungria (2010)"},
    {dia: "16", celeb: "Dia Mundial de la Alimentacion"},
    {dia: "19", celeb: "Accidente de Vandelios l (Tarragona, 1989)"},
    {dia: "29", celeb: "Aniversario del crac del 29 Dia por el decrecimiento"},
    {dia: "31", celeb: "Dia mundial de las ciudades"},

];
const noviembre = [ 
    {dia: "1", celeb: "Aniversario revista El Ecologista"},
    {dia: "6", celeb: "Dia internacional para la Prevencion de la Explotacion del MedioAmbiente en la Guerra y los conflictos Armados"},
    {dia: "10", celeb: "2do miercoles de octubre Dia Internacional para la Reduccion de las Grandes Catastrofes Naturales"},
    {dia: "*", celeb: "Asesinato de Ken Saro-Wiwa (1995)"},
    {dia: "4", celeb: "Asesinato de Karen Silkwood (1974)"},
    {dia: "16", celeb: "Accidente del Prestige"},
    {dia: "19", celeb: "Accidente de Vandelios l (Tarragona, 1989)"},
    {dia: "29", celeb: "Aniversario del crac del 29 Dia por el decrecimiento"},
    {dia: "31", celeb: "Dia mundial de las ciudades"},

];

const diciembre = [ 
    {dia: "3", celeb: "Accidente del Bhopal (1984)"},
    {dia: "5", celeb: "Dia Mundial del Suelo"},
    {dia: "6", celeb: "Constitucion de Ecologistas en Accion"},
    {dia: "10", celeb: "Dia de los Derechos Humanos"},
    {dia: "11", celeb: "Dia internacional de las Montañas"},
    {dia: "12", celeb: "Accidente del Petrolero Erika (1999)"},
    {dia: "22", celeb: "Asesinato de Chico Mendes (1998)"},
    {dia: "30", celeb: "Aniversario del crac del 29 Dia por el decrecimiento"}

];

   


function creadorCalendario(mes, months){
    const month = document.createElement('H2');
    month.textContent = months;;

    const containMedium = document.createElement("DIV");
    containMedium.appendChild(month);
    containMedium.classList.add("medium-contain");

    const containExtra = document.createElement("DIV");
    containExtra.classList.add("contain-extra")

    for(let i = 0; i < mes.length; i++){

        const containChild = document.createElement("DIV");
        containChild.classList.add("contain-child");

        const day = document.createElement('H2');
        day.textContent = mes[i].dia;

        const celebNote = document.createElement('P');
        celebNote.textContent = mes[i].celeb;
        
        containChild.appendChild(day);
        containChild.appendChild(celebNote);
        containExtra.appendChild(containChild); 
        containMedium.appendChild(containExtra);
        containMaster.appendChild(containMedium);  
    }
    
}

creadorCalendario(enero, "Enero");
creadorCalendario(febrero, "Febrero");
creadorCalendario(marzo, "Marzo");
creadorCalendario(abril, "Abril");
creadorCalendario(mayo, "Mayo");
creadorCalendario(junio, "Junio");
creadorCalendario(julio, "Julio");
creadorCalendario(agosto, "Agosto");
creadorCalendario(septiembre, "Septiembre");
creadorCalendario(octubre, "Octubre");
creadorCalendario(noviembre, "Noviembre");
creadorCalendario(diciembre, "Diciembre");
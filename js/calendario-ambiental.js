document.addEventListener("DOMContentLoaded", ()=>{
    creadorCalendario();
})


const enero = [ {dia: "6", celeb: "Extincion de la burcada"}, { dia: "17", celeb: "Accidente de palomares"}, {dia: "28", celeb: "Dia Mundial de la educacion ambiental"}];
const containMaster = document.querySelector('.containMaster');

const febrero = [ {dia: "2", celeb: "Dia mundial de los humedales"}, { dia: "4", celeb: "Manifestacion en Riotino (Huelv, 1888)"}, {dia: "17 al 23", celeb: "Semana de lucha contra la pobreza energetica"}];

const marzo = [ 
    {dia: "2", celeb: "Dia mundial de los humedales"},
    { dia: "4", celeb: "Manifestacion en Riotino (Huelv, 1888)"},
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

   


function creadorCalendario(mes, months){
    const month = document.createElement('H1');
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
const currentHour=21;
let message="hora do dia";
if(currentHour>=22){
    message="Não deveríamos comer nada, é hora de dormir";
    console.log(message);
} else if(currentHour>=18 && currentHour<22){
    message="Rango da noite, vamos jantar :D";
} else if(currentHour>=14 && currentHour<18){
    message="Vamos fazer um bolo pro café da tarde?";
} else if(currentHour>=11 && currentHour<14){
    message="Hora do almoço!!!";
} else if(currentHour>=4 && currentHour<11){
    message="Hmmm, cheiro de café recém passado";
} else{
    message="Horario de tirar uma soneca"
}
console.log(message);
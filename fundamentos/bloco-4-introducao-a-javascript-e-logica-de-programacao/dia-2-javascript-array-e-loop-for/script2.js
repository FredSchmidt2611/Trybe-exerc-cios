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

let weekday="quarta-feira";
if(weekday==="segunda-feira" || weekday==="terça-feira" || weekday==="quarta-feira" || weekday==="quinta-feira" || weekday==="sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{
    console.log("FINALMENTE, descanso merecido UwU");
}

let estadoCandidato="aprovado"
switch(estadoCandidato){
        case "aprovado":
        console.log("Voce foi aprovado");
        break

        case "lista":
        console.log("Voce esta na lista de espera");
        break

        case "reprovado":
        console.log("Voce nao foi aprovado, tente novamete");
        break
default:
    console.log("nao se aplica");
}

let umNumero=21;
let outroNumero=47;
if(umNumero>outroNumero){
    console.log(umNumero);
}else{
    console.log(outroNumero);
}


let numero1=64;
let numero2=96;
let numero3=18;
if(numero1>numero2 && numero1>numero3){
    console.log(numero1);
}else if(numero2>numero1 && numero2>numero3){
    console.log(numero2);
}else{
    console.log(numero3);
}

const valor="negativo"
switch (valor) {
    case "positivo":
    console.log("positive");
    break;

    case "negativo":
    console.log("negative");
    break;

    default:
    console.log("zero");

}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for (let index=0; index<numbers.length; index +=1) {
    
soma += numbers[index]
}
console.log(soma);


let numbers1=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma1=0;
let media;
for (let index=0; index<numbers1.length; index +=1) {
    
soma1 += numbers1[index]
}
media= soma1/numbers1.length;
console.log(media);

let numbers2=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma2=0;
let media1;
for (let index=0; index<numbers2.length; index +=1) {
    
soma2 += numbers2[index]
}
media1= soma2/numbers2.length;

if (media1>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

let numbers3=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let numeroMaior=0;
for(let index=0; index<numbers3.length; index += 1){
    let numero=numbers3[index];
    
    if(numero>numeroMaior) {
    numeroMaior=numero;
    }
    }
    console.log(numeroMaior);

    
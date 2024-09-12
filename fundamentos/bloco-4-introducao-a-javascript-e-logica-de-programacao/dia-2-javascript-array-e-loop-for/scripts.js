let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index=0; index<numbers.length;index +=1){
    console.log(numbers[index]);
}

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices=menu[1]
console.log(menuServices);

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio')
console.log(indexOfPortfolio);

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato')
console.log(menu2);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index=0;index<groceryList.length; index += 1){
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name);
}
let tech1 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
let nome = 'Fred'
const techList = (array, name) => {
    
    if (array.length === 0) return 'Vazio!';
    
    let tech = array.sort();
    let techName = [];
    
for (i=0 ; i < array.length; i +=1){
    techName.push({
        tech: tech[i],
        name: name,
    });
}
return techName;
}

module.exports = techList
let kilometres = parseInt(prompt('Quanti km vuoi percorrere?'));

let age = parseInt(prompt('Quanti anni hai?'));

let prizetokm = 0.21;

let prizefinal= prizetokm * kilometres;

if (age < 18){
    prizefinal =(prizetokm * kilometres - 20/100).toFixed(2);
}else if(age > 65){
    prizefinal =(prizetokm * kilometres - 40/100).toFixed(2);
}else{
    prizefinal =(prizetokm * kilometres).toFixed(2);
}

document.getElementById('ticket').innerHTML=  ` Paghi ${prizefinal}€`;
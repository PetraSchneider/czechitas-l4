//Úkol 3
const ulice = prompt('Zadejte jméno ulice:');
const cisloDomu = prompt('Zadejte číslo Domu:');
const mesto = prompt('Zadejte jméno města:');
const psc = prompt('Zadejte PSČ:');

document.body.innerText = '<address> <p> ${ulice} ${cisloDomu} </p><p> ${mesto} ${psc}</p>';


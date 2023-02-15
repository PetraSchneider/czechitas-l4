//ukol 2

const jmeno = prompt('Zadejte vaše jméno:');
const email = prompt('Zadejte váš email:');

const atIndex = email.indexOf('@')
const castemailu = {
 prvniCast: email.slice(0, atIndex),
 domena: email.slice(atIndex + 1)
}

document.body.innerText = '<p uzivatelskeJmeno>' + castemailu.prvniCast + '</p>'
document.body.innerText += '<p domena>' + castemailu.domena + '</p>';

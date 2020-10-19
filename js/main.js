// ARRAY
var lista = [ 'Cirillo', 'Curci', 'Duzioni', 'Caronti',];


// RICHISESTA UTENTE
var cognomeUtente = prompt ('Inserire cognome').toLocaleLowerCase();

// INSERIMENTO IN ARRAY
lista.push(cognomeUtente);
console.log(lista);

//ORDINE ALFABETICO
lista.sort();
console.log(lista);
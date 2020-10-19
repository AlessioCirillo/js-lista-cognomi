// ARRAY
var lista = [ 'Cirillo', 'Curci', 'Duzioni', 'Caronti',];

// RICHISESTA UTENTE
var cognomeUtente = prompt ('Inserire cognome');

// INSERIMENTO IN ARRAY
lista.push(cognomeUtente);

//ORDINE ALFABETICO
lista.sort();
console.log(lista);

//POSIZIONE
console.log(lista.indexOf(cognomeUtente) + 1);

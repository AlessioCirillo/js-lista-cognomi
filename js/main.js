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

for ( var i = 0; i < lista.length; i++){
    var items = lista[i];

    var itemsEsistenti = document.getElementById('list').innerHTML;

    document.getElementById('list').innerHTML = itemsEsistenti + '<li>' + items + '</li>';
}

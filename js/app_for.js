console.log('yo')

// la mia lista della spesa è un array
const listaSpesa = [
    'Mele',
    'Pere',
    'Latte',
    'Cioccolata',
    'Pane',
    'Prosciutto',
    'Fesa'
];

// console.log(listaSpesa);

// prendo l'elemento dell'html dove metterò la mia list
const containerEl = document.querySelector('.lista_spesa');
console.log(containerEl);

// Creo il ciclo for e per ogni iterazione dovrò creare il lì che voglio

for (let i = 0; i < listaSpesa.length; i++) {
    // mi prendo l'elemento della lista dal primo all'ultimo
    // const listaEl = listaSpesa[i];
    // console.log(listaEl);

    // creo l'elemento li 
    const li = `<li> ${listaSpesa[i]}</li>`

    // lo inserisco in ul concatenandolo con le varie iterazioni
    containerEl.innerHTML += li
}
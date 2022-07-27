// console.log('yo')

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
// console.log(containerEl);

// Questa volta creo il ciclo while e per ogni iterazione dovrò stampare l'elemento nell'array finchè non arrivo all'ultimo elemento
let i = 0
// console.log(listaSpesa.length)

while (i < listaSpesa.length) {
    // A questo punto per ogni elemento dell'array
    const li = `<li>${listaSpesa[i]}</li>`

    // lo inserisco nell'innerHTML dell'elemento preso dal DOM
    containerEl.innerHTML += li
    
    // aumento il mio contatore
    i++
}
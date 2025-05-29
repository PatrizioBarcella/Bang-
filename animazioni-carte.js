document.querySelectorAll('.carta-container').forEach(container => {   //seleziona tutte le carte in .carta-container, invece foreach=iterazione per ogni elemento//
    container.addEventListener('click', () => { //aggiunge click per tutte le carte bang che girate danno la descrizione//
        container.querySelector('.carta').classList.toggle('animated'); //aggiunge/rimuove la classe animazione//
    });
});
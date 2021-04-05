const index = {
    primo : 'Fps',
    secondo: 'Arcade',
    terzo: 'Quiz',
    quarto: 'Corsa',
    quinto: 'VediTutto'
}

function vediDidascalia(event){
    const blocco = event.currentTarget;
    const attr = blocco.dataset.tema;
    blocco.removeEventListener('mouseover', vediDidascalia);
    for(let id in index){
        if(attr === index[id])
            blocco.dataset.tema = id;
    }
    blocco.classList.add('falsoHover');
    const didascalia = blocco.querySelector('p');
    didascalia.classList.remove('hidden');
    const overlay = blocco.querySelector('.overlay');
    overlay.classList.remove('dark-overlay');
    blocco.addEventListener('mouseout', nascondiDidascalia);
}

function nascondiDidascalia(event){
    const blocco = event.currentTarget;
    blocco.removeEventListener('mouseout', nascondiDidascalia);
    blocco.classList.remove('falsoHover');
    const didascalia = blocco.querySelector('p');
    didascalia.classList.add('hidden');
    const overlay = blocco.querySelector('.overlay');
    overlay.classList.add('dark-overlay');
    blocco.dataset.tema = index[blocco.dataset.tema];
    blocco.addEventListener('mouseover', vediDidascalia);
}

const giochiPreferiti = [];
const blocchi = document.querySelectorAll('#blocchi .blocco');
for (const blocco of blocchi){
    blocco.addEventListener('mouseover', vediDidascalia);
    blocco.addEventListener('click', apriSottoSito);
}


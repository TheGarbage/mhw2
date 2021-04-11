function mostraDettagli(event){
    const cliccaQui =  event.currentTarget;
    const blocco = cliccaQui.parentNode.parentNode;
    blocco.classList.add('giocoMaggioriDettagli');
    blocco.classList.remove('giocoMinoriDettagli');
    blocco.querySelector('.click').classList.remove('hidden');
    blocco.querySelector('.noClick').classList.add('noClickSelezionato');
    cliccaQui.textContent = "Clicca per minori info";
    cliccaQui.removeEventListener('click', mostraDettagli);
    cliccaQui.addEventListener('click', nascondiDettagli);
}

function nascondiDettagli(event){
    const cliccaQui =  event.currentTarget;    
    const blocco = cliccaQui.parentNode.parentNode;
    blocco.querySelector('.noClick').classList.remove('noClickSelezionato');
    blocco.querySelector('.click').classList.add('hidden');
    blocco.classList.add('giocoMinoriDettagli');
    blocco.classList.remove('giocoMaggioriDettagli');
    cliccaQui.textContent = "Clicca per maggiori info";
    cliccaQui.removeEventListener('click', nascondiDettagli);
    cliccaQui.addEventListener('click', mostraDettagli);
}
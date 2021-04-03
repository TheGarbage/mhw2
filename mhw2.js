function apriSottoSito(event){
    const blocco = event.currentTarget;
    const sottoSito = document.querySelector("#sotto-siti [data-tema=" + blocco.dataset.tema + ']');
    if(sottoSito !== null){
        sottoSito.classList.remove('hidden');
        oscuraSito();
        return;
    }
    const sottoSiti = document.querySelector("#sotto-siti");
    const newSottoSito = document.createElement('article');
    newSottoSito.classList.add('sotto-sito');
    newSottoSito.dataset.tema = blocco.dataset.tema;
    sottoSiti.appendChild(newSottoSito);
    const margineSopra = document.createElement('div');
    margineSopra.classList.add('margine');
    newSottoSito.appendChild(margineSopra);
    const contenutoSottoSito = document.createElement('div');
    contenutoSottoSito.classList.add('contenutoSottoSito');
    newSottoSito.appendChild(contenutoSottoSito);
    const header = document.createElement('header');
    header.classList.add('blocco');
    header.dataset.tema = index[blocco.dataset.tema];
    contenutoSottoSito.appendChild(header);
    const titoloHeader = document.createElement('h4');
    titoloHeader.textContent = blocco.querySelector('h4').textContent;
    header.appendChild(titoloHeader);
    const overlayHeader = document.createElement('div');
    overlayHeader.classList.add('block-overlay');
    overlayHeader.classList.add('overlay');
    header.appendChild(overlayHeader);
    const subHeader = document.createElement('section');
    subHeader.classList.add('sub-header');
    contenutoSottoSito.appendChild(subHeader);
    const textSubHeader = document.createElement('p');
    textSubHeader.textContent = blocco.querySelector('p').textContent;
    subHeader.appendChild(textSubHeader);
    const inputSubHeader = document.createElement('input');
    const cercaSubHeader = document.createElement('p');
    cercaSubHeader.textContent = "Cerca:";
    const conteiner = document.createElement('div');
    conteiner.appendChild(cercaSubHeader); 
    conteiner.appendChild(inputSubHeader); 
    subHeader.appendChild(conteiner);
    const preferiti = document.createElement('section');
    preferiti.classList.add('preferiti');
    preferiti.classList.add('hidden');
    contenutoSottoSito.appendChild(preferiti);
    const textPreferiti = document.createElement('li');
    textPreferiti.textContent = "Preferiti della categoria";
    preferiti.appendChild(textPreferiti);
    const divPreferiti = document.createElement('div');
    divPreferiti.classList.add('giochi');
    preferiti.appendChild(divPreferiti);
    const nonPreferiti = document.createElement('section');
    preferiti.classList.add('nonPreferiti');
    contenutoSottoSito.appendChild(nonPreferiti);
    const textNonPreferiti = document.createElement('li');
    textNonPreferiti.textContent = "Lista giochi categoria";
    nonPreferiti.appendChild(textNonPreferiti);
    const divNonPreferiti = document.createElement('div');
    divNonPreferiti.classList.add('giochi');
    nonPreferiti.appendChild(divNonPreferiti);
    for(const item of contenuti){
        console.log(index[newSottoSito.dataset.tema] + " === " + item.categoria);
        if(item.categoria === index[newSottoSito.dataset.tema] || index[newSottoSito.dataset.tema] === 'VediTutto'){
            const gioco = document.createElement('div');
            gioco.classList.add('gioco');
            divNonPreferiti.appendChild(gioco);
            const noClick = document.createElement('section');
            noClick.classList.add('noclick');
            gioco.appendChild(noClick);
            const divGioco = document.createElement('div');
            noClick.appendChild(divGioco);
            const nomeGioco = document.createElement('h5');
            nomeGioco.textContent = item.titolo;
            divGioco.appendChild(nomeGioco);
            const imgPreferiti = document.createElement('img');
            imgPreferiti.src = "Imm-NonPreferito.jpg";
            imgPreferiti.classList.add("pointer");
            divGioco.appendChild(imgPreferiti);
            const imgGioco = document.createElement('img');
            imgGioco.src = item.immagine;
            noClick.appendChild(imgGioco);
            const cliccaQui = document.createElement('p');
            cliccaQui.textContent = "Clicca per maggiori info";
            cliccaQui.classList.add("pointer");
            noClick.appendChild(cliccaQui);
            const click = document.createElement('section');
            click.classList.add('click');
            click.classList.add('hidden');
            gioco.appendChild(click);
            const descrizione = document.createElement('p');
            descrizione.textContent = item.categoria + "<\b>" + item.descrizione;
            click.appendChild(descrizione);
        }
    }
    const margineSotto = document.createElement('div');
    margineSotto.classList.add('margine');
    newSottoSito.appendChild(margineSotto);
    oscuraSito();
}

function oscuraSito(){
    const sito =  document.querySelector('#sito');
    sito.classList.add('opacity');
    const bodyOverlay =  document.querySelector('#body-overlay');
    bodyOverlay.classList.remove('hidden');
    bodyOverlay.addEventListener('click', chiudiSottoSito);
}

function chiudiSottoSito(){
    const sottoSiti = document.querySelectorAll(".sotto-sito");
    for(const item of sottoSiti){
        if(item.classList.contains('hidden') === false)
            item.classList.add('hidden');
    }
    const sito =  document.querySelector('#sito');
    sito.classList.remove('opacity');
    const bodyOverlay =  document.querySelector('#body-overlay');
    bodyOverlay.classList.add('hidden');
    sito.removeEventListener('click', chiudiSottoSito);
}
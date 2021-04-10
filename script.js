function creaSottoSito(blocco){
    const sottoSiti = document.querySelector(".sotto-siti");
    const newSottoSito = document.createElement('article');
    newSottoSito.classList.add('sotto-sito');
    newSottoSito.dataset.tema = blocco.dataset.tema;
    sottoSiti.appendChild(newSottoSito);
    const header = document.createElement('header');
    header.dataset.tema = index[blocco.dataset.tema];
    newSottoSito.appendChild(header);
    const imgTornaIndietro = document.createElement('img');
    imgTornaIndietro.classList.add('pointer');
    imgTornaIndietro.classList.add('tornaIndietro');
    imgTornaIndietro.src = "Imm-TornaIndietro.jpg";
    header.appendChild(imgTornaIndietro);
    const titoloHeader = document.createElement('h4');
    titoloHeader.textContent = blocco.querySelector('h4').textContent;
    header.appendChild(titoloHeader);
    const overlayHeader = document.createElement('div');
    overlayHeader.classList.add('overlay');
    overlayHeader.classList.add('block-overlay');
    overlayHeader.classList.add('dark-overlay');
    header.appendChild(overlayHeader);
    const subHeader = document.createElement('p');
    subHeader.textContent = blocco.querySelector('p').textContent;
    subHeader.classList.add('sub-header');
    newSottoSito.appendChild(subHeader);
    const preferiti = document.createElement('section');
    preferiti.classList.add('preferiti');
    preferiti.classList.add('hidden');
    newSottoSito.appendChild(preferiti);
    const textPreferiti = document.createElement('li');
    textPreferiti.textContent = "Preferiti della categoria";
    preferiti.appendChild(textPreferiti);
    const divPreferiti = document.createElement('div');
    divPreferiti.classList.add('giochi');
    preferiti.appendChild(divPreferiti);
    const nonPreferiti = document.createElement('section');
    nonPreferiti.classList.add('nonPreferiti');
    newSottoSito.appendChild(nonPreferiti);
    const subNonPreferiti = document.createElement('p');
    subNonPreferiti.classList.add('sub-nonPreferiti');
    nonPreferiti.appendChild(subNonPreferiti);
    const textNonPreferiti = document.createElement('li');
    textNonPreferiti.textContent = "Lista giochi categoria";
    subNonPreferiti.appendChild(textNonPreferiti); 
    const inputCerca = document.createElement('input');
    const testoCerca = document.createElement('p');
    testoCerca.textContent = "Cerca:";
    const conteiner = document.createElement('div');
    conteiner.appendChild(testoCerca); 
    conteiner.appendChild(inputCerca); 
    subNonPreferiti.appendChild(conteiner);
    const divNonPreferiti = document.createElement('div');
    divNonPreferiti.classList.add('giochi');
    nonPreferiti.appendChild(divNonPreferiti);
    for(const item of contenuti){
        if(item.categoria === index[newSottoSito.dataset.tema] || index[newSottoSito.dataset.tema] === 'VediTutto'){
            const gioco = document.createElement('div');
            gioco.classList.add('gioco');
            gioco.dataset.codice = item.codice + "nonPreferito";
            divNonPreferiti.appendChild(gioco);
            const noClick = document.createElement('section');
            noClick.classList.add('noclick');
            gioco.appendChild(noClick);
            const divGioco = document.createElement('div');
            noClick.appendChild(divGioco);
            const stella = document.createElement('img');
            stella.src = "Imm-Stella.jpg";
            stella.classList.add('stella');
            stella.classList.add('hidden');
            divGioco.appendChild(stella);
            const nomeGioco = document.createElement('h5');
            nomeGioco.textContent = item.titolo;
            divGioco.appendChild(nomeGioco);
            const imgPreferiti = document.createElement('img');
            imgPreferiti.classList.add('pointer');
            imgPreferiti.classList.add('stellaPiu');
            imgPreferiti.dataset.codice = item.codice;
            imgPreferiti.src = "Imm-NonPreferito.jpg";
            imgPreferiti.addEventListener("click", inserisciPreferiti);
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
            if(giochiPreferiti.indexOf( imgPreferiti.dataset.codice) !== -1){
                imgPreferiti.classList.add('hidden');
                gioco.classList.add('selezionato');
                stella.classList.remove('hidden');
                if(preferiti.classList.contains('hidden'))
                    preferiti.classList.remove('hidden');
                divPreferiti.appendChild(creaPreferito(gioco, item.codice));
            }
        }
    }
    return newSottoSito;
}

function apriSottoSito(event){
    const blocco = event.currentTarget;
    let sottoSito = document.querySelector(".sotto-siti [data-tema=" + blocco.dataset.tema + ']');
    if(sottoSito !== null)
        sottoSito.classList.remove('hidden');
    else 
        sottoSito = creaSottoSito(blocco);
    sottoSito.querySelector('input').addEventListener('keyup', ricerca);
    sottoSitoAperto = sottoSito;
    const giochiSitoAperto = sottoSitoAperto.querySelectorAll('.gioco');
    for(item of giochiSitoAperto){
        const giocoAperto= {};
        giocoAperto.gioco = item;
        giocoAperto.lista = [];
        for(lettera of item.querySelector('h5').textContent.toUpperCase())
            giocoAperto.lista.unshift(lettera);
        giochiAperti.unshift(giocoAperto);
    }
    const elementiSito = document.querySelectorAll('.sito-principale');
    for(item of elementiSito)
        item.classList.add('opacity');
    const bodyOverlay =  document.querySelector('#body-overlay');
    bodyOverlay.classList.remove('hidden');
    sottoSito.querySelector("img").addEventListener('click', chiudiSottoSito);
}

function chiudiSottoSito(){
    const sottoSiti = document.querySelectorAll(".sotto-sito");
    sottoSitoAperto.classList.add('hidden');
    sottoSitoAperto.querySelector("img").addEventListener('click', chiudiSottoSito);
    sottoSitoAperto.querySelector('input').value = '';
    vecchiaValue = '';
    for(item of giochiAperti)
        if(item.gioco.classList.contains('hidden'))
            item.gioco.classList.remove('hidden');
    sottoSitoAperto.querySelector('input').removeEventListener('keyup', ricerca);
    giochiAperti = [];
    sottoSitoAperto = null;
    const elementiSito =  document.querySelectorAll('.sito-principale');
    for(item of elementiSito)
        item.classList.remove('opacity');
    const bodyOverlay =  document.querySelector('#body-overlay');
    bodyOverlay.classList.add('hidden');
}
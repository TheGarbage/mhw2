function inserisciPreferiti(event){  
    const codice = event.currentTarget.dataset.codice + "nonPreferito";
    giochiPreferiti.unshift(event.currentTarget.dataset.codice);
    const giochi = document.querySelectorAll('[data-codice]');
    let imgPreferiti;
    let preferiti;
    for(item of giochi){
        if(item.dataset.codice === codice){
            imgPreferiti = item.querySelector('.stellaPiu');
            imgPreferiti.classList.add('hidden');
            imgPreferiti.removeEventListener("click", inserisciPreferiti);
            item.classList.add('selezionato');
            item.querySelector('.stella').classList.remove('hidden');
            preferiti = item.parentNode.parentNode.parentNode.querySelector(".preferiti");
            if(preferiti.classList.contains('hidden'))
                preferiti.classList.remove('hidden');
            preferiti.querySelector('.giochi').appendChild(creaPreferito(item, imgPreferiti.dataset.codice));
        }
    }
}

function togliPreferiti(event){
    const imgPreferiti = event.currentTarget;
    const codicePreferito =  imgPreferiti.dataset.codice + "preferito";
    const codiceNonPreferito = imgPreferiti.dataset.codice + "nonPreferito";
    const giochi = document.querySelectorAll('[data-codice]');
    let preferiti;
    let stellaPiu;
    for(item of giochi){
        if(item.dataset.codice === codicePreferito){
            preferiti = item.parentNode.parentNode;
            item.remove();
            if(preferiti.querySelector(".giocoPreferito") === null)
                preferiti.classList.add('hidden');
        }
        else if(item.dataset.codice === codiceNonPreferito){
            stellaPiu = item.querySelector('.stellaPiu');
            stellaPiu.classList.remove('hidden');
            stellaPiu.addEventListener("click", inserisciPreferiti);
            item.classList.remove('selezionato');
            item.querySelector('.stella').classList.add('hidden');
        }
    }
    giochiPreferiti.splice(giochiPreferiti.indexOf(imgPreferiti.dataset.codice), 1);
}

function creaPreferito(blocco, codice){
    const giocoPreferito = document.createElement("section");
    giocoPreferito.classList.add('giocoPreferito');
    giocoPreferito.dataset.codice = codice + "preferito";
    const imgGioco = document.createElement("img");
    imgGioco.src = blocco.querySelectorAll('img')[2].src;
    giocoPreferito.appendChild(imgGioco);
    const div = document.createElement('div');
    giocoPreferito.appendChild(div);
    const h5 = document.createElement('h5');
    h5.textContent = blocco.querySelector("h5").textContent;
    div.appendChild(h5);
    const imgPreferiti = document.createElement('img');
    imgPreferiti.classList.add("pointer");
    imgPreferiti.dataset.codice = codice;
    imgPreferiti.src = "Imm-Preferito.jpg";
    imgPreferiti.addEventListener("click", togliPreferiti);
    div.appendChild(imgPreferiti);
    return giocoPreferito;
}
let sottoSitoAperto = null;
let giochiAperti = [];
let vecchiaValue = '';

function ricerca(event){
    const nuovaValue = event.currentTarget.value;
    if(vecchiaValue.length < nuovaValue.length)
        nascondiGiochi(nuovaValue.toUpperCase()[nuovaValue.length-1]);
    else if(vecchiaValue.length > nuovaValue.length){
        let lettera;
        for(letteraVecchia of vecchiaValue)
            if(nuovaValue.indexOf(letteraVecchia) === -1)
                lettera = letteraVecchia;
        mostraGiochi(nuovaValue.toUpperCase(), vecchiaValue.toUpperCase()[vecchiaValue.length-1]);
    }
    vecchiaValue = nuovaValue;
}

function nascondiGiochi(lettera){
    for(item of giochiAperti){
        if(!item.gioco.classList.contains('hidden'))
            if(item.lista.indexOf(lettera) === -1)
                item.gioco.classList.add('hidden');
            else
                item.lista.splice(item.lista.indexOf(lettera), 1);
    }
}

function mostraGiochi(stringa, letteraCancellata){
    let mostra = true;
    for(item of giochiAperti){
        mostra = true;
        if(item.gioco.classList.contains('hidden')){
            item.lista = [];
            for(lettera of item.gioco.querySelector('h5').textContent.toUpperCase())
                item.lista.unshift(lettera);
            for(lettera of stringa)
                if(item.lista.indexOf(lettera) === -1)
                    mostra = false;
                else
                    item.lista.splice(item.lista.indexOf(lettera), 1)
            if(mostra)
                item.gioco.classList.remove('hidden');
        }
        else 
            item.lista.unshift(letteraCancellata);
    }
}
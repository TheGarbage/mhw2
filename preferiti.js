function inserisciPreferiti(event){
    const imgPreferiti = event.currentTarget;
    imgPreferiti.removeEventListener('click', inserisciPreferiti);
    const blocco = imgPreferiti.parentNode.parentNode.parentNode;
    const categoria = blocco.parentNode.parentNode.parentNode;
    const preferiti = categoria.querySelector(".preferiti");
    if(preferiti.classList.contains('hidden'))
        preferiti.classList.remove('hidden');
    preferiti.querySelector(".giochi").appendChild(blocco);
    giochiPreferiti.unshift(blocco.querySelector("h5").textContent);
    imgPreferiti.src = "Imm-Preferito.jpg";
    const nonPreferiti = categoria.querySelector(".nonPreferiti");
    if(nonPreferiti.querySelector(".gioco") === null)
        nonPreferiti.classList.add('hidden');
    imgPreferiti.addEventListener('click', togliPreferiti);
}

function togliPreferiti(event){
    const imgPreferiti = event.currentTarget;
    imgPreferiti.removeEventListener('click', togliPreferiti);
    const blocco = imgPreferiti.parentNode.parentNode.parentNode;
    const categoria = blocco.parentNode.parentNode.parentNode;
    const nonPreferiti = categoria.querySelector(".nonPreferiti");
    if(nonPreferiti.classList.contains('hidden'))
        nonPreferiti.classList.remove('hidden');
    nonPreferiti.querySelector(".giochi").appendChild(blocco);
    giochiPreferiti.splice(giochiPreferiti.indexOf(blocco.querySelector("h5").textContent), 1);
    imgPreferiti.src = "Imm-NonPreferito.jpg";
    const preferiti = categoria.querySelector(".preferiti");
    if(preferiti.querySelector(".gioco") === null)
        preferiti.classList.add('hidden');
    imgPreferiti.addEventListener('click', inserisciPreferiti);
}
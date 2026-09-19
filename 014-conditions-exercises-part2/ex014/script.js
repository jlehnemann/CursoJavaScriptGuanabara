function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>=0 && hora < 12) {
        //BOM DIA!
        img.src = 'img_manha.png';
        document.body.style.background = '#c2b097';
    }
    else if (hora>=12 && hora < 18) {
        //BOA TARDE!
        img.src = 'img_tarde.png';
        document.body.style.background = '#887d1e';
    }
    else {
        //BOA NOITE!
        img.src = 'img_noite.png';
        document.body.style.background = '#f5960e';
    }
}


alert('Ola! Esse é um site teste, está sujeito a bugs e glitchs ')

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#bf9567'
    } else if(hora >= 12 && hora <= 18){
    //BOA TARDE!!
    img.src = 'fototarde.png'
    document.body.style.background = '#f38235'
} else {
    //BOA NOITE!!
    img.src = 'fotonoite.png'
    document.body.style.background = '#15293c'
}

} 
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagemD')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#0065FA'
        
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#FFB329'

    }else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#110448'

    }
}

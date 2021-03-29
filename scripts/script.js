function carregar() {
    var agora = window.document.getElementById("agora")
    var hora = new Date
    var horaDoDia = hora.getUTCHours() - 3
    var imagem = window.document.getElementById("img")
    var section = window.document.getElementById("section")
    var msg = window.document.getElementById("mensagem")
    
    if (horaDoDia >= 5) {
        imagem.innerHTML = '<img src="images/sunrise-field-mid-size.jpg" alt="Nascer do sol em um campo">'
        window.document.body.style.backgroundColor = "#dcd0ac"
        msg.innerHTML = "Tenha um bom dia!"
        //morning
    }
    if (horaDoDia >= 12) {
        window.document.body.style.backgroundColor = "#a97b68"
        imagem.innerHTML = '<img src="images/sweden-field-forest-tree-mid-size.jpg" alt="Campo com arvóres na Suécia durante a tarde">'
        section.style.boxShadow = "5px 5px 10px #5f4f48"
        msg.innerHTML = "Tenha uma boa tarde!"    
        //afternoon
    }
    if(horaDoDia >= 18) {
        imagem.innerHTML = '<img src="images/foggy-night-in-alley.png" alt="Noite em uma floresta com névoa">'
        window.document.body.style.backgroundColor = "#474948"
        section.style.boxShadow = "5px 5px 10px #161616"
        msg.innerHTML = "Tenha uma boa noite!"    
        //night
    }        

    agora.innerHTML = `Agora são ${horaDoDia} horas.`    
}

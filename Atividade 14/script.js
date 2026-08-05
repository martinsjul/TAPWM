function validar() {
    var f = document.forms["formPrincipal"];
    
    var nome = f.elements["nome"].value;
    var comentario = f.elements["comentario"].value;
    var radios = f.elements["pesquisa"];

    if (nome.length < 10) {
        alert("O Nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    var selecionado = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = radios[i].value;
            break;
        }
    }

    if (selecionado === "") {
        alert("Por favor, responda à pesquisa.");
        return false;
    }

    if (selecionado === "Sim") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}
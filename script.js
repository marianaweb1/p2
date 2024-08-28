function loadDefault(){
    var bttOper = document.createElement("button");
    bttOper.innerHTML = "Gerar";
    bttOper.setAttribute("type", "button");
    bttOper.setAttribute("id", "botao1");
    bttOper.addEventListener("click", gerar);

    document.querySelector("body").appendChild(bttOper);
}
function gerar(){
    var qtd = parseInt(document.getElementById("iptQtd").value);

    const divMsg = document.createElement("div");
    divMsg.setAttribute("id", "divMsg");

    //alert(qtd);
    for(let k=0; k<qtd; k++){
        var spnRes = document.createElement("span");
        spnRes.setAttribute("class", "mensagem");
        spnRes.textContent = "Larissa";
        divMsg.appendChild(spnRes); 
    }

    document.querySelector("body").appendChild(divMsg);

    mudarBotao();
}
function mudarBotao(){
    var bttOper1 = document.getElementById("botao1");
    bttOper1.innerHTML = "Apagar";

    if (bttOper1.textContent == "Gerar") {
        bttOper1.removeEventListener("click", gerar);
        bttOper1.textContent = "Apagar";
        bttOper1.addEventListener("click", apagar);
    }
    else if (bttOper1.textContent == "Apagar"){
        bttOper1.removeEventListener("click", apagar);
        bttOper1.textContent = "Gerar";
        bttOper1.addEventListener("click", gerar);
    }
}
function apagar(){
    var qtd = document.getElementById("iptQtd").value = "";
    document.getElementById("divMsg").remove();
    mudarBotao();
}
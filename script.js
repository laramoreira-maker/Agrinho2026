const botao = document.getElementById("modoEscuro");

botao.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botao.innerHTML = "Modo Claro";
    }else{
        botao.innerHTML = "Modo Escuro";
    }

});

function mostrarMensagem(){

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if(nome === "" || idade === ""){
        alert("Preencha seu nome e sua idade.");
        return;
    }

    document.getElementById("mensagem").innerHTML =
    "Olá, " + nome + "!";
}
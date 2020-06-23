var pacientes = document.querySelectorAll("paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); // event: obtém a td (o elemento que foi clicado), parentNode: obtém a tr

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
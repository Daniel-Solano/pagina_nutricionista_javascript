// AJAX - Requisições assíncronas

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando paciente...");
    
    var xhr = new XMLHttpRequest(); // Cria o objeto que faz a requisição HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Especifica o método e URL

    xhr.addEventListener("load", function(){ // Coleta a resposta
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) { // Verifica se a conexão está ok
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // Resposta vem como string
            var pacientes = JSON.parse(resposta); // Lê o arquivo JSON e transforma num objeto Javascript
        
            pacientes.forEach(function(paciente){ // Outra forma de se usar o loop for
            adicionaPacienteNaTabela(paciente); // Chama a função que adiciona na tabela
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);            
            erroAjax.classList.remove("invisivel"); // Torna a mensagem de erro visível
        }
        
    });

    xhr.send(); // Envia a requisição 
});
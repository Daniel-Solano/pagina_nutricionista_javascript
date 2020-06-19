var titulo = document.querySelector(".titulo"); // querySelector só traz o primeiro elemento
titulo.textContent = "Aparecida Nutricionista" // Mostra o texto, conteúdo da tag.

var pacientes = document.querySelectorAll(".paciente"); // "#" é o seletor de id e 'querySelectorAll' traz todos os elementos.

for (var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso") // "." é o seletor de classe.
    var peso = tdPeso.textContent; // Também podemos adicionar esse código no trecho acima para ficar em uma só linha.

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhvalido = true;
    var alturaEhvalida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhvalido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido"); // classList retorna uma lista com as classes usadas no elemento HTML.
        // Usamos a função add para adicionar uma nova classe, que neste caso altera a formatação (ela foi criada no arquivo css). 
    }

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        pesoEhvalido = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhvalida && pesoEhvalido) {
        var imc = calculaImc(altura, peso);
        tdImc.textContent = imc; // Método 'toFixed' arrendoda números.
    }
}

function calculaImc(altura, peso) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}



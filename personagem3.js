function fada1(){
    var transporte = prompt("Vamos atrás da capa da invisibilidade: 1-sair da base voando ou 2-correndo?");
    if (transporte == "1"){
        alert("Você passou de fase!");
        fada2();
    }
    else if (transporte == "2"){
        alert("Você foi derrotado!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>Você foi derrotado por uma fera violenta!<p><div class="gameover"><img id="perdeu" src="gameover.jpg"></div></div>')
    }
    else {
        alert("Transporte inválido, escolha outro!!")
    }
}

function fada2(){
    var escolha = prompt("Tem uma montanha à sua frente: 1-entrar na caverna ou 2-continuar voando?")
    if (escolha == "1"){
        alert("Você passou de fase!");
        fada3();
    }
    else if (escolha == "2"){
        alert("Você foi derrotado! Uma águia gigante te atacou!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>Um monstro gigante pisou em você!!</p></div><div class="gameover"><img id="perdeu" src="gameover.jpg"></div>');
    }
    else {
        alert("Caminho inválido, escolha outro!!!");
    }
}

function fada3(){
    var batalha = prompt("Você entrou na caverna: 1- lutar com o caçador ou 2- Se esconder?")
    var bater = 0;
        if (batalha == "1") {
            while (bater < 20){
                alert ("Você não bateu o suficiente!");
                bater++;
                alert(bater);
            }
            alert ("Você conseguiu a Capa da Invisibilidade!! Você venceu!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="texto_final"><p>Bomba desativada!</p><img id="vitoria" src="vitoria.jpg"></div>');
        }
        else {
            alert("Você perdeu!! O caçador te matou!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css">><img id="perdeu" src="gameover.jpg"></div>')
        }
        }
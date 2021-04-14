function mago1(){
    var arma = prompt("Escolha sua arma: cartas ou espada?");
    if (arma == "cartas"){
        alert("Você passou de fase!");
        mago2();
    }
    else if (arma == "espada"){
        alert("Você foi derrotado!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>Você foi derrotado por uma fera violenta!<p><div class="gameover"><img id="perdeu" src="gameover.jpg"></div></div>')
    }
    else {
        alert("Arma inválida, escolha outra!!");
    }
}


function mago2(){
    var caminho = prompt("Escolha um caminho: pelo céu ou pela terra?")
    if (caminho == "céu"){
        alert("Você passou de fase!");
        mago3();
    }
    else if (caminho == "terra"){
        alert("Você foi derrotado!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>Um monstro gigante pisou em você!!</p></div><div class="gameover"><img id="perdeu" src="gameover.jpg"></div>');
    }
    else {
        alert("Caminho inválido, escolha outro!!!");
    }
}


function mago3(){
        var senha = prompt("Senha para o cofre secreto: escolha um número de 10 a 20?")
        if (senha == "15") {
            alert ("Senha correta!! Você conseguiu a Varinha das Varinhas!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="texto_final"><p>Bomba desativada!</p><img id="vitoria" src="vitoria.jpg"></div>');
        }
        else {
            alert("Você perdeu!!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css">><img id="perdeu" src="gameover.jpg"></div>')
        }
        }
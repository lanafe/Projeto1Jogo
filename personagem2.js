function meta1(){
    var local = prompt("Escolha um caminho: pela floresta ou pelo mar?");
    if (local == "floresta") {
        alert("Você passou de fase!");
        meta2();
    }

    else if (local == "mar"){
        alert("Você foi derrotado!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>Você foi derrotado por uma fera violenta!<p><div class="gameover"><img id="perdeu" src="gameover.jpg"></div></div>');
    }
    else {
        alert("Caminho inválido, escolha outro!!");
    }
}

function meta2(){
    var obstaculo = prompt("Uma fera gigante apareceu: matá-la ou fugir?");
    var bater = 0;
    if (obstaculo == "matá-la"){
        while (bater < 20){
            alert ("Você não bateu o suficiente!");
            bater++;
            alert(bater);
        }
        alert("Você passou de fase!");
        meta3();
    }
    else if (caminho == "fugir"){
        alert("Você foi derrotado!");
        document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="gameover"><p>A fera correu e te matou!!</p></div><div class="gameover"><img id="perdeu" src="gameover.jpg"></div>');
    }
    else {
        alert("Caminho inválido, escolha outro!!!");
    }
}


function meta3(){
    var bater = 0;
    var achar = prompt("Você chegou no coração da floresta! Procurar a pedra cavando ou mergulhando no poço?")
        if (achar == "cavando") {
            alert ("Uma minhoca radioativa veio te atacar, bata 15 vezes nela!!");
            while (bater < 15){
                alert ("Você não bateu o suficiente");
                bater++;
                alert (bater);
            }
            alert ("Você conseguiu a Pedra da Ressureição!! Você venceu!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css"><div class="texto_final"><p>Bomba desativada!</p><img id="vitoria" src="vitoria.jpg"></div>');
        }
        else {
            alert("Você perdeu!!!");
            document.write('<link rel="stylesheet" type="text/css" href="escolha_dos_personagens.css">><img id="perdeu" src="gameover.jpg"></div>');
        }
        }
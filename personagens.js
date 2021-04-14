function escolher(){
    while (true){
        var boneco = prompt ("Qual personagem você quer escolher: 1, 2 ou 3?");
        if (boneco == 1){
            mago1();
            break;
        }
        else if (boneco == 2){
            meta1();
            break;
        }
        else if (boneco == 3){
            fada1();
            break;
        }
        else {
            alert ("Personagem inválido!");
        }
    }
}
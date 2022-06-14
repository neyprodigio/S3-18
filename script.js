
function lista () {
    let refri =  parseFloat(prompt("Digite o valor do Refrigerante: "));
    let quantidadeRefri = parseFloat(prompt("Quantas unidades?"))
    let totalRefri = refri * quantidadeRefri;

    let macarrao = prompt("Digite o valor do Macarrão: ");
    let quantidadeMacarrao = parseFloat(prompt("Quantas unidades?"));
    let totalMacarrao = macarrao * quantidadeMacarrao;

    let ervilha = prompt("Digite o valor da ervilha: ");
    let quantidadeErvilha = parseFloat(prompt("Quantas unidades?"));
    let totalErvilha = ervilha * quantidadeErvilha;

    let arroz = prompt("Digite o valor do arroz: ");
    let quantidadeArroz = parseFloat(prompt("Quantas unidades?"));
    let totalArroz = arroz * quantidadeArroz;

    let feijao = prompt("Digite o valor do Feijão: ");
    let quantidadeFeijao = parseFloat(prompt("Quantas unidades?"));
    totalFeijao = feijao * quantidadeFeijao;

    let vinho = prompt("Digite o valor do vinho");
    let quantidadeVinho = parseFloat(prompt("Quantas unidades?"));
    let totalVinho = vinho * quantidadeVinho;

    let total = ( totalRefri ) + ( totalMacarrao) + ( totalErvilha )
     + ( totalArroz ) + ( totalFeijao ) + ( totalVinho );

    let metade = total / 2;
    let metadeMaisVinho = metade + totalVinho;
    let metadeMenosVinho = metade - vinho;
    
    if ( total %2 == 0 ) {

        alert (`Valor total a ser pago: R$ ${total} \n
        Valor a ser pago por mim: R$ ${metadeMenosVinho}\n
        Valor a ser pago por meu amigo: R$ ${metadeMaisVinho}`);

    } else {
        alert (`Valor total a ser pago: R$ ${total}\n
        Valor a ser pago por mim: R$ ${metade}\n
        Valor a ser pago por meu amigo: R$ ${metade}`);
    }

}
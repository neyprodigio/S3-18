

    let refri = parseFloat(prompt("Digite o valor do Refrigerante: "));
    let quantidadeRefri = parseInt(prompt("Quantas unidades?"))
    let totalRefri = refri * quantidadeRefri;

    let macarrao = parseFloat(prompt("Digite o valor do Macarrão: "));
    let quantidadeMacarrao = parseInt(prompt("Quantas unidades?"));
    let totalMacarrao = macarrao * quantidadeMacarrao;

    let ervilha = parseFloat(prompt("Digite o valor da ervilha: "));
    let quantidadeErvilha = parseInt(prompt("Quantas unidades?"));
    let totalErvilha = ervilha * quantidadeErvilha;

    let arroz = parseFloat(prompt("Digite o valor do arroz: "));
    let quantidadeArroz = parseInt(prompt("Quantas unidades?"));
    let totalArroz = arroz * quantidadeArroz;

    let feijao = parseFloat(prompt("Digite o valor do Feijão: "));
    let quantidadeFeijao = parseInt(prompt("Quantas unidades?"));
    let totalFeijao = feijao * quantidadeFeijao;

    let vinho = parseFloat(prompt("Digite o valor do vinho"));
    let quantidadeVinho = parseInt(prompt("Quantas unidades?"));
    let totalVinho = vinho * quantidadeVinho;

    let total = totalRefri + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;

    let metade = total / 2;
    let totalSemVinho = totalRefri + totalMacarrao + totalErvilha + totalArroz + totalFeijao;
    
    if ( total %2 == 0 ) {

        alert (`Valor total a ser pago: R$ ${total}\n
        Valor a ser pago por mim: R$ ${totalSemVinho/2}\n
        Valor a ser pago por meu amigo: R$ ${totalSemVinho/2 + totalVinho}`)


    } else {
        alert (`Valor total a ser pago: R$ ${total}\n
        Valor a ser pago por mim: R$ ${metade}\n
        Valor a ser pago por meu amigo: R$ ${metade}`);
    }


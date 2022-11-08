function continuar(){
    var opcao = prompt('Quer continuar s/n?')
    if (opcao = 's'){
        var opcao = prompt('O que deseja: SOMA,SUBTRAÇÃO,DIVISÃO OU MULTI?');
        opercao()
    }else{
        
    }
}

function int(n1,n2){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    return n1,n2
}

function opercao(){
    var operador = prompt('O que deseja: +,-,*,/?');

    if (operador == '+'){
        var n1 = prompt('Primeiro numero:');
        var n2 = prompt('Segundo numero:');
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        var soma = n1 + n2;
        alert('A soma é: '+soma);
    }else if (operador == '-'){
        var n1 = prompt('Primeiro numero:');
        var n2 = prompt('Segundo numero:');
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        var subtracao = n1 - n2;
        alert('A subtração é: '+subtracao);
    }else if (operador == '/'){
        var n1 = prompt('Primeiro numero:');
        var n2 = prompt('Segundo numero:');
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        var divisao = n1 / n2;
        alert('A divisão é: '+divisao);
    }else if (operador == '*'){
        var n1 = prompt('Primeiro numero:');
        var n2 = prompt('Segundo numero:');
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        var multi = n1 * n2;
        alert('A multiplicação é: '+multi);
    }else{
        alert('Operador invalido, tente novamente!')
        opercao()
    }
}

opercao()
continuar()
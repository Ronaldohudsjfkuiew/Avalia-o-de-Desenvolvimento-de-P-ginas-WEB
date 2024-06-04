function dividirNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultadoDividir = numero1 / numero2
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultadoDividir
    if((numero2==0)){
        alert("Seu numero não pode ser 0, digite outro")
    }
}

function mediaQuatro(){
    var numero3 = document.getElementById("num3").value;
    var numero3Alterado = parseInt(numero3)
    var numero4 = document.getElementById("num4").value;
    var numero4Alterado = parseInt(numero4)
    var numero5 = document.getElementById("num5").value;
    var numero5Alterado = parseInt(numero5)
    var numero6 = document.getElementById("num6").value;
    var numero6Alterado = parseInt(numero6)
    var resultado = (numero3Alterado+numero4Alterado+numero5Alterado+numero6Alterado)/4
    if(resultado>5){
        alert(" O aluno foi aprovado com: "+resultado)
    }

    else{
        alert(" O aluno foi reprovado com: "+resultado)
    }

}

function somarNumeros(){
    var numero7 = document.getElementById("num7").value;
    var numero7Alterado = parseInt(numero7)
    var numero8 = document.getElementById("num8").value;
    var numero8Alterado = parseInt(numero8)
    var numero9 = document.getElementById("num9").value;
    var numero9Alterado = parseInt(numero9)
    var resultado = numero7Alterado+numero8Alterado;
    if(numero9Alterado<resultado){
        alert(resultado+ " é maior que " +numero9Alterado)
    }
    else{
        alert(resultado+ " é menor que " +numero9Alterado)
    }

}

function areaNumeros(){
    var numero10 = parseInt(document.getElementById("num10").value);
    var numero11 = parseInt(document.getElementById("num11").value);
    var resultado = numero10 * numero11
    alert (resultado)
    var teste = document.getElementById("resultadoarea")
    teste.innerHTML=resultado
}

function reajuste(){
    var numero12 = parseInt(document.getElementById("num12").value);
    var numero13 = parseInt(document.getElementById("porc").value);
    var resultado = numero12*(numero13/100)+numero12
    var teste = document.getElementById("salarioAtual")
    teste.innerHTML=resultado
}

function numero(){
    var numero17 = parseInt(document.getElementById("num17").value);
    if(numero17<10){
        alert("o numero digitado é menor que 10")
    }
    else{
        alert("o numero digitado é maior que 10")
    }
    
}
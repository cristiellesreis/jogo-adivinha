var tentativas = document.getElementById('tentativas');
var campoNumero = document.getElementById('campo-numero');
var botaoAdivinhar = document.getElementById('botao-adivinhar');
var mensagem = document.getElementById('mensagem');
var numeroDaSorte = sorteia(100);
var maximoTentativas = 10;

tentativas.innerHTML = maximoTentativas;

function adivinharNumero() {
    if(maximoTentativas == 0){
        mensagem.innerHTML = 'Ops, acabaram suas tentativas!';
        return;
    }
    var numero = campoNumero.value;
    console.log(numeroDaSorte);
    if(numero != numeroDaSorte){
        maximoTentativas--;
        tentativas.innerHTML = maximoTentativas;
        if(numeroDaSorte > numero){
            mensagem.innerHTML = 'Quase...Tente um número maior!';
        }else{
            mensagem.innerHTML = 'Quase...Tente um número menor!';
        }
    } else{
        mensagem.innerHTML = 'Parabéns! Você acertou o número!';
    }
}

function sorteia(n) {
    return Math.round(Math.random () * n);
} 
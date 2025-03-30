let num = document.querySelector('div#num')
var res1 = 0
var res2 = 0
var operacao = ''

function apagar() {
    num.innerHTML = ''
}

function um() {
    num.innerHTML = '1'
}

function dois() {
    num.innerHTML = '2'
}

function tres() {
    num.innerHTML = '3'
}

function quatro(){
    num.innerHTML = '4'
}

function cinco() {
    num.innerHTML = '5'
}

function seis() {
    num.innerHTML = '6'
}

function sete() {
    num.innerHTML = '7'
}

function oito() {
    num.innerHTML = '8'
}

function nove() {
    num.innerHTML = '9'
}

function zero() {
    num.innerHTML = '0'
}

function somar() {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' + '
    operacao = 'soma'
}

function subtrair() {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' - '
    operacao = 'sub'
}


function igual() {
    switch (operacao) {
        case 'soma':
            res2 = (res1 + Number(num.innerHTML)) 
            num.innerHTML = res2
            break;
        case 'sub':
            res2 = (res1 - Number(num.innerHTML))
            num.innerHTML = res2
            break;
    }
}



let num = document.querySelector('div#num')
var res1 = 0
var res2 = 0
var operacao = ''

function apagar() {
    num.innerHTML = ''
}

function um() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '1'
    } else {
        num.innerHTML += '1'
    }
}

function dois() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '2'
    } else {
        num.innerHTML += '2'
    }
}

function tres() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '3'
    } else {
        num.innerHTML += '3'
    }
}

function quatro(){
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '4'
    } else {
        num.innerHTML += '4'
    }
}

function cinco() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '5'
    } else {
        num.innerHTML += '5'
    }
}

function seis() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '6'
    } else {
        num.innerHTML += '6'
    }
}

function sete() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '7'
    } else {
        num.innerHTML += '7'
    }
}

function oito() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '8'
    } else {
        num.innerHTML += '8'
    }
}

function nove() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '9'
    } else {
        num.innerHTML += '9'
    }
}

function zero() {
    if (isNaN(Number(num.innerHTML)) == true) {
        num.innerHTML = '0'
    } else {
        num.innerHTML += '0'
    }
}

function parentesis() {
    num.innerHTML = `(${num.innerHTML})`
}

function ponto() {
    num.innerHTML += '.'
}

function mudasinal() {
    ms = Number(num.innerHTML)
    ms = (ms * (-1))
    num.innerHTML = ms.toString()
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

function multiplicar() {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' X '
    operacao = 'mult'
}

function dividir() {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' ÷ '
    operacao = 'div'
}

function porcentagem() {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' % '
    operacao = 'porc'
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
        case 'mult':
            res2 = (res1 * Number(num.innerHTML))
            num.innerHTML = res2
            break;
        case 'div':
            res2 = (res1 / Number(num.innerHTML))
            num.innerHTML = res2
            break;
        case 'porc':
            res2 = ((res1 * Number(num.innerHTML)) / 100)
            num.innerHTML = res2
            break;
    }
}



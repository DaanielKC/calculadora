let num = document.querySelector('div#num')
let operador = document.getElementById('operadores')
let res1 = 0
let res2 = 0
let operacao = ''
let paren = ''
let paren2 = ''
let numsemparent = 0

function apagar() {
    num.innerHTML = ''
    operador.innerHTML = ''
    res1 = 0
    res2 = 0
    operacao = ''
    paren = ''
    paren2 = ''
    numsemparent = 0
}

function um() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '1'
    } else {
        num.innerHTML += '1'
    }
}

function dois() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '2'
    } else {
        num.innerHTML += '2'
    }
}

function tres() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '3'
    } else {
        num.innerHTML += '3'
    }
}

function quatro(){
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '4'
    } else {
        num.innerHTML += '4'
    }
}

function cinco() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '5'
    } else {
        num.innerHTML += '5'
    }
}

function seis() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '6'
    } else {
        num.innerHTML += '6'
    }
}

function sete() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '7'
    } else {
        num.innerHTML += '7'
    }
}

function oito() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '8'
    } else {
        num.innerHTML += '8'
    }
}

function nove() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '9'
    } else {
        num.innerHTML += '9'
    }
}

function zero() {
    if (paren == 'sim') {
        return
    }
    if (operador.innerHTML != '') {
        num.innerHTML = '0'
    } else {
        num.innerHTML += '0'
    }
}

function parentesis() {
    if (paren == 'sim' && numsemparent == 0) {
        num.innerHTML = ''
        return
    } else if (paren == 'sim') {
        num.innerHTML = String(numsemparent)
        paren = 'nao'
        paren2 = 'nao'
        return
    }
    numsemparent = Number(num.innerHTML)
    num.innerHTML = `(${num.innerHTML})`
    paren = 'sim'
    paren2 = 'sim'
}

function ponto() {
    if (paren == 'sim') {
        return
    }
    if (num.innerHTML.includes('.'))
        return
    num.innerHTML += '.'
}

function mudasinal() {
    ms = Number(num.innerHTML)
    ms = (ms * (-1))
    num.innerHTML = ms.toString()
}

function somar() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = '+'
        operacao = 'soma'
        paren = 'nao'
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' + '
    operador.innerHTML = '+'
    operacao = 'soma'
    paren = 'nao'
    }
}

function subtrair() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = '-'
        operacao = 'sub'
        paren = 'nao'
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' - '
    operador.innerHTML = '-'
    operacao = 'sub'
    paren = 'nao'
    }
}

function multiplicar() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = 'x'
        operacao = 'mult'
        paren = 'nao'
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' x '
    operador.innerHTML = 'x'
    operacao = 'mult'
    paren = 'nao'
    }
}

function dividir() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = '÷'
        operacao = 'div'
        paren = 'nao'
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' ÷ '
    operador.innerHTML = '÷'
    operacao = 'div'
    paren = 'nao'
    }
}

function porcentagem() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = '%'
        operacao = 'porc'
        paren = 'nao'
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = ' % '
    operador.innerHTML = '%'
    operacao = 'porc'
    paren = 'nao'
    }
}


function igual() {
    if (paren2 == 'sim') {
        if (isNaN(Number(num.innerHTML)) == false) {
            res1 = numsemparent
        } else {
            num.innerHTML = numsemparent.toString()
        }
    }
    
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
            if (Number(num.innerHTML) == 0) {
                num.innerHTML = 'Impossível calcular'
            } else {
                res2 = (res1 / Number(num.innerHTML))
                num.innerHTML = res2
            }
            break;
        case 'porc':
            res2 = ((res1 * Number(num.innerHTML)) / 100)
            num.innerHTML = res2
            break;
    }
    paren = 'nao'
    paren2 = 'nao'
    operador.innerHTML = ''
    numsemparent = 0
}



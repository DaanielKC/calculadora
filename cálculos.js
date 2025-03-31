let num = document.querySelector('div#num')
let operador = document.getElementById('operadores')
let res1 = null
let res2 = null
let operacao = ''
let tem_parent = false
let parent_na_op = false
let num_sem_parent = null
let ms = null

function apagar() {
    num.innerHTML = ''
    operador.innerHTML = ''
    res1 = null
    res2 = null
    operacao = ''
    tem_parent = false
    parent_na_op = false
    num_sem_parent = null
    ms = null
}

function numero(n) {
    if (tem_parent) return
    if (operador.innerHTML != '' && isNaN(num.innerHTML) && tem_parent == false) {
        num.innerHTML = `${n}`
    } else {
        num.innerHTML += `${n}`
    }
}

function parentesis() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) return
    if (tem_parent && num_sem_parent == null) {
        num.innerHTML = ''
        tem_parent = false
        parent_na_op = false
        return
    } else if (tem_parent) {
        num.innerHTML = String(num_sem_parent)
        tem_parent = false
        parent_na_op = false
        return
    } else if (num.innerHTML == '') {
        num.innerHTML = '()'
        tem_parent = true
        parent_na_op = true
    } else {
        num_sem_parent = Number(num.innerHTML)
        num.innerHTML = `(${num.innerHTML})`
        tem_parent = true
        parent_na_op = true
    }
}

function ponto() {
    if (tem_parent) return
    if (num.innerHTML.includes('.')) return
    num.innerHTML += '.'
}

function mudasinal() {
    if (isNaN(num.innerHTML) && tem_parent== false) return
    if (tem_parent && num_sem_parent == null) {
        return 
    } else  if (tem_parent) {
        ms = num_sem_parent
        ms = (ms * -1)
        num_sem_parent = ms
        num.innerHTML = `(${ms})`
    } else {
        ms = Number(num.innerHTML)
        ms = (ms * (-1))
        num.innerHTML = ms.toString() 
    }
}

function calc(op) {
    if (num.innerHTML == '') return
    if (tem_parent && num_sem_parent == null) return 
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) {
        return
    } else if (operador.innerHTML != '') {
        igual()
        res1 = Number(num.innerHTML)
        operador.innerHTML = op
        operacao = op
        tem_parent = false
    } else {
    res1 = Number(num.innerHTML)
    num.innerHTML = op
    operador.innerHTML = op
    operacao = op
    tem_parent = false
    }
    ms = null
}

function igual() {
    if (isNaN(num.innerHTML) && num.innerHTML.includes('(') == false) return
    if (parent_na_op) {
        if (isNaN(Number(num.innerHTML)) == false) {
            res1 = num_sem_parent
        } else {
            num.innerHTML = num_sem_parent.toString()
        }
    }
    
    switch (operacao) {
        case '+':
            res2 = (res1 + Number(num.innerHTML)) 
            num.innerHTML = res2
            break;
        case '-':
            res2 = (res1 - Number(num.innerHTML))
            num.innerHTML = res2
            break;
        case 'x':
            res2 = (res1 * Number(num.innerHTML))
            num.innerHTML = res2
            break;
        case '÷':
            if (Number(num.innerHTML) == 0) {
                num.innerHTML = 'Impossível calcular'
            } else {
                res2 = (res1 / Number(num.innerHTML))
                num.innerHTML = res2
            }
            break;
        case '%':
            res2 = ((res1 * Number(num.innerHTML)) / 100)
            num.innerHTML = res2
            break;
    }
    tem_parent = false
    parent_na_op = false
    operador.innerHTML = ''
    num_sem_parent = null
    ms = null
}
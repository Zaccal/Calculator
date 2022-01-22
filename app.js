// Получаем div с классам input
const input = document.querySelector('.input')

// Функция для вывода текста в input
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = ""
        input.textContent = input.textContent + num
    } else {
        input.textContent = input.textContent + num
    }
}

// Функция для удаление содержимого
function clean() {
    input.textContent = "0"
}
// Удаление одного символа
function  back() {
    const exp = input.textContent
    input.textContent = exp.substr(0, exp.length-1)
    if (input.textContent == 0) {
        input.textContent = '0'
    }
}
// Решает задачу черис eval()
function equal() {
    const exp = input.textContent
    if (exp) {
        input.textContent = eval(exp)
    }
}

// Функция процент
function percent() {
    input.textContent = eval(input.textContent)/100
}

// Имет 2 функци
function constant(name) {
    // функция Пи
    if (name === "pi") {
        if (input.textContent == 0) {
            input.textContent = ''
        }
        input.textContent =  input.textContent + Math.PI.toFixed(8)
    } else if (name === 'e') { // функция E
        if (input.textContent == 0) {
            input.textContent = ''
        }
        input.textContent =  input.textContent + Math.E.toFixed(8)
    }
}

// кыадрат функци
function operation(name) {
    if (name === 'sqrt') {
        input.textContent = Math.sqrt(eval(input.textContent))
    }
    if (name === 'sqr') {
        input.textContent = Math.pow(eval(input.textContent), 2)
    }
    if (name === '^-1') {
        input.textContent = Math.pow(eval(input.textContent), -1)
    }
    if (name === 'sqr3') {
        input.textContent = Math.pow(eval(input.textContent), 3)
    }
}

//Факториал числа
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+eval(input.textContent))
}
// логарифмы
function log(name) {
    if (name === 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8)
    } else if (name === 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8)
    }
}
//Переключение с градусов на радианы
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
    }
})

//Синусы и косинусы
function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'ctg') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}
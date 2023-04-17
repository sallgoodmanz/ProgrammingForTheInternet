
// “Операції над даними: Побітові операції”.
function question() {
    var quiz = new Quiz();
    quiz.promptName();

    quiz.promptQuestion("'&'; Побітове 'АБО'; Повертає число, результат побітового порівняння 'АБО'", false);
    quiz.promptQuestion("'|'; Побітове 'І'; Повертає число, результат побітового порівняння.", false);
    quiz.promptQuestion("'~'; Побітове 'НЕ'; Повертає число, з бітами, розташованими в зворотному порядку.", true);
    quiz.promptQuestion("'<<'; 'Зсув вліво'; Зсовує перший операнд вліво на число розрядів, заданих другим операндом. Праві біти, що звільняються, заповнюються нулями ", true);
    quiz.promptQuestion("'>>'; 'Зсув вправо'; Зсовує перший операнд вправо на число розрядів, заданих другим операндом. Ліві біти, що звільняються, відкидаються ", true);
    quiz.promptQuestion("'>>>'; 'Повний зсув вправо' Зсовує перший операнд вправо на число розрядів, заданих другим операндом. Ліві біти, що звільняються, заповнюються нулями", true);

    alert("Студент " + quiz.getName() + " отримав за тест " + Math.round((quiz.getCorrectAnswer() / quiz.getAllQuestions()) * 5));
}

class Quiz {
    constructor() {
        this.questionNum = 1;
        this.correctAnswer = 1;
        this.allQuestions = 1;
    }

    promptName() {
        while (true) {
            this.name = prompt("Введіть прізвище:");
            if (this.name != null && this.name != "") {
                break;
            } else {
                alert("Потрібно ввести прізвище!");
            }
        }
    }

    promptQuestion(message, rightAnswer) {
        if (confirm((this.questionNum++) + ") " + message) == rightAnswer) {
            this.correctAnswer++;
        }
        this.allQuestions++;
    }

    getCorrectAnswer() {
        return Number(this.correctAnswer);
    }

    getAllQuestions() {
        return Number(this.allQuestions);
    }


    getName() {
        return this.name;
    }
}





// 1. Вивести на екран запит на введення додатного цілого числа №1 і
// прочитати це число і перевірити його дотримання заданої умови.
// 2. Вивести на екран запит на введення додатного цілого числа №2 і
// прочитати це число і перевірити його дотримання заданої умови.
// 3. Знайти всі парні числа, в діапазоні від меншого до більшого з введених
// чисел, які діляться без залишку на 3.



function numInRange() {
    var a = enterPosIntNum("Введіть перше додатне, ціле число");
    if (a == null)
        return;
    var b = enterPosIntNum("Введіть друге додатне, ціле число");
    if (b == null)
        return;

    if (b < a) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    var array = [];

    for (var i = a; i <= b; i++) {
        if (isOdd(i) && (i / 3 % 1 == 0)) {
            array.push(i);
        }
    }

    message = "Вводимі числа: '" + a + "' ; '" + b + "'\n";
    message += "Масив: {" + array + "}";
    alert(message);


}

function enterPosIntNum(promtMessage) {
    var isIntNum = false;
    var isNegNum = false;

    while (!(isIntNum && isNegNum)) {
        var x = prompt(promtMessage, x);
        var error = "";

        if (x == null) {
            return null;
        }

        if (isInt(x)) {
            isIntNum = true;
        } else {
            error += "Число повинно бути цілочисельним!\n\n";
        }

        if (isPositive(x)) {
            isNegNum = true;
        } else {
            error += "Число повинно бути додатнім!";
        }

        if (error != "") {
            alert(error);
        }
    }
    return Number(x);
}



function isOdd(n) {
    return Boolean(n & 1 == 1);
}

function isInt(n) {
    return n % 1 === 0;
}

function isPositive(n) {
    return Number(n.toString().replace(",", ".")).toFixed(0) >= 0;
}
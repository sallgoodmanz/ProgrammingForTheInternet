function showArrayContent(array) {
    var text = "";
    console.info(array.length);
    for (let index = 0; index < array.length; index++) {
        console.info(index);
        console.info(index + 1 == array.length);
        if (index + 1 == array.length) {
            console.info(array[index]);
            text += array[index];
        }
        console.info(index + 2 == array.length);
        if (index + 2 == array.length) {
            console.info(array[index]);
            text += array[index];
            text += " i ";
        }
        console.info(index + 2 < array.length);
        if (index + 2 < array.length) {
            console.info(array[index]);
            text += array[index];
            text += ", ";
        }

    }
    alert(text);
}




// Створіть функцію, яка перераховуватиме елементи масиву у вигляді, звичному людині. 
// Тобто, якщо у нас є масив на один елемент, вона поверне тільки його. 
// Якщо елементів в масиві два, то вони будуть зв&#39;язані союзом «і».
// Якщо елементів три, то після нульового буде поставлена кома, а останні два
// будуть виведені через союз «і». Якщо елементів більше, то перші будуть
// перераховані через кому, а останні два - через союз «і».



////////////////////////////
////////////////////////////




function oddNumInRange() {
    alert("h");
}


function blinking(id) {
    setInterval(() => {
        var f = document.getElementById(id);
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);
}


////////////////////////////
////////////////////////////


class Quiz {
    constructor() {
        this.reset();
        this.expiredTime = 20;
    }

    reset() {
        this.questionNum = 0;
        this.correctAnswers = 0;
        this.allQuestions = 1;
        this.proggres = 0;
    }

    start() {
        this.reset();
        this.promptName();
        if (this.name != null) {
            this.nextQuestion();
        }
        document.getElementById("quizz").style.display = 'block';
    }

    answer(answer) {
        if (answer == this.rightAnswer) {
            this.correctAnswer();
        }
        else {
            this.wrongAnswer();
        }
        this.nextQuestion();
    }




    nextQuestion() {
        if (this.questionNum < this.arr.length) {
            this.rightAnswer = this.arr[this.questionNum + 1];

            this.promptQuestion(this.arr[this.questionNum]);
            this.questionNum += 2;
            this.move();
        } else {
            this.endQuiz();
        }
    }

    promptQuestion(message, rightAnswer) {
        var element = document.getElementById("question");
        element.innerText = (this.allQuestions) + ") " + message;
    }





    move() {
        var elem = document.getElementById("bar");
        var width = 0;
        console.info(this.proggres + "; ");
        if (this.proggres >= 1) {
            clearInterval(this.interval);
            this.proggres--;
            elem.innerHTML = 0;
            elem.style.width = 0 + "%";
        }
        if (this.proggres < 1) {
            this.interval = setInterval(() => {
                if (width >= this.expiredTime) {
                    clearInterval(this.interval);
                    this.proggres--;
                    this.answer(!this.rightAnswer);
                    elem.innerHTML = 0;
                    elem.style.width = 0 + "%";
                    alert('Відповідь не зараховано!');
                } else {
                    width++;
                    elem.style.width = width * (100 / this.expiredTime) + "%";
                    elem.innerHTML = width;
                }

            }, 1000);
            this.proggres++;
        }



    }

    endQuiz() {
        if (this.allQuestions != 0)
            this.allQuestions--;

        alert("Студент " + this.getName() + " отримав за тест " + Math.round((this.getCorrectAnswer() / this.getAllQuestions()) * 5));
        document.getElementById("quizz").style.display = 'none';
        clearInterval(this.interval);
    }

    setQuestion(arr = Array) {
        this.arr = arr;
    }

    correctAnswer() {
        this.allQuestions++;
        this.correctAnswers++;
    }
    wrongAnswer() {
        this.allQuestions++;
    }

    promptName() {
        this.name = prompt("Введіть ФІО:");
        if (this.name == null || this.name == "") {
            this.name = null;
        }
    }

    promptGroup() {
        while (true) {
            this.group = prompt("Введіть групу:");
            if ((this.group != null && this.group != "") && isInt(this.group)) {
                break;
            } else {
                alert("Потрібно ввести цілочисельне значення!");
            }
        }
    }

    getCorrectAnswer() {
        return Number(this.correctAnswers);
    }

    getAllQuestions() {
        return Number(this.allQuestions);
    }

    getName() {
        return this.name;
    }

    getGroup() {
        return this.group;
    }
}
var seconds = 0;
function countdown() {
    seconds = 0;
    setInterval(() => {
        seconds++;
        document.getElementById("bar").innerHTML = seconds;
    }, 1000);
}


function isInt(n) {
    return n % 1 === 0;
}
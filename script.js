function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
    var operators = ['+', '-', '*', '/'];
    var randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}

function generateRandomExpression() {
    var number1 = generateRandomNumber(1, 20);
    var number2 = generateRandomNumber(1, 20);
    var operator = generateRandomOperator();

    return number1 + " " + operator + " " + number2;
}

function calculateResult(expression) {
    return eval(expression);
}

function solveMathProblems(numOfProblems) {
    for (var i = 0; i < numOfProblems; i++) {
        var expression = generateRandomExpression();
        var userAnswer = parseInt(prompt("Решите пример: " + expression));
        var correctAnswer = calculateResult(expression);

        if (userAnswer === correctAnswer) {
            console.log("Ваш ответ верный!");
        } else {
            console.log("Ваш ответ неверный. Правильный ответ: " + correctAnswer);
        }
    }
}

var numOfProblems = parseInt(prompt("Введите количество решаемых математических примеров:"));
solveMathProblems(numOfProblems);

/**
 * Created by Stefan on 20-Apr-15.
 */
var questionNo;
var answer;
var points;
var seconds_left;

function initialize() {
    questionNo = 1;
    points = 0;
    seconds_left = 10;
    nextQuestion();
}

function createQuestion(question, answerOptions, ans) {
    document.getElementById("question").innerHTML = questionNo +'. Question: '+question;
    answer = ans;

    for (var index = 0; index < answerOptions.length; index++) {
        createRadioButton(answerOptions[index]);
    }
    questionNo++;
    timer();
}

function timer() {
    document.getElementById('timer_var').innerHTML = seconds_left + ' Seconds left!';
    var interval = setInterval(function() {
        document.getElementById('timer_var').innerHTML = --seconds_left + ' Seconds left!';

        if (seconds_left <= 0)
        {
            clearInterval(interval);
            seconds_left = 10;
            evaluateQuestion();
        }
    }, 1000);
}



function evaluateQuestion() {
    var radios = document.getElementsByName("answerOptions");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(i == answer){
                points++;
            }
        }
    }
    removePreviousQuestion();
    nextQuestion();
}

//http://stackoverflow.com/a/3955238
function removePreviousQuestion() {
    var placeholder = document.getElementById("placeholder");
    while (placeholder.firstChild) {
        placeholder.removeChild(placeholder.firstChild);
    }
}

//http://stackoverflow.com/a/23430717
function createRadioButton(text) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answerOptions";
    //radio.value = value;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    label.appendChild(document.createElement("br"));

    document.getElementById("placeholder").appendChild(label);
}

function nextQuestion() {
    switch (questionNo) {
        case 1:
            createQuestion("What is the name of the capital of Switzerland?", ["Genf", "Z\u00FCrich", "Basel", "Luzern", "Bern"], 4);
            break;
        case 2:
            createQuestion("What is the name of the biggest city in Switzerland?", ["Lausanne", "Z\u00FCrich", "Genf", "Basel", "Bern"], 1);
            break;
        case 3:
            createQuestion("Who became a national hero out of a work by the German poet Schiller?", ["Adolf Ogi", "Andr\u00E9 Bucher", "Roger Schawinsky", "Rudolph von Habsburg", "Wilhelm Tell"], 4);
            break;
        case 4:
            createQuestion("Switzerland has common borders with how many countries?", [3, 4, 5, 6, 7, "over 9000"], 2);
            break;
        case 5:
            createQuestion("How large is Switzerland (in square kilometers)?", [34241, 38903, 39873, 39874, 41284], 4);
            break;
        case 6:
            document.getElementById("radioButtonGroup").innerHTML = "";
            createSummary();
            break;
    }
}

function createSummary() {
    if (confirm("Quiz finished! You got "+points+" out of "+(questionNo-1)+ " right!\n\n Press 'OK' if you wish to play again.")) {
        history.go(0);
    }
}
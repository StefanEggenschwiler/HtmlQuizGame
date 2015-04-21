/**
 * Created by Stefan on 20-Apr-15.
 */
var questionNo;
var answer;

function initialize() {
    questionNo = 1;
    createQuestion("Welche Farbe hat der Himmel?", ["Blau", "Rot", "Grün", "Pink", "Affe"], 0);
}

function createQuestion(question, answerOptions, ans) {
    document.getElementById("question").innerHTML = questionNo +'. Question: '+question;
    answer = ans;

    for (var index = 0; index < answerOptions.length; index++) {
        createRadioButton(answerOptions[index]);
    }
    questionNo++;
}

function evaluateQuestion() {
    var radios = document.getElementsByName("answerOptions");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(i == answer){
                alert('Answer is true! Next Question!');
                removePreviousQuestion();
                createQuestion("Wieviele Sterne hat das Walliser Wappen?", [10, 12, 13, 19, 22, "over 9000"], 2);
            } else {
                alert('Answer is false! Try again!');
            }
        }
    }
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
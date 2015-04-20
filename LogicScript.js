/**
 * Created by Stefan on 20-Apr-15.
 */
var i;

function initialize() {
    var i = 1;
    var answerOptions = [3, 4, 5, 6, 7];
    var answer = 3;
    createQuestion(1, "Are you mad, bro?", answerOptions, answer);
    i++;
}

function createQuestion(questionNo, question, answerOptions, answer) {
    document.getElementById("question").innerHTML = questionNo +'. Question: '+question;

    for (var i = 0; i < answerOptions.length; i++) {
        if(i+1 === answer) {
            makeRadioButton(true, answerOptions[i]);
        } else {
            makeRadioButton(false, answerOptions[i]);
        }
    }
}

function evaluateQuestion() {
    var radios = document.getElementsByName("answerOptions");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value === "true"){
                alert('Answer is true!');
            } else {
                alert('Answer is false! Value: '+radios[i].value);
            }
        }
    }
}

//http://stackoverflow.com/a/23430717
function makeRadioButton(value, text) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answerOptions";
    radio.value = value;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    label.appendChild(document.createElement("br"));

    document.getElementById("placeholder").appendChild(label);
}
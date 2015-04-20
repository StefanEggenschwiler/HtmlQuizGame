/**
 * Created by Stefan on 20-Apr-15.
 */
function evaluateQuestion(elementName) {
    var points =0;
    var radios = document.getElementsByName(elementName);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 1){
                points++;
            }
        }
    }
    var nextPage = './q2.html?p='+points
    window.open(nextPage,'_self')
}


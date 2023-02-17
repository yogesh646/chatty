var inp;
var buttons;
function fer(){
    
    // var nlp=require('compromise');
    var docx=nlp("hello john");
    let user=docx.text();
    document.getElementById("nlpstart").innerHTML = '<p class="botText"><span>' + user + '</span></p>';


    // $("#nlpp").append(userHtml);

}
function setup(){
    inp=createInput("hello World");
    buttons=creareButton('submit');
    }
    setup();
fer();
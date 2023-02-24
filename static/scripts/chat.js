// Collapsible
var coll = document.getElementsByClassName("collapsible");

let res;
let ghee;
let boto;

// setup();
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}
function gy(){
   var docx=nlp("hello john");
   console.log(docx.data())
}
gy()

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    let meridian;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
if(hours>12){
    meridian="PM";
    hours-=12;
}else if(hours<12){
    meridian="AM";
    if(hours==0){
        hours=12
    }
}else{
    meridian="PM"
}

    let time = (hours) + ":" +minutes + " " +meridian;
    return time;
}

// Gets the first message

//வணக்கம்
function firstBotMessage() {
    // let userName = $("#textInputs").val();
    // let userName = $("#textInputs").val();

//    console.log(userName);
    
            let firstMessage ='<a style="margin-left:10px;font-weight:bolder">WELCOME </a>';
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    var docx=nlp(userText)
    let botResponse = getBotResponse(docx.text());
  
console.log(botResponse);
    let botHtml = '<p class="botText"><span onClick={go()}>' + botResponse + "<img src='https://cdn-icons-png.flaticon.com/512/4233/4233830.png'  style='height: 40px; width: 40px;border-radius: 20px;margin-left: 10px;margin-top: 5px;'/>"+'</span></p>';
    let times='<p class="timo">'+ getTime() +'</p>'
    $("#chatbox").append(times + botHtml );

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    boto=botResponse;
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val().toLowerCase().trim();
    var doci=nlp(userText)

    if (userText == "") {
        userText= "Let's start";
    }
 
    let userHtml = '<p class="userText"><span>' + doci.text() + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 800)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function getval(res,ghee) {
    // href='selection.html'
    alert(res);
    let yes="yes"
    let userHtml = '<p class="userText"><span >'+"<a class='intrest' >Intrested : </a>" 
    + res +"<br/>"+"<a class='intrest'> Below Intrested : </a>"+ ghee + 
    "<br/>"+
    "<a class='submito'>Want to Continue with the Colleges?</a>"+'<br/>'
    // +`<a class='submit' onClick="interest('${res+ "<br/>" + "<br/>" +ghee}')"> Check Colleges <a/>`+'</span></p>';
    +`<button class='submits' onClick="interest()"> Yes <button/>`+'<br/>'
    +`<button class='submits' onClick="interests()"> No <button/>`
    +'</span></p>';
       $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    // setTimeout(() => {
    //     getHardResponse(res);
    // }, 800)
}

function getengg(red) {
    // alert(red);
    let userHtml = '<p class="userText"><span>'+"<a class='intrest'>Engineering Task : </a>" + red + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(red);
    }, 800)
}
function getarts(red) {
    // alert(red);
    let userHtml = '<p class="userText"><span>'+"<a class='intrest'>Arts Task : </a>" + red + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(red);
    }, 800)
}
function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function interest(){
    // console.log(hellos,bellos);
// window.location.href=`file:///C:/Users/lenovo/ChatBot/selection.html?greeting=${hellos}`
console.log('yes');
let yes="yes";
let userHtml = '<p class="userText"><span>' + yes + '</span></p>';
$("#chatbox").append(userHtml);
document.getElementById("chat-bar-bottom").scrollIntoView(true);
setTimeout(() => {
    getHardResponse(yes);
}, 800)

}
function interests(){
    // console.log(hellos,bellos);
// window.location.href=`file:///C:/Users/lenovo/ChatBot/selection.html?greeting=${hellos}`
console.log('no');
}
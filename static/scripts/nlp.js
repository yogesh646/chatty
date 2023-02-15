// import {nlp} from "compromise";

import { default as nlp } from "compromise/three";
// import nlp from 'compromise';
// var docx=nlp("hello john");
// var coll = document.getElementsByClassName("collapse");

// for (let i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");

//         var content = this.nextElementSibling;

//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }

//     });
// }
function fer(){
    
    var nlp=require('compromise');
    var docx=nlp("hello john");
    let user=docx.text();
    document.getElementById("nlpstart").innerHTML = '<p class="botText"><span>' + user + '</span></p>';


    // $("#nlpp").append(userHtml);

}
fer();
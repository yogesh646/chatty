function getBotResponse(input) {
    
    //rock paper scissors
   
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }else if(input=="Let's start"){
return(
    
    "<img src='https://cdn-icons-png.flaticon.com/512/5894/5894324.png'  style='height: 40px; width: 40px;border-radius: 2px;margin-left: 10px;margin-top: 5px;'/>"
    +"<i class='engg'  onclick='engg()'>Engineering</i>"+"<br/>"+"<br/>"+
    "<img src='https://static-00.iconduck.com/assets.00/student-emoji-460x512-m27mglk6.png'  style='height: 40px; width: 35px;border-radius: 2px;margin-left: 10px;margin-top: 5px;'/>"
   + "<i class='engg'  onclick='arts()'>Arts and Science</i>"
    
)
    }if(input=="fifty seven"){
        var docy=nlp(input)
        return (docy.values().toNumber().text() + "<br/>"+docy.values().add(3).out('text') + docy.values().toOrdinal().out('text'));
    }
    if(input=="fifty eight"){
        var docy=nlp(input)
        return ( docy.values().toOrdinal().out('text') );
    }
    if(input.includes("hi") || input.includes("hey")){
   
    const arr=[{name:"Nice to meet you",id:0},{name:"hi solluga bro",id:1},{name:"hey what can i do for you",id:2},{name:"hello sir ,pls to meet you",id:3},{name:"yep, whatsup",id:4}];
    const rob=Math.floor( Math.random()*4.14);
    const fins=arr.filter(a=>a.id==rob)
    
        return (  fins.map((a)=>a.name)  )
    }else if(input.includes("dada")){
        return "I'm not your dada bro !!!"
    } else  if(input.includes("hello")){
        return "Hi,How may I help you ?"}
        //here to service you to lead for picking your future College Departments
        else  if(input.includes("what is your name")){
            return "I'm Chatty , may i know your name majesty" + "<img src='https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-smiling-eyes_1f60a.gif'  style='height: 40px; width: 40px;border-radius: 20px;margin-left: 10px;margin-top: 5px;'/>"}
            else if(input=="sri krishna"){
            let gels="https://www.skct.edu.in/#/"
            const gellinks=`<a href='${gels}'>"Sri Krishna College of Technology"</a>`
            return `Sri Krishna College of Technology : ${gellinks}`
    }
    else if(input=="yogeshwaran"){
        return "Porambokku"
    }else if(input=="how are you" ){
        return "I'm fine , How about you ? I wish you could the same."
    }else if(input=="Google"){
        let course = 'https://www.google.com';
let coupon = 'https://www.stackoverflow.com';

const courseLink = `<a href='${course}'>${course}</a>`;
        return  `you learn ${courseLink}`
    }else if(input=="Assesment Starts Arts!!!"){
        return "Arts Question and Ans"
    }
    else if(input=="Assesment Starts Engineering!!!"){
        return(
        '<input class="check" id="check1" onClick={test1()} type="checkbox" value=0 />1.<a class="mech" >You are embedded domain person and your friend is having problem with solving technical code. Will you help him?' +'</a>'                                                     +'<br/>'
        +'<input class="check" id="check2" onClick={test2()} type="checkbox"  value=0  />2.<a class="mech">Tiny thinks are cute right. Do think micro things has more capability?</a>'                                                                                               +'<br/>'
        +'<input class="check" id="check3" onClick={test3()} type="checkbox" value=0/>3.<a class="mech">Childhood is not complete without mobile games. Do you like connection puzzle game? </a>'                                                                                 +'<br/>'
        +'<input class="check" id="check4" onClick={test4()} type="checkbox" value=0 />4.<a class="mech">You are going on party, will you be more passionate about your look? </a>'                                                                                                +'<br/>'
        +'<input class="check" style="top:10px;" id="check5" onClick={test5()} type="checkbox"value=0  />5.<a class="mech">Does existing fashion bores you. Will you like to create fashions on your own? </a>'                                                                                      +'<br/>'
        +'<input class="check" id="check6" onClick={test6()} type="checkbox" value=0 />6.<a class="mech">Are you comfortable in working alone that is independently? </a>'                                                                                                        +'<br/>'
        +'<input class="check" id="check7" onClick={test7()} type="checkbox" value=0 />7.<a class="mech">The practical skills are often gained from doing works in outdoor. Are you thinking this is yes? </a>'                                                                    +'<br/>'
        +'<input class="check" id="check8" onClick={test8()} type="checkbox" value=0 />8.<a class="mech">Will you look for perfection? </a>'                                                                                                                                       +'<br/>'
        +'<input class="check" id="check9" onClick={test9()} type="checkbox" value=0 />9.<a class="mech">Can you think instantly according to the current situation? </a>'                                                                                                         +'<br/>'
        +'<input class="check" id="check10" onClick={test10()} type="checkbox" value=0 />10.<a class="mech">In this modern world could you imagine a life without fan or Air conditioner. If suppose they are not working in your place. Will you try to make it by your own?  </a>'  +'</br/>'
        +'<input class="check" id="check11" onClick={test11()} type="checkbox" value=0 />11.<a class="mech">Do you think answering a theoretical question is easy?</a>'                                                                                                              +'<br/>'
        +'<input class="check" id="check12" onClick={test12()} type="checkbox" value=0 />12.<a class="mech">Think about your closet. Will it be organised? </a>'                                                                                                                     +'<br/>'
        + '<input class="check" id="check13" onClick={test13()} type="checkbox" value=0 />13. <a class="mech" >Have you ever checked for the chemical composition that is been printed on the day to day things? </a>'                                                                 +'<br/>'
        + '<input class="check" id="check14" onClick={test14()} type="checkbox" value=0 />14.<a class="mech" >Will you always the expiry date of the items? </a>'                                                                                                                     +'<br/>'
        + '<input class="check" id="check15" onClick={test15()} type="checkbox" value=0 />15. <a class="mech" >You are thinking to bring out something new. Will you be able to achieve it with limited resources? </a>'                                                               +'<br/>'
        + '<input class="check" id="check16" onClick={test16()} type="checkbox" value=0 /> 16.<a class="mech" >Are you crazy about bikes? </a>'                                                                                                                                     +'<br/>'
        +'<input class="check" id="check17" onClick={test17()} type="checkbox"  value=0  />17.<a class="mech">Are you afraid of working for hours sitting idle?</a>'                                                                                                                   +'<br/>'
        +'<input class="check" id="check18" onClick={test18()} type="checkbox" value=0   />18.<a class="mech">Have you ever tried Computer aided drawings and designs? </a>'                                                                                                           +'<br/>'
        +'<input class="check"  id="check19" onClick={test19()} type="checkbox" value=0 />19.<a class="mech">A potrait is given to you to paint. Wil you like to spend hours in painting it? </a>'                                                                                    +'<br/>'
        +'<input class="check"  id="check20" onClick={test20()} type="checkbox"value=0  />20.<a class="mech">.If suppose your computer is stuck, Will you try to rectify it on your own ? </a>'                                                                                       +'<br/>'
        +'<input class="check"  id="check21" onClick={test21()} type="checkbox" value=0 />21.<a class="mech">Have you ever though of knowing about the working of Mobile signals? </a>'                                                                                               +'<br/>'
        +'<input class="check" id="check22" onClick={test22()} type="checkbox" value=0 />22.<a class="mech">Your are working on a technical algorithm for hours and couldnt solve it. Will try it until you finish it? </a>'                                                         +'<br/>'
        +'<input class="check" id="check23" onClick={test23()} type="checkbox" value=0 />23.<a class="mech">Consider you are much stronger in the existing technology but it is said that a new technology have been invented. Will you try it? </a>'                                +'<br/>'
        +'<input class="check"  id="check24" onClick={test24()} type="checkbox" value=0 />24.<a class="mech">Will you spend hours with computers? </a>'                                                                                                                               +'<br/>'
        +'<input class="check"  id="check25" onClick={test25()} type="checkbox" value=0 />25.<a class="mech">We all are more cautionate about the dress.Do you ever thought of the fabrics?  </a>'                                                                                     +'</br/>'
        +'<input class="check"  id="check26" onClick={test26()} type="checkbox" value=0 />26.<a class="mech">Do you have any idea of creating new things?</a>'                                                                                                                        +'<br/>'
        +'<input class="check"  id="check27" onClick={test27()} type="checkbox" value=0 />27.<a class="mech">Have you combined colours to produce a different shade? </a>'                                                                                                            +'<br/>'
        +'<input class="check" id="check28" onClick={test28()} type="checkbox" value=0 />28.<a class="mech">You have perception about a matter happening around but your friend has a different perspective and different opinion. Will you consider his/her opinion? </a>' +'<br/>'
        +'<input class="check" id="check29" onClick={test29()} type="checkbox" value=0 />29.<a class="mech">Friends are the choosen family. Consider that you and your gang are planning for a trip to Manali. Will be the organise the trip? </a>'+'<t/>'                           +'<br/>'
        +'<input class="check" id="check30" onClick={test30()} type="checkbox" value=0 />30.<a class="mech">Can you think and decide a immediate decision in a hectic situation?</a>'                                                                                                +'<br/>'
        + '<button class="submit" onClick={tes()}> Submit</button>')
    }else if(input=="mama"){
        return 'yes'
    }
        else {
        return "Try asking something else!";
    }
  

}
function test1(){
    let nums1=document.getElementById("check1");
    
    if(nums1.checked == true){
        document.getElementById("check1").value =1;
}
else if(nums1.checked== false){
       document.getElementById("check1").value = 0;
    }
}

// second checkbox
function test2(){
    let nums1=document.getElementById("check2");
 
    if(nums1.checked == true){
        document.getElementById("check2").value =1;
}
else if(nums1.checked== false){
       document.getElementById("check2").value = 0;
    }
}
//third checkbox
function test3(){
    let nums1=document.getElementById("check3");
  
    if(nums1.checked == true){
        document.getElementById("check3").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check3").value = 0;
    }
}
//fourth checkbox
function test4(){
    let nums1=document.getElementById("check4");
   
    if(nums1.checked == true){
        document.getElementById("check4").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check4").value = 0;
    }
}//fivth checkbox
function test5(){
    let nums1=document.getElementById("check5");
    
    if(nums1.checked == true){
        document.getElementById("check5").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check5").value = 0;
    }
}//sixth checkbox
function test6(){
    let nums1=document.getElementById("check6");
  
    if(nums1.checked == true){
        document.getElementById("check6").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check6").value = 0;
    }
}//seventh checkbox
function test7(){
    let nums1=document.getElementById("check7");

    if(nums1.checked == true){
        document.getElementById("check7").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check7").value = 0;
    }
}//eigth checkbox
function test8(){
    let nums1=document.getElementById("check8");
   
    if(nums1.checked == true){
        document.getElementById("check8").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check8").value = 0;
    }
}//ninth checkbox
function test9(){
    let nums1=document.getElementById("check9");

    if(nums1.checked == true){
        document.getElementById("check9").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check9").value = 0;
    }
}//tenth checkbox
function test10(){
    let nums1=document.getElementById("check10");
  
    if(nums1.checked == true){
        document.getElementById("check10").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check10").value = 0;
    }
}
//leven
function test11(){
    let nums1=document.getElementById("check11");
  
    if(nums1.checked == true){
        document.getElementById("check11").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check11").value = 0;
    }
}
//tweleve
function test12(){
    let nums1=document.getElementById("check12");
  
    if(nums1.checked == true){
        document.getElementById("check12").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check12").value = 0;
    }
}
//tweleve
function test13(){
    let nums1=document.getElementById("check13");
  
    if(nums1.checked == true){
        document.getElementById("check13").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check13").value = 0;
    }
}
//tweleve
function test14(){
    let nums1=document.getElementById("check14");
  
    if(nums1.checked == true){
        document.getElementById("check14").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check14").value = 0;
    }
}
//tweleve
function test15(){
    let nums1=document.getElementById("check15");
  
    if(nums1.checked == true){
        document.getElementById("check15").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check15").value = 0;
    }
}
//tweleve
function test16(){
    let nums1=document.getElementById("check16");
  
    if(nums1.checked == true){
        document.getElementById("check16").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check16").value = 0;
    }
}
//tweleve
function test17(){
    let nums1=document.getElementById("check17");
  
    if(nums1.checked == true){
        document.getElementById("check17").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check17").value = 0;
    }
}
//tweleve
function test18(){
    let nums1=document.getElementById("check18");
  
    if(nums1.checked == true){
        document.getElementById("check18").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check18").value = 0;
    }
}
//tweleve
function test19(){
    let nums1=document.getElementById("check19");
  
    if(nums1.checked == true){
        document.getElementById("check19").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check19").value = 0;
    }
}
//tweleve
function test20(){
    let nums1=document.getElementById("check20");
  
    if(nums1.checked == true){
        document.getElementById("check20").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check20").value = 0;
    }
}//tweleve
function test21(){
    let nums1=document.getElementById("check21");
  
    if(nums1.checked == true){
        document.getElementById("check21").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check21").value = 0;
    }
}
//twenty two
function test22(){
    let nums1=document.getElementById("check22");
  
    if(nums1.checked == true){
        document.getElementById("check22").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check22").value = 0;
    }
}
//twenty three
function test23(){
    let nums1=document.getElementById("check23");
  
    if(nums1.checked == true){
        document.getElementById("check23").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check23").value = 0;
    }
}
//twenty four
function test24(){
    let nums1=document.getElementById("check24");
  
    if(nums1.checked == true){
        document.getElementById("check24").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check24").value = 0;
    }
}
//twenty five
function test25(){
    let nums1=document.getElementById("check25");
  
    if(nums1.checked == true){
        document.getElementById("check25").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check25").value = 0;
    }
}
//twenty three
function test26(){
    let nums1=document.getElementById("check26");
  
    if(nums1.checked == true){
        document.getElementById("check26").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check26").value = 0;
    }
}
//twenty three
function test27(){
    let nums1=document.getElementById("check27");
  
    if(nums1.checked == true){
        document.getElementById("check27").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check27").value = 0;
    }
}
//twenty three
function test28(){
    let nums1=document.getElementById("check28");
  
    if(nums1.checked == true){
        document.getElementById("check28").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check28").value = 0;
    }
}//twenty three
function test29(){
    let nums1=document.getElementById("check29");
  
    if(nums1.checked == true){
        document.getElementById("check29").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check29").value = 0;
    }
}//twenty three
function test30(){
    let nums1=document.getElementById("check30");
  
    if(nums1.checked == true){
        document.getElementById("check30").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check30").value = 0;
    }
}
//total
function tes(){
    let checky=document.getElementById("check1").value;
    let checky1=document.getElementById("check2").value;
    let checky2=document.getElementById("check3").value;   
    let checky3=document.getElementById("check4").value;
    let checky4=document.getElementById("check5").value;
    let checky5=document.getElementById("check6").value;
    let checky6=document.getElementById("check7").value;
    let checky7=document.getElementById("check8").value;
    let checky8=document.getElementById("check9").value;
    let checky9=document.getElementById("check10").value;
    let checky10=document.getElementById("check11").value;
    let checky11=document.getElementById("check12").value;
    let checky12=document.getElementById("check13").value;
    let checky13=document.getElementById("check14").value;
    let checky14=document.getElementById("check15").value;   
    let checky15=document.getElementById("check16").value;
    let checky16=document.getElementById("check17").value;
    let checky17=document.getElementById("check18").value;
    let checky18=document.getElementById("check19").value;
    let checky19=document.getElementById("check20").value;
    let checky20=document.getElementById("check21").value;
    let checky21=document.getElementById("check22").value;
    let checky22=document.getElementById("check23").value;
    let checky23=document.getElementById("check24").value;
    let checky24=document.getElementById("check25").value;
    let checky25=document.getElementById("check26").value;
    let checky26=document.getElementById("check27").value;
    let checky27=document.getElementById("check28").value;
    let checky28=document.getElementById("check29").value;
    let checky29=document.getElementById("check30").value;
    
    let ECE= Number(checky) + Number(checky1) + Number(checky2);
    let Fashion= Number(checky3)+Number (checky4)+ Number(checky5);
    let Civil= Number (checky6)+Number (checky7)+ Number(checky8)
     let  EEE =Number (checky9) +Number(checky10)+Number(checky11)
    let Chemical=Number(checky12) + Number(checky13) + Number(checky14);
   let mech=Number  (checky15)+ Number(checky16) + Number(checky17);
   let csc= Number (checky18)+Number (checky19) + Number(checky20);
   let IT = Number(checky21) +Number(checky22)+Number(checky23) ;
   let textile =  Number (checky24)+Number (checky25) +Number(checky26)
   let Aero= Number(checky27)+ Number(checky28) +Number(checky29);
//    alert(res);
//    getval(res);
let arr=[{name:"ECE",marks:ECE},
{name:"Fashion",marks:Fashion},
{name:"Civil",marks:Civil},
{name:"EEE",marks:EEE},
{name:"Chemical",marks:Chemical},
{name:"Mechanical",marks:mech},
{name:"CSc",marks:csc},
{name:"IT",marks:IT},
{name:"Textile",marks:textile},
{name:"Aeronautical",marks:Aero},
];
let myArr=["ECE",
"Fashion",
"Civil",
"EEE",
"Chemical",
"Mechanical",
"CSc",
"IT",
"Textile",
"Aeronautical"
];

// let max=Math.max.apply(Math,arr);
const randomFunc = ()=>{
    const mynum=Math.floor(Math.random() *(myArr.length-1));
    console.log("mynum", mynum);
    console.log(myArr[1]
        );
    const randomelement=myArr[mynum]
    console.log("randomelement",randomelement);
    return randomelement;
    }
let filtered = arr.filter((a)=>a.marks>=2)
let filtered1 = arr.filter((a)=>a.marks==1)

console.log("ECE"+ ECE,"Fashion"+ Fashion,"Civil"+ Civil,"EEE"+ EEE,"Chemical"+Chemical,"Mechanical"+mech,"CSC"+csc,"IT"+ IT, "Textile"+textile, "Aeronautial"+Aero);
console.log("filtered",filtered);
let gee=filtered.map((b)=>{
    return(
        b.name
    )
})
let ghee=filtered1.map((b)=>{
    return(
        b.name
    )
})
// console.log(gee);
getval(gee,ghee)
}
function engg()
{
getengg("Assesment Starts Engineering!!!")
}
function arts()
{
getarts("Assesment Starts Arts!!!")
}

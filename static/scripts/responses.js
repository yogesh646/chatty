function getBotResponse(input) {
    
    //rock paper scissors
   
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }else if(input=='yes'){
return "Hope you are statsfied with the results, Select the department for which you want college suggestions."
    }else if(input.includes("bye")){
        return (
       
                window.location.href=`file:///C:/Users/lenovo/ChatBot/selection.html?`
            
        )
    }
    else if(input=="Let's start"){
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
    if(input.includes("who made you") || input.includes("boss")||input.includes("master")){
   
        const arr=[{name:"I was made by the end semester project by a team",id:0}
        ,{name:"I was made by the end semester project by a team",id:1}
        ,{name:"I was made by the end semester project by a team",id:2}
        ,{name:"I was made by the end semester project by a team",id:3}
        ,{name:"I was made by the end semester project by a team",id:4}];
        const rob=Math.floor( Math.random()*4.14);
        const fins=arr.filter(a=>a.id==rob)
        
            return (  fins.map((a)=>a.name)  )
        }
    if(input.includes("hi") || input.includes("hey")){
   
    const arr=[{name:"Hey:-)",id:0},
    {name:"Hello, thanks for using chatbot",id:1},
    {name:"Hi ,there  what can I do for you?",id:2},
    {name:"Hi ,there how can I help ?",id:3},
    {name:"Hey how can I help you?",id:4}];
    const rob=Math.floor( Math.random()*4.14);
    const fins=arr.filter(a=>a.id==rob)
    
        return (  fins.map((a)=>a.name)  )
    } if(input.includes("what help") || input.includes("can you help me") || input.includes("i need some help")){
   
        const arr=[{name:"Thank you, for contacting me. Press ENTER to start the assesment.",id:0}
        ,{name:"I'm here to help you for your course selection process.Press Enter to start the Assesment",id:1}
        ,{name:"I would love to help you,Press Enter to start the Assesment",id:2}
        ,{name:"Please Press Enter to start the Assesment",id:3}
        ,{name:"Press Enter to start the Assesment",id:4}];
        const rob=Math.floor( Math.random()*4.14);
        const fins=arr.filter(a=>a.id==rob)
        
            return (  fins.map((a)=>a.name)  )
        }
        if(input.includes("may i know your name") || input.includes("what is your name")||input.includes("who are you")||input.includes("your name"||input.includes("what's your name"))){
   
            const arr=[{name:"I'm Tom",id:0},{name:"I am Tom",id:1},{name:"You can call me Tom",id:2},{name:"Call me Tom",id:3},{name:"Tom",id:4}];
            const rob=Math.floor( Math.random()*4.14);
            const fins=arr.filter(a=>a.id==rob)
            
                return (  fins.map((a)=>a.name)  )
            }
    else if(input.includes("dada")){
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
    //college sites
    else if(input.includes("electronics and communication engineering")){
        let gels="https://www.skct.edu.in/#/"
        const gellinks=`<a href='${gels}'>"Sri Krishna College of Technology"</a>`
        return `Sri Krishna College of Technology : ${gellinks}`
}
else if(input.includes("aerospace")){
    let gels="https://hindustanuniv.ac.in/"
    let gelss="http://www.mitindia.edu/en/"
    let gelsss="https://www.sathyabama.ac.in/"
    const gellinks=`<a href='${gels}'>Hindustan Institute of Technology and Science (HITS)</a>`
    const gellinkss=`<a href='${gelss}'>Madras Institute of Technology (MIT)</a>`
    const gellinksss=`<a href='${gelsss}'>Sathyabama Institute of Science and Technology, Chennai</a>`
    return (`Hindustan Institute of Technology and Science (HITS) : ${gellinks}`+'<br/>'+
    `Madras Institute of Technology (MIT) : ${gellinkss}`+ '<br/>'+
    `Sathyabama Institute of Science and Technology, Chennai : ${gellinksss}` )
}
else if(input.includes("bio-medical")){
    let gels="https://www.sastra.edu/"
    let gelss="https://www.psgtech.edu/"
    let gelsss="https://www.sriramachandra.edu.in/"
    const gellinks=`<a href='${gels}'>SASTRA University</a>`
    const gellinkss=`<a href='${gelss}'>PSG College of Technology</a>`
    const gellinksss=`<a href='${gelsss}'>Sri Ramachandra Institute of Higher Education and Research</a>`
    return (`SASTRA University : ${gellinks}`+'<br/>'+
    `PSG College of Technology : ${gellinkss}`+ '<br/>'+
    `Sri Ramachandra Institute of Higher Education and Research : ${gellinksss}` )
}
else if(input.includes("artificial intelligence")){
    let gels="https://www.srmist.edu.in/"
    let gelss="https://www.psgtech.edu/"
    let gelsss="https://www.amrita.edu/"
    const gellinks=`<a href='${gels}'>SRM Institute of Science and Technology</a>`
    const gellinkss=`<a href='${gelss}'>PSG College of Technology</a>`
    const gellinksss=`<a href='${gelsss}'>Amrita Vishwa Vidyapeetham</a>`
    return (` SRM Institute of Science and Technology: ${gellinks}`+'<br/>'+
    `PSG College of Technology : ${gellinkss}`+ '<br/>'+
    `Amrita Vishwa Vidyapeetham : ${gellinksss}` )
}
//3d printing
else if(input.includes("3d printing")){
    let gels="https://www.psgtech.edu/"
    let gelss="https://www.kct.ac.in/"
    let gelsss="https://www.sastra.edu/"
    const gellinks=`<a href='${gels}'>PSG College of Technology, Coimbatore</a>`
    const gellinkss=`<a href='${gelss}'>Kumaraguru College of Technology, Coimbatore</a>`
    const gellinksss=`<a href='${gelsss}'>SASTRA Deemed University, Thanjavur</a>`
    return (`PSG College of Technology, Coimbatore : ${gellinks}`+'<br/>'+
    `Kumaraguru College of Technology, Coimbatore : ${gellinkss}`+ '<br/>'+
    `SASTRA Deemed University, Thanjavur : ${gellinksss}` )
}
else if(input.includes("marine")){
    let gels="https://www.ametuniv.ac.in/"
    let gelss="http://www.himtmarine.com/"
    let gelsss="https://www.cmcmarine.in/"
    const gellinks=`<a href='${gels}'>Academy of Maritime Education and Training (AMET) University, Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Hindustan Institute of Maritime Training (HIMT), Chennai</a>`
    const gellinksss=`<a href='${gelsss}'>Coimbatore Marine College (CMC), Coimbatore</a>`
    return (` Academy of Maritime Education and Training (AMET) University, Chennai: ${gellinks}`+'<br/>'+
    `Hindustan Institute of Maritime Training (HIMT), Chennai : ${gellinkss}`+ '<br/>'+
    ` Coimbatore Marine College (CMC), Coimbatore: ${gellinksss}` )
}
else if(input.includes("textile")){
    let gels="https://www.kct.ac.in/"
    let gelss="https://www.psgtech.edu/"
    let gelsss="https://www.svpitm.ac.in/"
    const gellinks=`<a href='${gels}'>Kumaraguru College of Technology</a>`
    const gellinkss=`<a href='${gelss}'>PSG College of Technology</a>`
    const gellinksss=`<a href='${gelsss}'>Sardar Vallabhbhai Patel International School of Textiles and Management</a>`
    return (`Kumaraguru College of Technology : ${gellinks}`+'<br/>'+
    `PSG College of Technology : ${gellinkss}`+ '<br/>'+
    ` Sardar Vallabhbhai Patel International School of Textiles and Management: ${gellinksss}` )
}
else if(input.includes("information technology")||input.includes("it")){
    let gels="https://www.annauniv.edu/campus/ceg.php"
    let gelss="https://www.ssn.edu.in/"
    let gelsss="https://www.tce.edu/"
    const gellinks=`<a href='${gels}'>College of Engineering, Guindy (CEG)</a>`
    const gellinkss=`<a href='${gelss}'>SSN College of Engineering</a>`
    const gellinksss=`<a href='${gelsss}'>Thiyagarajar College of Engineering</a>`
    return (`College of Engineering, Guindy (CEG) : ${gellinks}`+'<br/>'+
    `SSN College of Engineering : ${gellinkss}`+ '<br/>'+
    `Thiyagarajar College of Engineering : ${gellinksss}` )
}
else if(input.includes("computer science")||input.includes("csc")){
    let gels="https://www.srmist.edu.in/"
    let gelss="https://www.tce.edu/"
    let gelsss="https://cit.edu.in/"
    const gellinks=`<a href='${gels}'>SRM Institute of Science and Technology, Kattankulathur</a>`
    const gellinkss=`<a href='${gelss}'>Thiagarajar College of Engineering, Madurai</a>`
    const gellinksss=`<a href='${gelsss}'>Coimbatore Institute of Technology, Coimbatore</a>`
    return (`SRM Institute of Science and Technology, Kattankulathur : ${gellinks}`+'<br/>'+
    `Thiagarajar College of Engineering, Madurai : ${gellinkss}`+ '<br/>'+
    `Coimbatore Institute of Technology, Coimbatore : ${gellinksss}` )
}
else if(input.includes("mechanical")||input.includes("mech")){
    let gels="https://ceg.annauniv.edu/"
    let gelss="https://www.tce.edu/"
    let gelsss="https://www.kct.ac.in/"
    const gellinks=`<a href='${gels}'>College of Engineering, Guindy (CEG), Anna University</a>`
    const gellinkss=`<a href='${gelss}'>Thiyagarajar College of Engineering, Madurai</a>`
    const gellinksss=`<a href='${gelsss}'>Kumaraguru College of Technology (KCT), Coimbatore</a>`
    return (` College of Engineering, Guindy (CEG), Anna University: ${gellinks}`+'<br/>'+
    `Thiyagarajar College of Engineering, Madurai: ${gellinkss}`+ '<br/>'+
    ` Kumaraguru College of Technology (KCT), Coimbatore: ${gellinksss}` )
}
else if(input.includes("chemical")||input.includes("chem")){
    let gels="https://www.annauniv.edu/cce/"
    let gelss="https://www.nitt.edu/"
    let gelsss="https://www.kongu.ac.in/kec/"
    const gellinks=`<a href='${gels}'>College of Engineering, Guindy (CEG), Anna University</a>`
    const gellinkss=`<a href='${gelss}'>National Institute of Technology (NIT), Trichy</a>`
    const gellinksss=`<a href='${gelsss}'>Kongu Engineering College (KEC), Erode</a>`
    return (`College of Engineering, Guindy (CEG), Anna University : ${gellinks}`+'<br/>'+
    `National Institute of Technology (NIT), Trichy: ${gellinkss}`+ '<br/>'+
    `Kongu Engineering College (KEC), Erode : ${gellinksss}` )
}
else if(input.includes("eee")||input.includes("electrical and electronics")){
    let gels="https://www.nitt.edu/"
    let gelss="https://www.bits-pilani.ac.in/"
    let gelsss="https://www.iiita.ac.in/"
    const gellinks=`<a href='${gels}'>National Institute of Technology, Tiruchirappalli</a>`
    const gellinkss=`<a href='${gelss}'>Birla Institute of Technology and Science, Pilani</a>`
    const gellinksss=`<a href='${gelsss}'></a>`
    return (`National Institute of Technology, Tiruchirappalli : ${gellinks}`+'<br/>'+
    `Birla Institute of Technology and Science, Pilani: ${gellinkss}`+ '<br/>'+
    `Indian Institute of Information Technology, Allahabad : ${gellinksss}` )
}else if(input.includes("ft")||input=="fashion technology"){
    let gels="https://bitsathy.ac.in/"
    let gelss="https://www.kct.ac.in/"
    let gelsss="https://www.psgtech.edu/"
    const gellinks=`<a href='${gels}'>Bannari Amman Institute of Technology (BIT), Erode</a>`
    const gellinkss=`<a href='${gelss}'>Kumaraguru College of Technology (KCT), Coimbatore</a>`
    const gellinksss=`<a href='${gelsss}'></a>`
    return (` Bannari Amman Institute of Technology (BIT), Erode: ${gellinks}`+'<br/>'+
    `Kumaraguru College of Technology (KCT), Coimbatore: ${gellinkss}`+ '<br/>'+
    `PSG College of Technology, Coimbatore : ${gellinksss}` )
}else if(input.includes("civil")||input.includes("civil")){
    let gels="https://www.nitt.edu/"
    let gelss="https://www.bits-pilani.ac.in/"
    let gelsss="https://www.annauniv.edu/ceg/index.html"
    const gellinks=`<a href='${gels}'>National Institute of Technology, Trichy</a>`
    const gellinkss=`<a href='${gelss}'>Birla Institute of Technology and Science, Pilani</a>`
    const gellinksss=`<a href='${gelsss}'>College of Engineering, Guindy</a>`
    return (`National Institute of Technology, Trichy : ${gellinks}`+'<br/>'+
    `Birla Institute of Technology and Science, Pilani: ${gellinkss}`+ '<br/>'+
    ` College of Engineering, Guindy: ${gellinksss}` )
}else if(input.includes("ece")||input.includes("electronics and communication")){
    let gels="https://tce.edu/"
    let gelss="https://www.psgtech.edu/"
    let gelsss="https://www.ssn.edu.in/"
    const gellinks=`<a href='${gels}'>Thiagarajar College of Engineering</a>`
    const gellinkss=`<a href='${gelss}'>PSG College of Technology</a>`
    const gellinksss=`<a href='${gelsss}'>SSN College of Engineering</a>`
    return (`Thiagarajar College of Engineering : ${gellinks}`+'<br/>'+
    `PSG College of Technology: ${gellinkss}`+ '<br/>'+
    ` SSN College of Engineering: ${gellinksss}` )
}else if(input.includes("aeronautical")||input.includes("aeronautics")){
    let gels="http://www.mitindia.edu/en/"
    let gelss="https://www.siet.ac.in/aeronautical-engineering.html"
    let gelsss="https://www.niet.co.in/b-e-aeronautical-engineering/"
    const gellinks=`<a href='${gels}'>Madras Institute of Technology (MIT), Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore</a>`
    const gellinksss=`<a href='${gelsss}'>Nehru Institute of Engineering and Technology (NIET), Coimbatore</a>`
    return (`Madras Institute of Technology (MIT), Chennai : ${gellinks}`+'<br/>'+
    `Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore: ${gellinkss}`+ '<br/>'+
    `Nehru Institute of Engineering and Technology (NIET), Coimbatore : ${gellinksss}` )
}
//arts colleges display
else if(input.includes("socialogy")){
    let gels="https://www.loyolacollege.edu/"
    let gelss="https://www.loyolacollege.edu/"
    let gelsss="https://www.wcc.edu.in/"
    const gellinks=`<a href='${gels}'>Loyola College, Chennai </a>`
    const gellinkss=`<a href='${gelss}'> Madras Christian College, Chennai </a>`
    const gellinksss=`<a href='${gelsss}'>Women's Christian College, Chennai</a>`
    return (`Loyola  College, Chennai  : ${gellinks}`+'<br/>'+
            `Madras  Christian College, Chennai : ${gellinkss}`+ '<br/>'+
            `Women's Christian College, Chennai  : ${gellinksss}` )
}
else if(input.includes("economics")){
    let gels="https://www.mse.ac.in/"
    let gelss="http://www.psgcas.ac.in/https://www.loyolacollege.edu/"
    let gelsss="https://stellamariscollege.edu.in/"
    const gellinks=`<a href='${gels}'>Madras School of Economics (MSE)</a>`
    const gellinkss=`<a href='${gelss}'> PSG College of Arts and Science  </a>`
    const gellinksss=`<a href='${gelsss}'>Stella Maris College</a>`
    return (`Madras School of Economics (MSE)  : ${gellinks}`+'<br/>'+
            `Madras  Christian College, Chennai : ${gellinkss}`+ '<br/>'+
            `Stella Maris College   : ${gellinksss}` )
}
else if(input.includes("literature")){
    let gels="https://stellamariscollege.edu.in/"
    let gelss="https://www.mcc.edu.in/"
    let gelsss="https://www.psgcas.ac.in/"
    const gellinks=`<a href='${gels}'>Stella Maris College</a>`
    const gellinkss=`<a href='${gelss}'>Madras Christian College </a>`
    const gellinksss=`<a href='${gelsss}'>PSG College of Arts and Science</a>`
    return (`Stella Maris College  : ${gellinks}`+'<br/>'+
            `Madras Christian College : ${gellinkss}`+ '<br/>'+
            `PSG College of Arts and Science : ${gellinksss}` )
}
else if(input.includes("design")){
    let gels="https://www.nift.ac.in/chennai/"
    let gelss="http://www.iitg.ac.in/design/"
    let gelsss="https://www.annauniv.edu/sap/"
    const gellinks=`<a href='${gels}'>National Institute of Fashion Technology (NIFT), Chennai </a>`
    const gellinkss=`<a href='${gelss}'>Department of Design, Indian Institute of Technology (IIT), Guwahati  </a>`
    const gellinksss=`<a href='${gelsss}'>School of Architecture and Planning, Anna University, Chennai </a>`
    return (` National Institute of Fashion Technology (NIFT), Chennai  : ${gellinks}`+'<br/>'+
            ` Department of Design, Indian Institute of Technology (IIT), Guwahati : ${gellinkss}`+ '<br/>'+
            ` School of Architecture and Planning, Anna University, Chennai   : ${gellinksss}` )
}

else if(input.includes("event")){
    let gels="https://mopvc.edu.in/"
    let gelss="https://www.velsuniv.ac.in/"
    let gelsss="https://www.hindustanuniv.ac.in/"
    const gellinks=`<a href='${gels}'>MOP Vaishnav College for Women</a>`
    const gellinkss=`<a href='${gelss}'>VELS University </a>`
    const gellinksss=`<a href='${gelsss}'>Hindustan Institute of Technology and Science</a>`
    return (` MOP Vaishnav College for Women : ${gellinks}`+'<br/>'+
            ` VELS University: ${gellinkss}`+ '<br/>'+
            `  Hindustan Institute of Technology and Science : ${gellinksss}` )
}
else if(input.includes("fine arts")){
    let gels="https://www.governmentfineartscollege.com/"
    let gelss="https://stellamariscollege.edu.in/"
    let gelsss="https://www.mcc.edu.in/academic-departments/visual-communication/visual-communication/"
    const gellinks=`<a href='${gels}'>Government College of Fine Arts, Chennai </a>`
    const gellinkss=`<a href='${gelss}'> Stella Maris College, Chennai </a>`
    const gellinksss=`<a href='${gelsss}'>Madras Christian College, Chennai </a>`
    return (` Government College of Fine Arts, Chennai  : ${gellinks}`+'<br/>'+
            ` Stella Maris College, Chennai : ${gellinkss}`+ '<br/>'+
            ` Madras Christian College, Chennai   : ${gellinksss}` )
}
else if(input.includes("designing")){
    let gels="https://www.nift.ac.in/chennai/"
    let gelss="https://wifd.in/"
    let gelsss="https://www.psgcas.ac.in/"
    const gellinks=`<a href='${gels}'>National Institute of Fashion Technology (NIFT) Chennai </a>`
    const gellinkss=`<a href='${gelss}'>WIFD is a renowned college in Coimbatore, Tamil Nadu </a>`
    const gellinksss=`<a href='${gelsss}'> PSG College of Arts and Science, located in Coimbatore, Tamil Nadu</a>`
    return (` National Institute of Fashion Technology (NIFT) Chennai  : ${gellinks}`+'<br/>'+
            `WIFD is a renowned college in Coimbatore, Tamil Nadu : ${gellinkss}`+ '<br/>'+
            `   PSG College of Arts and Science, located in Coimbatore, Tamil Nadu : ${gellinksss}` )
}
else if(input.includes("hotel")){
    let gels="https://www.ihmchennai.org/"
    let gelss="https://www.srmihm.ac.in/"
    let gelsss="https://www.mihmct.com/"
    const gellinks=`<a href='${gels}'>Institute of Hotel Management Catering Technology and Applied Nutrition (IHMCTAN), Chennai </a>`
    const gellinkss=`<a href='${gelss}'> SRM Institute of Hotel Management, Chennai </a>`
    const gellinksss=`<a href='${gelsss}'>Madras Institute of Hotel Management and Catering Technology, Chennai </a>`
    return (`Institute of Hotel Management Catering Technology and Applied Nutrition (IHMCTAN), Chennai : ${gellinks}`+'<br/>'+
            `SRM Institute of Hotel Management, Chennai  : ${gellinkss}`+ '<br/>'+
            ` Madras Institute of Hotel Management and Catering Technology, Chennai : ${gellinksss}` )
}
else if(input.includes("administration")){
    let gels="https://psgcas.ac.in/"
    let gelss="https://christuniversity.in/"
    let gelsss="https://www.mcc.edu.in/"
    const gellinks=`<a href='${gels}'>PSG College of Arts and Science, Coimbatore</a>`
    const gellinkss=`<a href='${gelss}'> Christ University, Bangalore (satellite campus in Chennai)</a>`
    const gellinksss=`<a href='${gelsss}'>Madras Christian College, Chennai</a>`
    return (`PSG College of Arts and Science, Coimbatore  : ${gellinks}`+'<br/>'+
            `Christ University, Bangalore (satellite campus in Chennai): ${gellinkss}`+ '<br/>'+
            `Madras Christian College, Chennai: ${gellinksss}` )
}
else if(input.includes("law course")){
    let gels="http://www.tndalu.ac.in/school-of-excellence-in-law.html"
    let gelss="http://tn.gov.in/school/glcchennai/"
    let gelsss="https://glccbe.ac.in/"
    const gellinks=`<a href='${gels}'>School of Excellence in Law, The Tamil Nadu Dr. Ambedkar Law University, Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Dr. Ambedkar Government Law College, Chennai </a>`
    const gellinksss=`<a href='${gelsss}'>Government Law College, Coimbatore</a>`
    return (` School of Excellence in Law, The Tamil Nadu Dr. Ambedkar Law University, Chennai : ${gellinks}`+'<br/>'+
            ` Dr. Ambedkar Government Law College, Chennai: ${gellinkss}`+ '<br/>'+
            ` Government Law College, Coimbatore  : ${gellinksss}` )
}
else if(input.includes("journalism ")){
    let gels="http://mopvc.edu.in/"
    let gelss="https://www.mcc.edu.in"
    let gelsss="http://www.psgcas.ac.in/"
    const gellinks=`<a href='${gels}'>MOP Vaishnav College for Women, Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Madras Christian College, Chennai</a>`
    const gellinksss=`<a href='${gelsss}'>PSG College of Arts and Science, Coimbatore</a>`
    return (`MOP Vaishnav College for Women, Chennai  : ${gellinks}`+'<br/>'+
            `Madras Christian College, Chennai : ${gellinkss}`+ '<br/>'+
            ` PSG College of Arts and Science, Coimbatore  : ${gellinksss}` )
}else if(input.includes("mass media")){
    let gels="https://www.mcc.edu.in/"
    let gelss="https://www.annauniv.edu/mds/"
    let gelsss="https://www.srmist.edu.in/"
    const gellinks=`<a href='${gels}'>Madras Christian College (MCC), Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Department of Media Sciences, Anna University, Chennai</a>`
    const gellinksss=`<a href='${gelsss}'>SRM Institute of Science and Technology, Chennai </a>`
    return (`Madras Christian College (MCC), Chennai  : ${gellinks}`+'<br/>'+
            `Department of Media Sciences, Anna University, Chennai: ${gellinkss}`+ '<br/>'+
            `SRM Institute of Science and Technology, Chennai : ${gellinksss}` )
}
else if(input.includes("psychology")){
    let gels="https://www.wcc.edu.in/academics/under-graduate/psychology"
    let gelss="https://www.mcc.edu.in/departments/psychology/overview"
    let gelsss="https://www.psgcas.ac.in/departments/psychology/psychology.php"
    const gellinks=`<a href='${gels}'>Women's Christian College (WCC), Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Madras Christian College (MCC), Chennai </a>`
    const gellinksss=`<a href='${gelsss}'>PSG College of Arts and Science, Coimbatore</a>`
    return (`Women's Christian College (WCC), Chennai : ${gellinks}`+'<br/>'+
            `Madras Christian College (MCC), Chennai : ${gellinkss}`+ '<br/>'+
            `PSG College of Arts and Science, Coimbatore  : ${gellinksss}` )
}
else if(input.includes("political")){
    let gels="https://presidencycollegechennai.ac.in/"
    let gelss="https://mcc.edu.in/"
    let gelsss="https://www.stellamariscollege.edu.in/"
    const gellinks=`<a href='${gels}'>Presidency College, Chennai</a>`
    const gellinkss=`<a href='${gelss}'>Madras Christian College, Chennai</a>`
    const gellinksss=`<a href='${gelsss}'>Stella Maris College, Chennai</a>`
    return (`  Presidency College, Chennai: ${gellinks}`+'<br/>'+
            `Madras Christian College, Chennai: ${gellinkss}`+ '<br/>'+
            `Stella Maris College, Chennai: ${gellinksss}` )
}
else if(input.includes("animation")){
    let gels="https://www.dsls.ac.in/bsc-animation"
    let gelss="https://www.image.edu.in/b-sc-animation-and-vfx/"
    let gelsss="https://www.drmgrdu.ac.in/course/b-sc-animation-and-multimedia-technology.aspx"
    const gellinks=`<a href='${gels}'>Dhanalakshmi Srinivasan College of Arts and Science (Coimbatore)</a>`
    const gellinkss=`<a href='${gelss}'>Image College of Arts, Animation & Technology (Chennai)</a>`
    const gellinksss=`<a href='${gelsss}'>Dr. M.G.R. Educational and Research Institute (Chennai)</a>`
    return (`Dhanalakshmi Srinivasan College of Arts and Science (Coimbatore)  : ${gellinks}`+'<br/>'+
            `Image College of Arts, Animation & Technology (Chennai): ${gellinkss}`+ '<br/>'+
            `Dr. M.G.R. Educational and Research Institute (Chennai): ${gellinksss}` )
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
        return (
            //Bachelors in Sociology:
            '<input class="check" id="check46" onClick={test46()} type="checkbox" value=0 />1.<a class="mech" >Have you ever felt to motivated to make a positive impact on society and bring about social change?</a>'                                                     +'<br/>'
            +'<input class="check" id="check47" onClick={test47()} type="checkbox"  value=0  />2.<a class="mech">Do you feel a sense of satisfaction in understanding the reason behind human behavior and social phenomena?</a>'                                                                                               +'<br/>'
            +'<input class="check" id="check48" onClick={test48()} type="checkbox" value=0/>3.<a class="mech">Have you ever wondered about the root causes of inequality and injustice in society? </a>'                                                                                 +'<br/>'
            //Bachelors in Economics
            +'<input class="check" id="check49" onClick={test49()} type="checkbox" value=0 />4.<a class="mech">Are you interested in understanding the factor that influence the Gobal economy? </a>'                                                                                                +'<br/>'
            +'<input class="check" style="top:10px;" id="check50" onClick={test50()} type="checkbox"value=0  />5.<a class="mech">Are you been crazy about money? </a>'                                                                                      +'<br/>'
            +'<input class="check" id="check51" onClick={test51()} type="checkbox" value=0 />6.<a class="mech">Are you curious about business operate and their impact on the society?</a>'                                                                                                        +'<br/>'
            //Bachelors in Literature
            +'<input class="check" id="check52" onClick={test52()} type="checkbox" value=0 />7.<a class="mech">Do you find yourself wondering about the ways in which language has evolved over time? </a>'                                                                    +'<br/>'
            +'<input class="check" id="check53" onClick={test53()} type="checkbox" value=0 />8.<a class="mech">Are you interested in learning about the cultural and social factors that have influenced language use throughout history? </a>'                                                                                                                                       +'<br/>'
            +'<input class="check" id="check54" onClick={test54()} type="checkbox" value=0 />9.<a class="mech">Do you find it interesting to compare and contrast different languages, both past and present? </a>'                                                                                                         +'<br/>'
            //Bachelors in Design
            +'<input class="check" id="check55" onClick={test55()} type="checkbox" value=0 />10.<a class="mech">Do you often notice the visual details in your environment?   </a>'  +'</br/>'
            +'<input class="check" id="check56" onClick={test56()} type="checkbox" value=0 />11.<a class="mech">.Have you ever tried to improve the appearance of your living space.room or furniture?</a>'                                                                                                              +'<br/>'
            +'<input class="check" id="check57" onClick={test57()} type="checkbox" value=0 />12.<a class="mech">Will you be more peculiar in different design styles? </a>'                                                                                                                     +'<br/>'
            //Bachelors in Event Management 
            + '<input class="check" id="check58" onClick={test58()} type="checkbox" value=0 />13. <a class="mech" >.Are you person of having a plan B ready, if things don’t go according to plan? </a>'                                                                 +'<br/>'
            + '<input class="check" id="check59" onClick={test59()} type="checkbox" value=0 />14.<a class="mech" >Will you look for minor imperfection in work? </a>'                                                                                                                     +'<br/>'
            + '<input class="check" id="check60" onClick={test60()} type="checkbox" value=0 />15. <a class="mech" >Even though you are not well paid, will you stick on to your job as it was your passion? </a>'                                                               +'<br/>'
            //Bachelors of fine arts
            + '<input class="check" id="check61" onClick={test61()} type="checkbox" value=0 /> 16.<a class="mech" >Imagine yourself as an artist. Will you be able to visualize your art without any reference? </a>'                                                                                                                                     +'<br/>'
            +'<input class="check" id="check62" onClick={test62()} type="checkbox"  value=0  />17.<a class="mech">When you are creating art or designs, do you tend to choose colors   based on the emotions or moods you want to convey?</a>'                                                                                                                   +'<br/>'
            +'<input class="check" id="check63" onClick={test63()} type="checkbox" value=0   />18.<a class="mech">Do you have composition knowledge to work with complex materials? </a>'                                                                                                           +'<br/>'
            //Bachelor in Fashion Designing:
            +'<input class="check"  id="check64" onClick={test64()} type="checkbox" value=0 />19.<a class="mech">Do you think that you have better taste in clothing? </a>'                                                                                    +'<br/>'
            +'<input class="check"  id="check65" onClick={test65()} type="checkbox"value=0  />20.<a class="mech">Are you a person who is cautionate about the look? </a>'                                                                                       +'<br/>'
            +'<input class="check"  id="check66" onClick={test66()} type="checkbox" value=0 />21.<a class="mech">Do you have the capability of articulating designer ideas on the paper or the medium? </a>'                                                                                               +'<br/>'
            //Bachelor of Hotel Management:
            +'<input class="check" id="check67" onClick={test67()} type="checkbox" value=0 />22.<a class="mech">Are you comfortable in working fast paced and ever changing environment? </a>'                                                         +'<br/>'
            +'<input class="check" id="check68" onClick={test68()} type="checkbox" value=0 />23.<a class="mech">Are you interested in learning about different types of cuisine and cooking techniques? </a>'                                +'<br/>'
            +'<input class="check"  id="check69" onClick={test69()} type="checkbox" value=0 />24.<a class="mech">Are you willing to work long hours and week end if required in the hospitality industry? </a>'                                                                                                                               +'<br/>'
            //Bachelors of Business Administration
            +'<input class="check"  id="check70" onClick={test70()} type="checkbox" value=0 />25.<a class="mech">Do you think you have the capability of leading?  </a>'                                                                                     +'</br/>'
            +'<input class="check"  id="check71" onClick={test71()} type="checkbox" value=0 />26.<a class="mech">Will you provide service by listening to concerns with courtesy and empathy?</a>'                                                                                                                        +'<br/>'
            +'<input class="check"  id="check72" onClick={test72()} type="checkbox" value=0 />27.<a class="mech">Can you easily judge the professionalism of a person?</a>'                                                                                                            +'<br/>'
           //Law Course
            +'<input class="check" id="check73" onClick={test73()} type="checkbox" value=0 />28.<a class="mech">Are you person who strictly follow the protocol and regulation? </a>' +'<br/>'
            +'<input class="check" id="check74" onClick={test74()} type="checkbox" value=0 />29.<a class="mech">Are you person who can sort out the important details from a long conversation? </a>'+'<t/>'                           +'<br/>'
            +'<input class="check" id="check75" onClick={test75()} type="checkbox" value=0 />30.<a class="mech">Do you think you have the vocal power to argue?</a>' +'<br/>'
            //Bachelors of Journalism and Mass Communication:
            +'<input class="check" id="check76" onClick={test76()} type="checkbox" value=0 />31.<a class="mech">Do you have a skill of writing a ordinary story with dramatical connect?</a>'                            +'<br/>'
            +'<input class="check" id="check77" onClick={test77()} type="checkbox" value=0 />32.<a class="mech">Do you have the habit of reading a wide range of news sources to stay updated on the happening events?</a>'       +'<br/>'
            +'<input class="check" id="check78" onClick={test78()} type="checkbox" value=0 />33.<a class="mech">Can be able to detect the exact information without it is been directly conveyed? </a>'  +'<br/>'
            //Bachelor of Mass Media                                                                                        
            +'<input class="check" id="check79" onClick={test79()} type="checkbox" value=0 />34.<a class="mech">Do you ever thought of being a influencer?</a>'                +'<br/>'
            +'<input class="check" id="check80" onClick={test80()} type="checkbox" value=0 />35.<a class="mech">Have you ever created or contributed to a blog,vlog or podcast?</a>'                                                           +'<br/>'
            +'<input class="check" id="check81" onClick={test81()} type="checkbox" value=0 />36.<a class="mech">Do you enjoy watching movies,television shows and other forms of media and analyzing their messages and themes?</a>'    +'<br/>'
            //Psychology
            +'<input class="check" id="check82" onClick={test82()} type="checkbox" value=0 />37.<a class="mech">Have you ever found yourself analyzing other peoples behaviors or trying to figure out their motivations?</a>'    +'<br/>'
            +'<input class="check" id="check83" onClick={test83()} type="checkbox" value=0 />38.<a class="mech">Do you find yourself interested in studying emotions, personality traits, or mental disorders?</a>'    +'<br/>'
            +'<input class="check" id="check84" onClick={test84()} type="checkbox" value=0 />39.<a class="mech">Are you curious about the relationship between the mind and the brain, and how they influence each other?</a>'    +'<br/>'
            //Bachelors in Political Science
            +'<input class="check" id="check85" onClick={test85()} type="checkbox" value=0 />40.<a class="mech">Have you ever been involved in a student organization or group that focus on political or social issues? </a>'    +'<br/>'
            +'<input class="check" id="check86" onClick={test86()} type="checkbox" value=0 />41.<a class="mech">Have you ever taken interest in learning about the government structures?</a>'    +'<br/>'
            +'<input class="check" id="check87" onClick={test87()} type="checkbox" value=0 />42.<a class="mech">Are you curious about how issues impact on both domestically and internationally?</a>'    +'<br/>'
            //Bachelors in animation
            +'<input class="check" id="check88" onClick={test88()} type="checkbox" value=0 />43.<a class="mech">Do you enjoy creating your own characters or stories?</a>'    +'<br/>'
            +'<input class="check" id="check89" onClick={test89()} type="checkbox" value=0 />44.<a class="mech">Are you drawn to visual arts such as painting, drawing, or sculpting?</a>'    +'<br/>'
            +'<input class="check" id="check90" onClick={test90()} type="checkbox" value=0 />45.<a class="mech">Do you enjoy storytelling and exploring different narrative techniques?</a>'    +'<br/>'
            //Submit
            + '<button class="submit" onClick={tesart()}> Submit</button>'    
        )
    }
    else if(input=="Assesment Starts Engineering!!!"){
        return(
        '<input class="check" id="check1" onClick={test1()} type="checkbox" value=0 />1.<a class="mech" >You are embedded domain person and your friend is having problem with solving technical code. Will you help him?</a>'                                                     +'<br/>'
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
        +'<input class="check" id="check30" onClick={test30()} type="checkbox" value=0 />30.<a class="mech">Can you think and decide a immediate decision in a hectic situation?</a>' +'<br/>'
        //Marine
        +'<input class="check" id="check31" onClick={test31()} type="checkbox" value=0 />31.<a class="mech">Do you find ocean exploration and research interesting?</a>'                            +'<br/>'
        +'<input class="check" id="check32" onClick={test32()} type="checkbox" value=0 />32.<a class="mech">Do you enjoy learning about different cultural and travelling to new places?</a>'       +'<br/>'
        +'<input class="check" id="check33" onClick={test33()} type="checkbox" value=0 />33.<a class="mech">Have you ever considered a career that involves working outdoors and on th water?</a>'  +'<br/>'
        //Bio-Medical                                                                                          
        +'<input class="check" id="check34" onClick={test34()} type="checkbox" value=0 />34.<a class="mech">Do you find yourself drawn to biology and anatomy, but also have an interest in mathematics and physics?</a>'                +'<br/>'
        +'<input class="check" id="check35" onClick={test35()} type="checkbox" value=0 />35.<a class="mech">Have you ever wondered how medical imaging technologies work?</a>'                                                           +'<br/>'
        +'<input class="check" id="check36" onClick={test36()} type="checkbox" value=0 />36.<a class="mech">Do you see yourself pursuing a career that involves combining biology and technology to improve healthcare outcomes?</a>'    +'<br/>'
        //Aerospace
        +'<input class="check" id="check37" onClick={test37()} type="checkbox" value=0 />37.<a class="mech">Have you ever watched a documentary or movie about the history of aviation?</a>'    +'<br/>'
        +'<input class="check" id="check38" onClick={test38()} type="checkbox" value=0 />38.<a class="mech">Do you have an interest in learning about the principles of flight and aerodynamics?</a>'    +'<br/>'
        +'<input class="check" id="check39" onClick={test39()} type="checkbox" value=0 />39.<a class="mech">Do you follow the current events relates to space operation?</a>'    +'<br/>'
        //AI and data science
        +'<input class="check" id="check40" onClick={test40()} type="checkbox" value=0 />40.<a class="mech">Do you follow the current events relates to space operation?</a>'    +'<br/>'
        +'<input class="check" id="check41" onClick={test41()} type="checkbox" value=0 />41.<a class="mech">Do you enjoy reading about new advancements in technology and how they can be applied to real-world problems?</a>'    +'<br/>'
        +'<input class="check" id="check42" onClick={test42()} type="checkbox" value=0 />42.<a class="mech">Do you enjoy experimenting with data and coming up with innovative solutions?</a>'    +'<br/>'
        //3D Printing and Additive manufacturing engineering
        +'<input class="check" id="check43" onClick={test43()} type="checkbox" value=0 />43.<a class="mech">Have you ever been fascinated by the idea of turning a digital model into a physical object?</a>'    +'<br/>'
        +'<input class="check" id="check44" onClick={test44()} type="checkbox" value=0 />44.<a class="mech">Do you ever thought about the 3D printing works and its manufacturing process?</a>'    +'<br/>'
        +'<input class="check" id="check45" onClick={test45()} type="checkbox" value=0 />45.<a class="mech">Have you ever wanted to learn more about the advancements in 3D printing technology?</a>'    +'<br/>'
        //Submit
        + '<button class="submit" onClick={tes()}> Submit</button>')
    }else if(input=="Are you ok"){
        return 'yes'
    }
        else {
        return "Try asking something else!";
    }
}
//engg
function test46(){
    let nums1=document.getElementById("check46");
    
    if(nums1.checked == true){
        document.getElementById("check46").value =1;
}
else if(nums1.checked== false){
       document.getElementById("check46").value = 0;
    }
}

// second checkbox
function test47(){
    let nums1=document.getElementById("check47");
 
    if(nums1.checked == true){
        document.getElementById("check47").value =1;
}
else if(nums1.checked== false){
       document.getElementById("check47").value = 0;
    }
}
//third checkbox
function test48(){
    let nums1=document.getElementById("check48");
  
    if(nums1.checked == true){
        document.getElementById("check48").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check48").value = 0;
    }
}
//fourth checkbox
function test49(){
    let nums1=document.getElementById("check49");
   
    if(nums1.checked == true){
        document.getElementById("check49").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check49").value = 0;
    }
}//fivth checkbox
function test50(){
    let nums1=document.getElementById("check50");
    
    if(nums1.checked == true){
        document.getElementById("check50").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check50").value = 0;
    }
}//sixth checkbox
function test51(){
    let nums1=document.getElementById("check51");
  
    if(nums1.checked == true){
        document.getElementById("check51").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check51").value = 0;
    }
}//seventh checkbox
function test52(){
    let nums1=document.getElementById("check52");

    if(nums1.checked == true){
        document.getElementById("check52").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check52").value = 0;
    }
}//eigth checkbox
function test53(){
    let nums1=document.getElementById("check53");
   
    if(nums1.checked == true){
        document.getElementById("check53").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check53").value = 0;
    }
}//ninth checkbox
function test54(){
    let nums1=document.getElementById("check54");

    if(nums1.checked == true){
        document.getElementById("check54").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check54").value = 0;
    }
}//tenth checkbox
function test55(){
    let nums1=document.getElementById("check55");
  
    if(nums1.checked == true){
        document.getElementById("check55").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check55").value = 0;
    }
}
//leven
function test56(){
    let nums1=document.getElementById("check56");
  
    if(nums1.checked == true){
        document.getElementById("check56").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check56").value = 0;
    }
}
//tweleve
function test57(){
    let nums1=document.getElementById("check57");
  
    if(nums1.checked == true){
        document.getElementById("check57").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check57").value = 0;
    }
}
//tweleve
function test58(){
    let nums1=document.getElementById("check58");
  
    if(nums1.checked == true){
        document.getElementById("check58").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check58").value = 0;
    }
}
//tweleve
function test59(){
    let nums1=document.getElementById("check59");
  
    if(nums1.checked == true){
        document.getElementById("check59").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check59").value = 0;
    }
}
//tweleve
function test60(){
    let nums1=document.getElementById("check60");
  
    if(nums1.checked == true){
        document.getElementById("check60").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check60").value = 0;
    }
}
//tweleve
function test61(){
    let nums1=document.getElementById("check61");
  
    if(nums1.checked == true){
        document.getElementById("check61").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check61").value = 0;
    }
}
//tweleve
function test62(){
    let nums1=document.getElementById("check62");
  
    if(nums1.checked == true){
        document.getElementById("check62").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check62").value = 0;
    }
}
//tweleve
function test63(){
    let nums1=document.getElementById("check63");
  
    if(nums1.checked == true){
        document.getElementById("check63").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check63").value = 0;
    }
}
//tweleve
function test64(){
    let nums1=document.getElementById("check64");
  
    if(nums1.checked == true){
        document.getElementById("check64").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check64").value = 0;
    }
}
//tweleve
function test65(){
    let nums1=document.getElementById("check65");
  
    if(nums1.checked == true){
        document.getElementById("check65").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check65").value = 0;
    }
}//tweleve
function test66(){
    let nums1=document.getElementById("check66");
  
    if(nums1.checked == true){
        document.getElementById("check66").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check66").value = 0;
    }
}
//twenty two
function test67(){
    let nums1=document.getElementById("check67");
  
    if(nums1.checked == true){
        document.getElementById("check67").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check67").value = 0;
    }
}
//twenty three
function test68(){
    let nums1=document.getElementById("check68");
  
    if(nums1.checked == true){
        document.getElementById("check68").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check68").value = 0;
    }
}
//twenty four
function test69(){
    let nums1=document.getElementById("check69");
  
    if(nums1.checked == true){
        document.getElementById("check69").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check69").value = 0;
    }
}
//twenty five
function test70(){
    let nums1=document.getElementById("check70");
  
    if(nums1.checked == true){
        document.getElementById("check70").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check70").value = 0;
    }
}
//twenty three
function test71(){
    let nums1=document.getElementById("check71");
  
    if(nums1.checked == true){
        document.getElementById("check71").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check71").value = 0;
    }
}
//twenty three
function test72(){
    let nums1=document.getElementById("check72");
  
    if(nums1.checked == true){
        document.getElementById("check72").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check72").value = 0;
    }
}
//twenty three
function test73(){
    let nums1=document.getElementById("check73");
  
    if(nums1.checked == true){
        document.getElementById("check73").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check73").value = 0;
    }
}//twenty three
function test74(){
    let nums1=document.getElementById("check74");
  
    if(nums1.checked == true){
        document.getElementById("check74").value = 1;
}
else if(nums1.checked== false){
       document.getElementById("check74").value = 0;
    }
}//twenty three
function test75(){
    let nums1=document.getElementById("check75");
  
    if(nums1.checked == true){
        document.getElementById("check75").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check75").value = 0;
    }
}
//31
function test76(){
    let nums1=document.getElementById("check76");
  
    if(nums1.checked == true){
        document.getElementById("check76").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check76").value = 0;
    }
}
//32
function test77(){
    let nums1=document.getElementById("check77");
  
    if(nums1.checked == true){
        document.getElementById("check77").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check77").value = 0;
    }
}
//33
function test78(){
    let nums1=document.getElementById("check78");
  
    if(nums1.checked == true){
        document.getElementById("check78").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check78").value = 0;
    }
}
//34
function test79(){
    let nums1=document.getElementById("check79");
  
    if(nums1.checked == true){
        document.getElementById("check79").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check79").value = 0;
    }
}
//35
function test80(){
    let nums1=document.getElementById("check80");
  
    if(nums1.checked == true){
        document.getElementById("check80").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check80").value = 0;
    }
}
//36
function test81(){
    let nums1=document.getElementById("check81");
  
    if(nums1.checked == true){
        document.getElementById("check81").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check81").value = 0;
    }
}
//37
function test82(){
    let nums1=document.getElementById("check82");
  
    if(nums1.checked == true){
        document.getElementById("check82").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check82").value = 0;
    }
}
//38
function test83(){
    let nums1=document.getElementById("check83");
  
    if(nums1.checked == true){
        document.getElementById("check83").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check83").value = 0;
    }
}
//39
function test84(){
    let nums1=document.getElementById("check84");
  
    if(nums1.checked == true){
        document.getElementById("check84").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check84").value = 0;
    }
}
//40
function test85(){
    let nums1=document.getElementById("check85");
  
    if(nums1.checked == true){
        document.getElementById("check85").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check85").value = 0;
    }
}
//41
function test86(){
    let nums1=document.getElementById("check86");
  
    if(nums1.checked == true){
        document.getElementById("check86").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check86").value = 0;
    }
}
//42
function test87(){
    let nums1=document.getElementById("check87");
  
    if(nums1.checked == true){
        document.getElementById("check87").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check87").value = 0;
    }
}
//43
function test88(){
    let nums1=document.getElementById("check88");
  
    if(nums1.checked == true){
        document.getElementById("check88").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check88").value = 0;
    }
}
//44
function test89(){
    let nums1=document.getElementById("check89");
  
    if(nums1.checked == true){
        document.getElementById("check89").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check89").value = 0;
    }
}
//45
function test90(){
    let nums1=document.getElementById("check90");
  
    if(nums1.checked == true){
        document.getElementById("check90").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check90").value = 0;
    }
}
//
//engineering
//
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
//31
function test31(){
    let nums1=document.getElementById("check31");
  
    if(nums1.checked == true){
        document.getElementById("check31").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check31").value = 0;
    }
}
//32
function test32(){
    let nums1=document.getElementById("check32");
  
    if(nums1.checked == true){
        document.getElementById("check32").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check32").value = 0;
    }
}
//33
function test33(){
    let nums1=document.getElementById("check33");
  
    if(nums1.checked == true){
        document.getElementById("check33").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check33").value = 0;
    }
}
//34
function test34(){
    let nums1=document.getElementById("check34");
  
    if(nums1.checked == true){
        document.getElementById("check34").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check34").value = 0;
    }
}
//35
function test35(){
    let nums1=document.getElementById("check35");
  
    if(nums1.checked == true){
        document.getElementById("check35").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check35").value = 0;
    }
}
//36
function test36(){
    let nums1=document.getElementById("check36");
  
    if(nums1.checked == true){
        document.getElementById("check36").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check36").value = 0;
    }
}
//37
function test37(){
    let nums1=document.getElementById("check37");
  
    if(nums1.checked == true){
        document.getElementById("check37").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check37").value = 0;
    }
}
//38
function test38(){
    let nums1=document.getElementById("check38");
  
    if(nums1.checked == true){
        document.getElementById("check38").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check38").value = 0;
    }
}
//39
function test39(){
    let nums1=document.getElementById("check39");
  
    if(nums1.checked == true){
        document.getElementById("check39").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check39").value = 0;
    }
}
//40
function test40(){
    let nums1=document.getElementById("check40");
  
    if(nums1.checked == true){
        document.getElementById("check40").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check40").value = 0;
    }
}
//41
function test41(){
    let nums1=document.getElementById("check41");
  
    if(nums1.checked == true){
        document.getElementById("check41").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check41").value = 0;
    }
}
//42
function test42(){
    let nums1=document.getElementById("check42");
  
    if(nums1.checked == true){
        document.getElementById("check42").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check42").value = 0;
    }
}
//43
function test43(){
    let nums1=document.getElementById("check43");
  
    if(nums1.checked == true){
        document.getElementById("check43").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check43").value = 0;
    }
}
//44
function test44(){
    let nums1=document.getElementById("check44");
  
    if(nums1.checked == true){
        document.getElementById("check44").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check44").value = 0;
    }
}
//45
function test45(){
    let nums1=document.getElementById("check45");
  
    if(nums1.checked == true){
        document.getElementById("check45").value = 1 ;
}
else if(nums1.checked== false){
       document.getElementById("check45").value = 0;
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
    let checky30=document.getElementById("check31").value;
    let checky31=document.getElementById("check32").value;
    let checky32=document.getElementById("check33").value;   
    let checky33=document.getElementById("check34").value;
    let checky34=document.getElementById("check35").value;
    let checky35=document.getElementById("check36").value;
    let checky36=document.getElementById("check37").value;
    let checky37=document.getElementById("check38").value;
    let checky38=document.getElementById("check39").value;
    let checky39=document.getElementById("check40").value;
    let checky40=document.getElementById("check41").value;
    let checky41=document.getElementById("check42").value;
    let checky42=document.getElementById("check43").value;
    let checky43=document.getElementById("check44").value;
    let checky44=document.getElementById("check45").value;   
    
    
    let ECE= Number(checky) + Number(checky1) + Number(checky2);
    let Fashion= Number(checky3)+Number (checky4)+ Number(checky5);
    let Civil= Number (checky6)+Number (checky7)+ Number(checky8)
    let  EEE =Number (checky9) +Number(checky10)+Number(checky11)
   let Chemical=Number(checky12) + Number(checky13) + Number(checky14);
   let mech=    Number  (checky15)+ Number(checky16) + Number(checky17);
   let csc=     Number (checky18)+Number (checky19) + Number(checky20);
   let IT =     Number(checky21) +Number(checky22)+Number(checky23) ;
   let textile =  Number (checky24)+Number (checky25) +Number(checky26)
   let Aero= Number(checky27)+ Number(checky28) +Number(checky29);
   let marine=Number  (checky30)+ Number(checky31) + Number(checky32);
   let biomedical= Number (checky33)+Number (checky34) + Number(checky35);
   let aerospace = Number(checky36) +Number(checky37)+Number(checky38) ;
   let Ai =  Number (checky39)+Number (checky40) +Number(checky41)
   let printing= Number(checky42)+ Number(checky43) +Number(checky44);
//    alert(res);
//    getval(res);
let krish="https://www.skct.edu.in/#/"
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
{name:"Marine",marks:marine},
{name:"Bo medical",marks:biomedical},
{name:"Aerospace",marks:aerospace},
{name:"AI and Data Science",marks:Ai},
{name:"3D Printing and Additive Manufracturing",marks:printing}
];

let filtered = arr.filter((a)=>a.marks>=2)
let filtered1 = arr.filter((a)=>a.marks==1)

console.log("ECE"+ ECE,"Fashion"+ Fashion,"Civil"+ Civil,"EEE"
+ EEE,"Chemical"+Chemical,"Mechanical"+mech,"CSC"+csc,"IT"+ IT
, "Textile"+textile, "Aeronautial"+Aero);
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
//button for arts
function tesart(){
    let checky=document.getElementById("check46").value;
    let checky1=document.getElementById("check47").value;
    let checky2=document.getElementById("check48").value;   
    let checky3=document.getElementById("check49").value;
    let checky4=document.getElementById("check50").value;
    let checky5=document.getElementById("check51").value;
    let checky6=document.getElementById("check52").value;
    let checky7=document.getElementById("check53").value;
    let checky8=document.getElementById("check54").value;
    let checky9=document.getElementById("check55").value;
    let checky10=document.getElementById("check56").value;
    let checky11=document.getElementById("check57").value;
    let checky12=document.getElementById("check58").value;
    let checky13=document.getElementById("check59").value;
    let checky14=document.getElementById("check60").value;   
    let checky15=document.getElementById("check61").value;
    let checky16=document.getElementById("check62").value;
    let checky17=document.getElementById("check63").value;
    let checky18=document.getElementById("check64").value;
    let checky19=document.getElementById("check65").value;
    let checky20=document.getElementById("check66").value;
    let checky21=document.getElementById("check67").value;
    let checky22=document.getElementById("check68").value;
    let checky23=document.getElementById("check69").value;
    let checky24=document.getElementById("check70").value;
    let checky25=document.getElementById("check71").value;
    let checky26=document.getElementById("check72").value;
    let checky27=document.getElementById("check73").value;
    let checky28=document.getElementById("check74").value;
    let checky29=document.getElementById("check75").value;
    let checky30=document.getElementById("check76").value;
    let checky31=document.getElementById("check77").value;
    let checky32=document.getElementById("check78").value;   
    let checky33=document.getElementById("check79").value;
    let checky34=document.getElementById("check80").value;
    let checky35=document.getElementById("check81").value;
    let checky36=document.getElementById("check82").value;
    let checky37=document.getElementById("check83").value;
    let checky38=document.getElementById("check84").value;
    let checky39=document.getElementById("check85").value;
    let checky40=document.getElementById("check86").value;
    let checky41=document.getElementById("check87").value;
    let checky42=document.getElementById("check88").value;
    let checky43=document.getElementById("check89").value;
    let checky44=document.getElementById("check90").value;   
    
    
    let sociology= Number(checky) + Number(checky1) + Number(checky2);
    let economics= Number(checky3)+Number (checky4)+ Number(checky5);
    let litreture= Number (checky6)+Number (checky7)+ Number(checky8)
    let  design =Number (checky9) +Number(checky10)+Number(checky11)
   let events=Number(checky12) + Number(checky13) + Number(checky14);
   let fine=    Number  (checky15)+ Number(checky16) + Number(checky17);
   let fashion=     Number (checky18)+Number (checky19) + Number(checky20);
   let hotel =     Number(checky21) +Number(checky22)+Number(checky23) ;
   let BA =  Number (checky24)+Number (checky25) +Number(checky26)
   let law= Number(checky27)+ Number(checky28) +Number(checky29);
   let journal=Number  (checky30)+ Number(checky31) + Number(checky32);
   let massmed= Number (checky33)+Number (checky34) + Number(checky35);
   let pshyco = Number(checky36) +Number(checky37)+Number(checky38) ;
   let science =  Number (checky39)+Number (checky40) +Number(checky41)
   let animation= Number(checky42)+ Number(checky43) +Number(checky44);

   let arr=[{name:"Bachelor of Socialogy",marks:sociology},
{name:"Bachelor of Economics",marks:economics},
{name:"Bachelor of Literature",marks:litreture},
{name:"Bachelors in Design",marks:design},
{name:"Bachelors in Event Management",marks:events},
{name:"Bachelors of fine arts",marks:fine},
{name:"Bachelor in Fashion Designing",marks:fashion},
{name:"Bachelor of Hotel Management",marks:hotel},
{name:"Bachelor of Business Administration",marks:BA},
{name:"Law Course",marks:law},
{name:"Bachelor of Journalism and Mass Communication",marks:journal},
{name:"Bachelor of Mass Media",marks:massmed},
{name:"Psychology",marks:pshyco},
{name:"Bachelor in Political Science",marks:science},
{name:"Bachelor of Animation",marks:animation}
];

let filtered = arr.filter((a)=>a.marks>=2)
let filtered1 = arr.filter((a)=>a.marks==1)

// console.log("ECE"+ ECE,"Fashion"+ Fashion,"Civil"+ Civil,"EEE"+ EEE,"Chemical"+Chemical,"Mechanical"+mech,"CSC"+csc,"IT"+ IT, "Textile"+textile, "Aeronautial"+Aero);
console.log("filtered",filtered);
console.log("filtered1",filtered1);
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
getvalart(gee,ghee)
}
function engg()
{
getengg("Assesment Starts Engineering!!!")
}
function arts()
{
getarts("Assesment Starts Arts!!!")
}

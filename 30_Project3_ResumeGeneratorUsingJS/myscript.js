//entering WE and AQ:
function addNewWork(){
    console.log("test");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute("placeholder","enter your workExperience here");

    let workOb = document.getElementById("work");
    let workAddButtonOb = document.getElementById("workAddButton");

    workOb.insertBefore(newNode,  workAddButtonOb);

}

function addNewQualification(){
    console.log("another test");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("qualificationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);
    newNode.setAttribute("placeholder", "enter your AcademicQualification here");

    let qualificationOb = document.getElementById("qualification");
    let qualificationAddButtonOb = document.getElementById("qualificationAddButton");

    qualificationOb.insertBefore(newNode,qualificationAddButtonOb);

}

//generating CV:
function generateCV(){
    //console.log("generating cv");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //doing directly
    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = 
    document.getElementById("phoneField").value;

    //address
    document.getElementById("addressT").innerHTML=
    document.getElementById("addressField").value; 

    //fb
    document.getElementById("fbT").innerHTML=
    document.getElementById("fbField").value;

    //insta
    document.getElementById("instaT").innerHTML=
    document.getElementById("instaField").value;

    //linkedin
    document.getElementById("linkedinT").innerHTML=
    document.getElementById("linkedinField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=
    document.getElementById("objectiveField").value;

    //WE
    let wes = document.getElementsByClassName("workField");

    let str="";

    for(let e of wes){
        str=str+ `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //AQ
    let aqs=document.getElementsByClassName("qualificationField");
    let str1 ="";
    for(let e of aqs){
        str1=str1+ `<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //show and hide cv temlate
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}
    //print resume
    function printCV(){
        window.print();
        console.log("print");
    }





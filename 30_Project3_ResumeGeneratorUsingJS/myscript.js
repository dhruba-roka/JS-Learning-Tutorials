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
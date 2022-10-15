    document.querySelector("form").addEventListener("submit", vaccinationdetails);
    var detailArr = JSON.parse(localStorage.getItem("FinalArray")) || [] ;

    window.addEventListener("load", function(){
        displayData(detailArr);
    })
    
   
    function vaccinationdetails(event){
    event.preventDefault();
   
    var UniqueID =  document.querySelector("#UniqueID").value;
    
    var NamVal = false;
    var Name = document.querySelector("#Name").value;
    if(Name===""  || Name.length < 4){
        alert("Name Should be at least 4 characters");
    }else{
        NamVal = true;
    }

    var AgeVal = false;
    var Age = document.querySelector("#Age").value;
    if(Age <18 || Age>40 ){
        alert("Age should be between 18-40");
    }else{
        AgeVal = true;
    }
    var Designation = document.querySelector("#Designation").value;
    var Priority  = document.querySelector("#Priority").value;
    var Vaccine = document.querySelector("#Vaccine").value;

    var otherVal= false;
    if(Designation==="" || Priority==="" || Vaccine==="" || UniqueID===""){
        alert("Fill all the details")
    }else{
        otherVal= true;
    }

    console.log(UniqueID, Name, Age, Designation, Priority, Vaccine);

    var Productlist = {
        UniqueID : UniqueID,
        Name : Name,
        Age : Age, 
        Designation : Designation,
        Priority : Priority,
        Vaccine : Vaccine
    }

    if(NamVal == true && AgeVal == true  && otherVal== true){
        detailArr.push(Productlist);
        console.log(detailArr);
        localStorage.setItem("FinalArray", JSON.stringify(detailArr));
        displayData(detailArr);

    } 
}


const container = document.getElementById("container");

function displayData(detailArr){
    document.querySelector("tbody").innerHTML = "";
    console.log("Display Data:",detailArr); 
    detailArr.map(function (elem){
    var tr = document.createElement("tr");
    tr.className = "table-row";
    
    var UniqueID = document.createElement("td");
    UniqueID.textContent = elem.UniqueID;

    var Name = document.createElement("td");
    Name.textContent = elem.Name;

    var Age = document.createElement("td");
    Age.textContent = elem.Age;
    Age.className = "Age"

    var Designation = document.createElement("td");
    Designation.textContent = elem.Designation;
    
    var Priority = document.createElement("td");
    Priority.textContent = elem.Priority;
    Priority.className = "Priority"

    var Vaccine = document.createElement("td");
    Vaccine.textContent = elem.Vaccine;
    Vaccine.className = "Vaccine"

    let del_td = document.createElement("td");
    let del = document.createElement("button");
    del.className = "del";
    del.innerText = "Delete";
    del_td.append(del);

    del_td.addEventListener("click", function(){
      delete(elem);
  });

    tr.append( UniqueID, Name, Age, Designation,Priority , Vaccine, del_td);
    // container.append(tr);
    document.querySelector("tbody").append(tr);
    });
}



var detailArr = JSON.parse(localStorage.getItem("FinalArray")) || [];

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
    document.querySelector("tbody").append(tr);
    });
}

displayData(detailArr); 

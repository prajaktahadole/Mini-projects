var detailArr = JSON.parse(localStorage.getItem("RegistrationArray")) || [];

console.log(detailArr);
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
    let delbutt = document.createElement("div");
    delbutt.className = "delbutt";
    delbutt.innerText = "Delete";
    del_td.append(delbutt);

    del_td.addEventListener("click", function(){
      DeleteFun(elem);
    });

    let vacc_td = document.createElement("td");
    let vaccbutt = document.createElement("div");
    vaccbutt.className = "vaccbutt";
    vaccbutt.innerText = "Vaccinate";
    vacc_td.append(vaccbutt);

    vacc_td.addEventListener("click", function(){
      OTPFun(elem);
    });

    function DeleteFun(elem)
    {
      localStorage.removeItem(this.elem);
      alert("deleted")
    }


    function OTPFun(elem) 
    {
      elem.Status = true;
      alert("OTP function call")
    }






    tr.append( UniqueID, Name, Age, Designation,Priority , Vaccine, vacc_td, del_td);
    document.querySelector("tbody").append(tr);
    });
}
displayData(detailArr); 



    document.querySelector("form").addEventListener("submit", vaccinationdetails);
    var detailArr = JSON.parse(localStorage.getItem("RegistrationArray")) || [] ;

    window.addEventListener("load", function(){
        displayData(detailArr);
    })
    
   
    function vaccinationdetails(event){
    event.preventDefault();
   
    var UniqueID =  document.querySelector("#UniqueID").value;

    var AllIds = JSON.parse(localStorage.getItem("AllIdsloc"))||[]; 

    var Id = {
        UniqueID : UniqueID,    
    };
    AllIds.push(Id)
    console.log(AllIds)
    localStorage.setItem("AllIdsloc" , JSON.stringify(AllIds));

  
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
        Vaccine : Vaccine,
        Status : false
        
    }

    if(NamVal == true && AgeVal == true  && otherVal== true){
        alert("Registration successful");
        detailArr.push(Productlist);
        console.log(detailArr);
        localStorage.setItem("RegistrationArray", JSON.stringify(detailArr));
        window.location.href = "dashboard.html"   
        displayData(detailArr)
    } 
}



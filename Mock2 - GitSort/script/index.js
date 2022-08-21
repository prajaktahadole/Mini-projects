
async function Alldata(){
    
    var url="https://jsonmock.hackerrank.com/api/articles?page=";
    AlldataArr = [];
   
    for(var i = 0; i < 5; i++)
    {
        let res=await fetch(`${url}${i+1}`);
        let data=await res.json();
        AlldataArr.push(...data.data);
       // console.log(AlldataArr);
    }
    return AlldataArr;
}
Alldata();
let container=document.querySelector("#container");






function showData(data)
{
container.innerHTML="";
data.map((e)=>{
    let divmain= document.createElement("div");
    divmain.setAttribute("class" , "divmain")

    let div1= document.createElement("div");
  
    var avtar = document.createElement("img");
    avtar.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU");
    avtar.setAttribute("class" , "avtar")

    var name = document.createElement("h3")
    name.textContent = e.author;

    div1.append(avtar, name)

    var info = document.createElement("p")
    info.textContent = e.title;

    let div2= document.createElement("div");

    var comm = document.createElement("h4")
    comm.textContent = e.num_comments;

    var end = document.createElement("h4")
    end.setAttribute("class" , "end")
    end.textContent = "Go to Article";
    
    end.addEventListener("click", function(){
        window.location.href=`${e.url}`
    });
    

    div2.append(comm, end);

    divmain.append(div1, info, div2)


    document.querySelector("#container").append(divmain);
})
}


 
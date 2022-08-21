
async function getLatestcomm(){
    let created = await Alldata();
    document.getElementById("container").innerHTML = "";

    created = created
    .sort((a,b) =>b.created_at - a.created_at)
    .slice(0, 10);
   // console.log(created);
   showData(created)
}

document.querySelector("#lastestcomm").addEventListener("click", getLatestcomm)




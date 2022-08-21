
async function getTopcomments(){
    let comments = await Alldata();


    if(comments){
        document.getElementById("container").innerHTML = "";

        comments = comments
        .sort((a,b) => b.num_comments - a.num_comments)
        .slice(0, 10);
        console.log(comments);
        showData(comments)
    } 
}
document.querySelector("#topcomm").addEventListener("click", getTopcomments )

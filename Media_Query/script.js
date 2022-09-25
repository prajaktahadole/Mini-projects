var data = [
    {
        imageUrl: "https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "amet consectetur adipisicing",

    },

    {
        imageUrl: "https://images.unsplash.com/photo-1575300807981-65abff0d63d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: " Eum aperiam ab deserunt ",
    },

    {
        imageUrl: "https://images.unsplash.com/photo-1630253158595-736bc9961e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "ken Druzzzzmstick",
           
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1592762224962-5f98a3a00621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Bolesaas - Cubes",

    },
   
]


data.map(function(item){
       var div = document.createElement("div");

       var iimage = document.createElement("img");
       iimage.setAttribute("src", item.imageUrl);
       iimage.setAttribute("class" , "img1")

       var Name = document.createElement("p");
       Name.textContent = item.name;
       Name.setAttribute("class", "Name1")
       div.append(iimage , Name,  );
       div.setAttribute("class", "postdiv1")

document.querySelector("#Container-prod").append(div)
});




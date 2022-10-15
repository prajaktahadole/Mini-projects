var PuppyBreed = JSON.parse(localStorage.getItem("Breedclick"));
console.log(PuppyBreed);

let displayPuppy = document.getElementById("displayPuppy");

const FetchData = async () => {
  try {
    let imgg = await fetch(`https://dog.ceo/api/breed/hound/images`);
    let imggdata = await imgg.json();
    console.log(imggdata);
    displayData(imggdata);
  } catch (err) {
    console.log(err);
  }
};
FetchData();


const displayData = (imggdata) => {
  displayPuppy.innerHTML = "";
  imggdata.message.map((i) => {
    let Card = document.createElement("div");
    Card.setAttribute("id", "Imgcard");

    var image = document.createElement("img");
    image.setAttribute("src", i);

    Card.append(image);
    displayPuppy.append(Card);
  });
};

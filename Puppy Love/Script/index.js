let displayHome = document.getElementById("displayHome");
  let breeds = [];
  const searchData = async () => {
    try {
      let name = await fetch(`https://dog.ceo/api/breeds/list/all`);
      let data = await name.json();
      for (key in data.message) {
        breeds.push(key);
      }
      console.log(breeds);
      displayData(breeds);
    } catch (err) {
      console.log(err);
    }
  };
  searchData();

  const displayData = (breeds) => {
    displayHome.innerHTML = "";
    breeds.map((breed) => {
      let Card = document.createElement("div");
      Card.setAttribute("id", "card");

      let title = document.createElement("h2");
      title.textContent = breed;
      title.setAttribute("id", "title");

      var button = document.createElement("button");
      button.textContent = "Show all";
      button.setAttribute("id", "buttHome");

      button.addEventListener("click", () => {
        play(breed);
        localStorage.setItem("Breedclick", JSON.stringify(breed));
        window.location.href='../puppy.html';
      });

      Card.append(title, button);
      displayHome.append(Card);
    });
  };
  var puppyArr = [];
  const play = (Card) => {
    let x = Card;
    console.log(x);
    puppyArr.push(x);
  };
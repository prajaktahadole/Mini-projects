/// FILTER

function filterVaccine(){
    var selected = document.querySelector("#vaccineFilter").value;
    console.log(selected);

    var filteredList = detailArr.filter(function (elem) {
      return elem.Vaccine == selected;
    });
    console.log(filteredList);
    displayData(filteredList);
  }

  function SortAge() {
    var selected = document.querySelector("#AgeSort").value;
    //console.log(selected);
    if (selected == "high") {
      //descending
      detailArr.sort(function (a, b) {
        return Number(b.Age) - Number(a.Age);
      });
    }
    if (selected == "low") {
      //ascending
      detailArr.sort(function (a, b) {
        return Number(a.Age) - Number(b.Age);
      });
    }

    console.log(detailArr);
    displayData(detailArr);
  }


  function filterPriority(){
    var selected = document.querySelector("#PriorityFilter").value;
    console.log(selected);

    var filteredList = detailArr.filter(function (elem) {
      return elem.Priority == selected;
    });
    console.log(filteredList);
    displayData(filteredList);
  }




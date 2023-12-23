// Coding Steps:
// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
// ***************************************
//   i labeled my id's with endings txt is for a text field and btn is for a button
let id = 0;
document.getElementById("submit-btn").addEventListener("click", () => {
  // i'm targeting the table below the form in the html file and putting into a variable
  let table = document.getElementById("table");
  //   *******testing logs**********
  //   console.log("howdy, this tests the button");
  //   console.log(
  //     document.getElementById("name-txt").value,
  //     "testing values passed from user"
  //   );
  //   putting row into a variable so i can target it and place user input inside
  let row = table.insertRow(1);
  //  i'm saying whatever input is placed by user in name textfield put it in cell 0 row 1
  row.insertCell(0).innerHTML = document.getElementById("name-txt").value;
  //   i'm saying whatever input is placed by user in species textfield put it in cell 1 row 1
  row.insertCell(1).innerHTML = document.getElementById("species-txt").value;
  //   i'm saying whatever input is placed by user in home planet textfield put it in cell 2 row 1
  row.insertCell(2).innerHTML = document.getElementById("planet-txt").value;
});

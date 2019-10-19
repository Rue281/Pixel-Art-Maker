//get elements
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const form = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");

//@description Handle form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();

  makeGrid();

  //reset form after submit
  form.reset();
});

//@description Create Grids
function makeGrid() {
  //remove old table cells
  resetTable();

  let height = inputHeight.value;
  let width = inputWidth.value;

  //Loop to create rows using Grid-Height
  for (i = 0; i < height; i++) {
    let tableRow = table.insertRow(i);

    //Loop to create cells {columns} using Grid-Width
    for (j = 0; j < width; j++) {
      let cell = tableRow.insertCell(j);
      cell.innerHTML = "";

      //@description Add eventListener to cells
      cell.addEventListener("click", function(event) {
        colorValue = colorPicker.value;

        //set cell background-color to colorPicker value
        event.target.style.backgroundColor = colorValue;
      });
    }
  }
}

//@description Reset pixelCanvas
function resetTable() {
  table.innerHTML = "";
}

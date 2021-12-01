const fileObj = document.getElementById("file-selector");
let result = undefined;

fileObj.addEventListener("change", function () {
  let fr = new FileReader();
  fr.onload = function () {
    result = fr.result;
  };

  fr.readAsText(this.files[0]);
});

const viewFile = () => {
  document.getElementById("table").innerHTML = "";

  // LOADING START
  const defaultTxt = document.getElementById("submitBtn").value;
  document.getElementById("submitBtn").value = "Loading...";

  const resultObj = JSON.parse(result);

  // Validations

  // TABLE
  let table = document.createElement("table");

  // HEADERS
  let tableHead = document.createElement("thead");
  resultObj.headers.forEach((el) => {
    const th = document.createElement("th");
    th.innerHTML = el;
    tableHead.appendChild(th);
  });

  table.appendChild(tableHead);

  // VALUES
  resultObj.values.forEach((row) => {
    let tr = document.createElement("tr");
    row.forEach((el) => {
      const td = document.createElement("td");
      td.innerHTML = el;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  // add the newly created element and its content into the DOM
  document.getElementById("table").appendChild(table);

  // Show default text
  document.getElementById("submitBtn").value = defaultTxt;
};

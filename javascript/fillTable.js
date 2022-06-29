function loadTableData() {
  // console.log("ana hana");
  const table = document.getElementById("myTable");
  const newbody = document.getElementById("testBody");

  //each time we delete or add new item we wil call this function
  // so we have to delete all table items before inserting new item
  var tableHeaderRowCount = 1;

  var rowCount = table.rows.length;

  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }

  //for each user add new row

  users.forEach((items) => {
    let row = newbody.insertRow();
    let id = row.insertCell(0);
    id.innerHTML = items.id;
    let createdDate = row.insertCell(1);
    createdDate.innerHTML = items.createdDate;
    let status = row.insertCell(2);
    let p = document.createElement("p");
    p.innerHTML = items.status;
    status.appendChild(p);
    p.classList.add("trparagraph");

    // status.classList.add("margin");
    switch (items.status) {
      case "Rejeté":
        p.classList.add("rejected");
        break;
      case "Validé":
        p.classList.add("valide");
        break;
      default:
        p.classList.add("on-validation");
        break;
    }

    let firstName = row.insertCell(3);
    firstName.innerHTML = items.firstName;
    let lastName = row.insertCell(4);
    lastName.innerHTML = items.lastName;
    let userName = row.insertCell(5);
    userName.innerHTML = items.userName;
    let registrationNumber = row.insertCell(6);
    registrationNumber.innerHTML = items.registrationNumber;
    let deletebtn = row.insertCell(7);
    deletebtn.innerHTML = "<img id='delete' src='./trush.png' />";

    deletebtn.addEventListener("click", () => {
      users = users.filter((item) => item.id !== items.id);

      loadTableData();
    });
  });
}
loadTableData();

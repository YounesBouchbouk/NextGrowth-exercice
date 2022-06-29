let firstName = document.getElementById("nom");
let lastName = document.getElementById("pnom");
let userName = document.getElementById("user");
let status = document.getElementById("etat");
let createdDate = document.getElementById("datecrea");
let registrationNumber = document.getElementById("mattricule");

const addBtn = document.getElementById("add");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  users.push({
    id: Math.random(),
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    status: status.value,
    createdDate: createdDate.value,
    registrationNumber: registrationNumber.value,
  });
  loadTableData();
  closeModule();
});

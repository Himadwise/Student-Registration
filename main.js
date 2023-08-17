class Student {
  constructor(firstName, LastName, idNumber, classRoom) {
    (this.firstName = firstName),
      (this.LastName = LastName),
      (this.idNumber = idNumber),
      (this.classRoom = classRoom);
  }
}

class Commands {
  registerNewStudent(std) {
    const allStudents = document.getElementById("all-students");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${std.firstName}</td>
    <td>${std.LastName}</td>
    <td>${std.idNumber}</td>
    <td>${std.classRoom}</td>
    <td> <a href="#" class="remove-student">🧺</td>
    `;
    allStudents.appendChild(row);
  }
  clearAll() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("idNumber").value = "";
    document.getElementById("classRoom").value = "";
  }
  displayAlert(Message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(Message));
    const container = document.querySelector(".container");
    const form = document.getElementById("student-form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
  }

  deleteStudent(element) {
    if (element.className === "remove-student") {
      const removedElement = element.parentElement.parentElement;
      removedElement.remove();
      console.log(removedElement);
    }
  }
}

// even-Listers
const handleFormSubmit = (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstname").value;
  const LastName = document.getElementById("lastname").value;
  const idNumber = document.getElementById("idNumber").value;
  const classRoom = document.getElementById("classRoom").value;
  const std = new Student(firstName, LastName, idNumber, classRoom);

  //   Registering new Student
  const command = new Commands();
  if (firstName == "" || LastName == "" || idNumber == "" || classRoom == "") {
    command.displayAlert("Please, Fill out All inputs", "alert-warning ");
  } else {
    command.registerNewStudent(std);
    command.clearAll();
  }
};

const bookForm = document
  .getElementById("student-form")
  .addEventListener("submit", handleFormSubmit);

document.getElementById("all-students").addEventListener("click", (e) => {
  const command = new Commands();
  command.deleteStudent(e.target);
  command.displayAlert("Deleted Successfully", "alert-success");
  e.preventDefault();
});

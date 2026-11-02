const form = document.querySelector("#eventTicket");
const ticketType = document.querySelector("#ticketType");
const studentIdContainer = document.querySelector("#studentIdContainer");
const studentId = document.querySelector("#studentId");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

updateTypeFields();

function updateTypeFields() {
  const isStudent = ticketType.value === "student";
  const isGuest = ticketType.value === "guest";

  studentIdContainer.hidden = !isStudent;
  studentId.required = isStudent;

  accessCodeContainer.hidden = !isGuest;
  accessCode.required = isGuest;
}

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(`${value}T00:00:00`);
  return chosen < today;
}

ticketType.addEventListener("change", updateTypeFields);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const type = ticketType.value;
  const eventDate = form.eventDate.value;
  const studentNumber = studentId.value.trim();
  const code = accessCode.value.trim();

  if (type === "student" && !/^\d{9}$/.test(studentNumber)) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  if (type === "guest" && code !== "EVENT131") {
    output.textContent = "Access Code is not valid";
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateTypeFields();
});

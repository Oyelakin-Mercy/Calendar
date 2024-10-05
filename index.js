const select = document.querySelector("select");
const list = document.querySelector("ul");
const h2 = document.querySelector("h2");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31; 


  if (month === "April" || month === "June" || month === "September" || month === "November") {
    days = 30;
  } else if (month === "February") {
    days = 28; 
  }

  list.textContent = "";
  h2.textContent = month;

  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}


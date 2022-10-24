// main.js
const addDestinationForm = document.querySelector("#destination-form");

addDestinationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   const formData = new FormData(addDestinationForm);

  const title = document.querySelector("#name").value;
  const location = document.querySelector("#location").value;
  const description = document.querySelector("#description").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  debugger;

  fetch("/api/destination/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, location, description, imageUrl }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      window.location.reload();
    });
});

const update = document.querySelector("#update-button");

update.addEventListener("click", (e) => {
  const id = e.target.parentNode.getAttribute("data-id");

  fetch(`/api/destination/update/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
      quote: "I find your lack of faith disturbing.",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
});

const deleteButton = document.querySelector("#delete-button");

deleteButton.addEventListener("click", (e) => {
  const id = e.target.parentNode.getAttribute("data-id");

  fetch(`/api/destination/delete/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      window.location.reload();
    });
});

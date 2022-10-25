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

$("#updateModal").on("show.bs.modal", async function (e) {
  const id = e.target.getAttribute("data-id");
  const data = await fetch(`/api/destination/${id}`);
  const results = await data.json();

  const { title, location, description, imageUrl } = results.data;

  document.querySelector("input#update-title").value = title;
  document.querySelector("input#update-location").value = location;
  document.querySelector("textarea#update-description").value = description;
  document.querySelector("input#update-imageUrl").value = imageUrl;
});

update?.addEventListener("click", (e) => {
  const id = e.target.getAttribute("data-id");

  const title = document.querySelector("input#update-title").value;
  const location = document.querySelector("input#update-location").value;
  const description = document.querySelector(
    "textarea#update-description"
  ).value;
  const imageUrl = document.querySelector("input#update-imageUrl").value;

  fetch(`/api/destination/update/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, location, description, imageUrl }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
});

const deleteButton = document.querySelector("#delete-button");

deleteButton?.addEventListener("click", (e) => {
  const id = e.target.getAttribute("data-id");

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

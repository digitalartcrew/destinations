// main.js
const addDestinationForm = document.querySelector("#destination-form");

addDestinationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#name").value;
  const location = document.querySelector("#location").value;
  const description = document.querySelector("#description").value;
  const imageUrl = document.querySelector("#imageUrl").value;

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

// Current on the modal
// const myModalEl = document.getElementById("updateModal");

// myModalEl.addEventListener("show.bs.modal", async (event) => {
//   debugger;
//   const id = event.target.getAttribute("data-id");
//   const data = await fetch(`/api/destination/${id}`);
//   const results = await data.json();
//   const { title, location, description, imageUrl } = results.data;

//   document.querySelector("input#update-title").value = title;
//   document.querySelector("input#update-location").value = location;
//   document.querySelector("textarea#update-description").value = description;
//   document.querySelector("input#update-imageUrl").value = imageUrl;
// });

const updateBtn = document.querySelectorAll(".update");

updateBtn?.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const idx = e.target.getAttribute("data-entity-index");
    debugger;

    const title = document.querySelectorAll(".update-title")[idx].value;
    const location = document.querySelectorAll(".update-location")[idx].value;
    const description = document.querySelectorAll(".update-description")[idx]
      .value;
    const imageUrl = document.querySelectorAll(".update-imageUrl")[idx].value;

    debugger;

    fetch(`/api/destination/update/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, location, description, imageUrl }),
    })
      .then((res) => {
        debugger;
        if (res.ok) return res.json();
      })
      .then((response) => {
        debugger;
        window.location.reload(true);
      });
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

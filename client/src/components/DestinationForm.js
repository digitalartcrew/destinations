import React from "react";

const DestinationForm = () => {
  return (
    <form id="destination-form" name="destinationForm">
      <div class="form-group">
        <label for="name">Destination Name</label>
        <input
          type="input"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter the name of the destination"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="input"
          class="form-control"
          id="location"
          aria-describedby="emailHelp"
          placeholder="Where is it located?"
        />
      </div>
      <div class="form-group">
        <label for="imageUrl">Photo</label>
        <input
          type="input"
          class="form-control"
          id="imageUrl"
          aria-describedby="emailHelp"
          placeholder="Enter an image url of the place"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="input"
          class="form-control"
          id="description"
          aria-describedby="emailHelp"
          placeholder="Enter a description"
        />
      </div>
      <button type="submit" class="btn btn-primary" id="create-button">
        Add to list
      </button>
    </form>
  );
};

export default DestinationForm;

import React from "react";

const EntityCard = (props) => {
  return (
    <div className="card" style={{ width: "15rem", height: "fit-content" }}>
      <img
        styles={{ height: "250px" }}
        className="card-img-top"
        alt={props.title}
        src={props.imageUrl}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
        <p className="card-text">{props.description}</p>
        <div className="buttons_container">
          <button
            data-bs-toggle="modal"
            data-bs-target={props.updateModalId}
            className="btn btn-warning"
          >
            Update
          </button>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={props.deleteModalId}
          >
            Delete
          </button>
          <div
            className="modal fade"
            id={props.deleteModalId}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Are you sure you would like to delete?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    data-id={props.id}
                    type="button"
                    className="btn btn-primary delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            data-id={props.id}
            id={props.updateModalId}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Update
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form id="updateForm">
                    <div className="form-group">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        className="form-control update-title"
                        aria-describedby="title"
                        placeholder=""
                      />
                    </div>

                    <div className="form-group">
                      <label for="location">Location</label>
                      <input
                        type="text"
                        className="form-control update-location"
                        aria-describedby="location"
                        placeholder=""
                      />
                    </div>

                    <div className="form-group">
                      <label for="description">Description</label>
                      <textarea
                        type="text"
                        className="form-control update-description"
                        aria-describedby="description"
                        placeholder=""
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label for="imageUrl">Image Url</label>
                      <input
                        type="text"
                        className="form-control update-imageUrl"
                        aria-describedby="imageUrl"
                        placeholder=""
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    data-id={props.id}
                    data-entity-index={props.entityIndex}
                    type="button"
                    className="btn btn-primary update"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;

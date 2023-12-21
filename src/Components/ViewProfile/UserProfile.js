import React, { useState } from "react";
import { Form } from "react-bootstrap";
import StarRating from "./StarRating";
import EditServices from "./EditServices";
import "./UserProfile.css";
import LocationSearchbar from "../common/searchBars/LocationShearchbarFolder/LocationShearchbar";

function UserProfile({ user }) {
  const [isEditing, setEditing] = useState(false);
  const [editedServices, setEditedServices] = useState(user.services);
  const [editedLocation, setEditedLocation] = useState(user.location);
  const [avatar, setAvatar] = useState(null); // Added state for avatar image

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveServices = (updatedServices) => {
    setEditedServices(updatedServices);
    setEditing(false);
  };

  const handleLocationChange = (location) => {
    setEditedLocation(location);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const avatarSrc = avatar
    ? URL.createObjectURL(avatar)
    : "https://bootdey.com/img/Content/avatar/avatar6.png";

  return (
    <div
      className="custom-background"
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        className="container bootstrap snippets bootdeys"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-9">
            <form className="form-horizontal">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <img
                    src={avatarSrc}
                    className="img-circle profile-avatar"
                    alt="User avatar"
                  />
                  {isEditing && (
                    <div className="mt-3">
                      <label>Change Avatar:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">User info</h4>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Username</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        id="disabledInput"
                        value={user.username}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        id="disabledInput"
                        value={user.email}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Location</label>
                      <div className="col-sm-10">
                        {isEditing ? (
                          <LocationSearchbar
                            onValueChange={handleLocationChange}
                          />
                        ) : (
                          <p className="form-control-static">
                            {editedLocation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Role</label>
                    <div className="col-sm-10">
                      <p className="form-control-static">{user.role}</p>
                    </div>
                  </div>
                  {!isEditing && (
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Rating</label>
                      <div className="col-sm-10">
                        <StarRating rating={user.rating} readOnly />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {user.role === "worker" && (
                <div className="panel panel-default">
                  <div className="panel-heading"></div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Services</label>
                      <div className="col-sm-10">
                        {isEditing && (
                          <EditServices
                            services={user.services}
                            initialSelectedServices={editedServices}
                            onSave={handleSaveServices}
                          />
                        )}
                        {!isEditing && (
                          <div>
                            {editedServices.map((service) => (
                              <p key={service.name}>{service.name}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Include other worker details here */}
                  </div>
                </div>
              )}

              {isEditing ? (
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

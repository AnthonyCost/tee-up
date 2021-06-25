import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGroup } from "../../store/groups";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "./DeleteGroupPrompt.css";

const EditGroupForm = () => {
  const { id } = useParams();

  const group = useSelector((state) => state.groups[id]);

  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector((state) => state.session.user);
  const currentUserId = Number(currentUser.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
    };

    await dispatch(deleteGroup(payload));

    history.push(`/groups`);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/groups`);
  };

  return (
    <div className="deleteGroup-container">
      <div className="deleteGroup-banner">
        <h1>Are you sure you want to delete {group?.groupName}?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <button className="yes-btn" type="submit">
          Yes
        </button>
        <button className="no-btn" type="button" onClick={handleCancelClick}>
          No
        </button>
      </form>
    </div>
  );
};

export default EditGroupForm;

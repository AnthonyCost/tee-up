import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGroup, grabGroup } from "../../store/groups";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "./EditGroupForm.css";

const EditGroupForm = () => {
  const { id } = useParams();

  const group = useSelector((state) => state.groups[id]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [playStyle, setPlayStyle] = useState(group.playStyle);
  const [description, setDescription] = useState(group.description);
  const [groupName, setGroupName] = useState(group.groupName);
  const [imageUrl, setImageUrl] = useState(group.imageUrl);

  const updatePlayStyle = (e) => setPlayStyle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateGroupName = (e) => setGroupName(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  const currentUser = useSelector((state) => state.session.user);
  const currentUserId = Number(currentUser.id);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      hostUserId: currentUserId,
      playStyle,
      description,
      groupName,
      imageUrl,
    };

    let updatedGroup = await dispatch(updateGroup(payload));
    if (updatedGroup) {
      dispatch(grabGroup(id));
      history.push(`/groups/${id}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/groups`);
  };

  return (
    <div className="updateGroup-container">
      <div className="updateGroup-banner">
        <h1>Edit Group</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder={group?.groupName}
          required
          value={groupName}
          onChange={updateGroupName}
        />
        <input
          type="string"
          placeholder={group?.playStyle}
          required
          value={playStyle}
          onChange={updatePlayStyle}
        />
        <input
          type="text"
          placeholder={group?.description}
          value={description}
          onChange={updateDescription}
        />
        <input
          type="string"
          placeholder={group?.imageUrl}
          value={imageUrl}
          onChange={updateImageUrl}
        />
        <button className="btn-submit" type="submit">Update Group</button>
        <button className="btn-cancel" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditGroupForm;

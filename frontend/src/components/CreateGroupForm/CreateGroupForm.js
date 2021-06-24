import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroups, createGroup } from "../../store/groups";
import { useHistory } from "react-router-dom";

// styles here
import "./CreateGroupForm.css";

const CreateGroupForm = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const history = useHistory();

  const [playStyle, setPlayStyle] = useState("");
  const [description, setDescription] = useState("");
  const [groupName, setGroupName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const updatePlayStyle = (e) => setPlayStyle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateGroupName = (e) => setGroupName(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);

  const currentUser = useSelector((state) => state.session.user);
  const currentUserId = currentUser.id;

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      hostUserId: currentUserId,
      playStyle,
      description,
      groupName,
      imageUrl,
    };

    let createdGroup = await dispatch(createGroup(payload));
    if (createdGroup) {
      history.push(`/groups/${createdGroup.id}`);
      // hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/groups`);
    // hideForm();
  };

  return (
    <div className="newGroup-container">
      <div className="newGroup-banner">
        <h1>Create a Group</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder="Name of Group"
          required
          value={groupName}
          onChange={updateGroupName}
        />
        <input
          type="string"
          placeholder="Play Style"
          required
          value={playStyle}
          onChange={updatePlayStyle}
        />
        <input
          type="text"
          placeholder="Description of group"
          value={description}
          onChange={updateDescription}
        />
        <input
          type="string"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl}
        />
        <button type="submit">Create new Group</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateGroupForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRound, grabRound } from "../../store/rounds";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "./EditGroupForm.css";

const EditGroupForm = () => {
  const { id } = useParams();

  const round = useSelector((state) => state.rounds[id]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [courseId, setCourseId] = useState(round.courseId);
  const [ruleset, setRuleSet] = useState(round.ruleset);
  const [startTime, setStartTime] = useState(round.startTime);
  const [holes, setHoles] = useState(round.holes);

  const updateCourseId = (e) => setCourseId(e.target.value);
  const updateRuleSet = (e) => setRuleSet(e.target.value);
  const updateStartTime = (e) => setStartTime(e.target.value);
  const updateHoles = (e) => setHoles(e.target.value);

  const currentGroup = useSelector((state) => state.session.id);
  const currentGroupId = Number(currentGroup.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      courseId,
      groupId: currentGroupId,
      ruleset,
      startTime,
      holes,
    };

    let updatedRound = await dispatch(updateRound(payload));
    if (updatedRound) {
      dispatch(grabRound(id));
      history.push(`/groups/${id}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/groups`);
  };

  return (
    <div className="Round-container">
      <div className="Round-banner">
        <h1>Edit Round</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder={round?.GolfCourse?.name}
          required
          value={courseId}
          onChange={updateCourseId}
        />
        <input
          type="string"
          placeholder={round?.ruleset}
          required
          value={ruleset}
          onChange={updateRuleSet}
        />
        <input
          type='date'
          placeholder={round?.startTime}
          value={startTime}
          required
          onChange={updateStartTime}
        />
        <input
          type="number"
          min= "1"
          max= "36"
          placeholder={round?.holes}
          value={holes}
          required
          onChange={updateHoles}
        />
        <button type="submit">Update Round</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditGroupForm;
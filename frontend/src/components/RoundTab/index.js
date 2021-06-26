import "RoundTab.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRounds } from "../../store/rounds";

const RoundTab = ({ round }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const groupId = useSelector((state) => {
    return state.groups[id];
  });

  useEffect(() => {
    if (groupId) {
      dispatch(getRounds(groupId));
    }
  }, [dispatch, id]);

  return (
    <div className="roundContainer">
      <div className="roundCourseContainer">
        <h2>{round?.course?.name}
        </h2>
      </div>
      <div className="roundRuleset">
        <h3>{round?.ruleset}</h3>
      </div>
      <div className="roundStartingTime">
        <h3>Start Time at: {round?.startTime}</h3>
      </div>
      <div className="roundHoles">
        <p>{round?.holes} Holes</p>
      </div>
    </div>
  );
};

export default RoundTab;

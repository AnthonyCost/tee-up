// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'
import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { grabGroup } from "../../store/groups";
import "./GroupPage.css";

// import other data here

const GroupPage = () => {
  // Declare variables from hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) => {
    return state.groups[id];
  });

  useEffect(() => {
    dispatch(grabGroup(id));
  }, [dispatch, id]);

  return (
    <div
      className="groupPageBackground"
      style={{
        backgroundImage: `url(${group?.imageUrl})`,
      }}
    >
      <div className="groupPageContainer">
        <div className="groupPageTitle">
          <h1>{group?.groupName}</h1>
        </div>
        <div className="groupPageHost">
          {console.log(group.host)}
          {console.log(group.host.username)}
          <h3>Host: {group?.host?.username}</h3>
        </div>
        <div className="groupEditInfoButton">
          <NavLink to={`/edit${group?.id}`}>
            <p>Edit Group Info</p>
          </NavLink>
        </div>
        <div className="groupPagePlaystyle">
          <h5>{group?.playStyle}</h5>
        </div>
        <div className="groupPageDescription">
          <p>{group?.description}</p>
        </div>
        <div className="upcomingRoundDiv">
          <div className="upcomingRound-Title">
            <h2>Upcoming Rounds for {group?.groupName}</h2>
          </div>
          <div className="upcomingRound-addRoundButton">
            <NavLink to={`/addRound${group?.id}`}>
              <p>Add Rounds</p>
            </NavLink>
          </div>
          <div className="upcomingRounds">
            <p>Map all upcoming round components</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;

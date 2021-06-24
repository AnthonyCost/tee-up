// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  }, [dispatch]);

  return (
    <div
      className="groupPageBackground"
      style={{
        backgroundImage: `url(${group?.imageUrl})`
      }}
    >
      <div className="groupPageContainer">
        <div className="groupPageTitle">
          <h1>{group?.groupName}</h1>
        </div>
        <div className="groupPageHost">
          <h3>Host: {group?.host.username}</h3>
        </div>
        <div className="groupPagePlaystyle">
          <h5>{group?.playStyle}</h5>
        </div>
        <div className="groupPageDescription">
          <p>{group?.description}</p>
        </div>
        <div className="groupPageCalendar">
          <p>calendar here</p>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;

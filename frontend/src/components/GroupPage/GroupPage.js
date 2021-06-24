// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { grabGroup } from "../../store/groups";
import styles from "./GroupPage.css";

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

  console.log(group);

  return (
    <div className="groupPageContainer">
      <div className="groupPageTitle">
        <h1>Group Name here</h1>
      </div>
      <div className="groupPageHost">
        <h3>hosted by here</h3>
      </div>
      <div className="groupPagePlaystyle">
        <h5>playstyle here</h5>
      </div>
      <div className="groupPageDescription">
        <p>Description here</p>
      </div>
      <div className="groupPageCalendar">
        <p>calendar here</p>
      </div>
    </div>
  );
};

export default GroupPage;

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

  return (
    <div className={styles.groupPageContainer}>
      <div className={styles.groupPageTitle}>
        <h1>{group?.groupName}</h1>
      </div>
      <div className={styles.groupPageHost}>
        <h3>Host: {group?.host.username}</h3>
      </div>
      <div className={styles.groupPagePlaystyle}>
        <h5>{group?.playStyle}</h5>
      </div>
      <div className={styles.groupPageDescription}>
        <p>{group?.description}</p>
      </div>
      <div className={styles.groupPageCalendar}>
        <p>calendar here</p>
      </div>
    </div>
  );
};

export default GroupPage;
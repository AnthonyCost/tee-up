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
  const { groupId } = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) => {
    return state.groups[groupId];
  });

  console.log(group);

  useEffect(() => {
    dispatch(grabGroup(groupId));
  }, [dispatch]);

  return (
    <div>
      <h1>Here I am!</h1>
    </div>
  );
};

export default GroupPage;

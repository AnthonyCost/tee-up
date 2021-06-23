// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGroups } from "../../store/groups";
import styles from "./GroupsContainer.module.css";
// import other data here

const GroupsContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const groups = useSelector((state) => Object.values(state.users));
  //

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>hostUserId</th>
            <th>playStyle</th>
            <th>description</th>
            <th>groupName</th>
            <tbody>
              {/* groups.map((group) => <GroupRow key={group.id} group={group} />) */}
            </tbody>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default GroupsContainer;

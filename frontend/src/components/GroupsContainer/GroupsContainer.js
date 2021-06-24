// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getGroups } from "../../store/groups";
import "./GroupsContainer.module.css";
// import GroupRow from "../GroupRow";
import GroupCard from "../GroupCard";

// import other data here

const GroupsContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const groups = useSelector((state) => Object.values(state.groups));

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div>
      <div className="addGroupBtn">
        <Link to="/groups/create">
          <p>Create Group</p>
        </Link>
      </div>
      <div className="groupContainer">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsContainer;

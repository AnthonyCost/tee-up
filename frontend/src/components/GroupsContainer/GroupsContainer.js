// Import hooks from 'react'. Which hook is meant for causing effects?
// Import hooks from 'react-redux'

import styles from "./GroupsContainer.module.css";
// import other data here

const GroupsContainer = () => {
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
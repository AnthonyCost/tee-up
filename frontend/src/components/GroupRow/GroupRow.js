const GroupRow = ({ group }) => {
  return (
    <tr>
      <td>{group.id}</td>
      <td>{group.hostUserId}</td>
      <td>{group.playStyle}</td>
      <td>{group.description}</td>
      <td>{group.groupName}</td>
      <td>
        <img
          src={
            group.imageUrl
              ? group.imageUrl
              : "https://images.unsplash.com/photo-1612672916367-a185107c8aaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          }
        />
      </td>
    </tr>
  );
};

export default GroupRow;

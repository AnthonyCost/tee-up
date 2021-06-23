const GroupRow = ({ group }) => {
  return (
    <tr>
      <td>{group.id}</td>
      <td>{group.hostUserId}</td>
      <td>{group.playStyle}</td>
      <td>{group.description}</td>
      <td>{group.groupName}</td>
      <td>
        <img src={group.imageUrl} />
      </td>
    </tr>
  );
};

export default GroupRow;

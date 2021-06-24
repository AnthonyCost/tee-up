// import styles from "./GroupCard.css";
import { NavLink } from "react-router-dom";

import "./GroupCard.css";

const GroupCard = ({ group }) => {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img
          src={
            group.imageUrl
              ? group.imageUrl
              : "https://images.unsplash.com/photo-1612672916367-a185107c8aaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          }
        />
      </div>
      <div className="cardTitle">
        <h2>{group.groupName}</h2>
      </div>
      <div className="cardSubTitle">
        <h3>Hosted by: {group.host.username}</h3>
      </div>
      <div className="cardDescription">
        <p>{group.description}</p>
      </div>
      <div className="cardBtn">
        <NavLink to={`/groups/${group.id}`}>
          <p>More Info</p>
        </NavLink>
      </div>
    </div>
  );
};

export default GroupCard;

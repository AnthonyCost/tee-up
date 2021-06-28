import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// useParams to grab groupId and then match it where groupId === group.id of selected page
// that way we only map the rounds that are assigned to the delegated group

import { getRounds } from "../../store/rounds";
import RoundTab from "../RoundTab";
import "./RoundsList.css";

const RoundsList = ({group}) => {

const currentGroup = useSelector((state) => state.session.group)

  const currGroupId = currentGroup.id
  const [roundsArray, setRoundsArray] = useState([]);

  useEffect(async () => {
      const testArray = []
      const testGroupRounds = await dispatch(getRounds(currGroupId));
      Object.values(testGroupRounds).forEach(round => {
          testArray.push(round)
      })
      setRoundsArray(testArray)
  }, [dispatch])

// From there, I'd display the groups in the actual render like this:



// Declare variables from hooks
const dispatch = useDispatch();
// const groupId = group.params.id;
// const rounds = useSelector((state) => state.group.rounds.find( group => group.id === groupId));

// useEffect(() => {
  //   dispatch(getRounds());
  // }, [dispatch]);
  
  return (
    <div>
      <div className="RoundsList">
      {roundsArray?.map((round) => (
          <RoundTab round={round}/>
      ))}
      </div>
    </div>
  );
};

export default RoundsList;

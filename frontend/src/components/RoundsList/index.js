import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// useParams to grab groupId and then match it where groupId === group.id of selected page
// that way we only map the rounds that are assigned to the delegated group

import { getRounds } from "../../store/rounds";
import "./RoundsList.css";

const RoundsList = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const rounds = useSelector((state) => Object.values(state.rounds));

  useEffect(() => {
    dispatch(getRounds());
  }, [dispatch]);

  return (
    <div>
      <div className="RoundsList">
        {rounds.map((round) => (
          <RoundTab key={round.id} round={round} />
        ))}
      </div>
    </div>
  );
};

export default RoundsList;

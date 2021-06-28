import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// useParams to grab groupId and then match it where groupId === group.id of selected page
// that way we only map the rounds that are assigned to the delegated group

import { getRounds } from "../../store/groups";
import RoundTab from "../RoundTab";
import "./RoundsList.css";

const RoundsList = () => {
const { id } = useParams();
const dispatch = useDispatch();


const [roundsArray, setRoundsArray] = useState([]);

  useEffect(async () => {
      const testArray = []
      const testGroupRounds = await dispatch(getRounds(id));
      Object.values(testGroupRounds).forEach(round => {
          testArray.push(round)
      })
      setRoundsArray(testArray)
    }, [dispatch]);

  return (
    <div>
      <div className="RoundsList">
      {roundsArray?.map((round) => (
          <RoundTab key={round.id} round={round}/>
      ))}
      </div>
    </div>
  );
};

export default RoundsList;

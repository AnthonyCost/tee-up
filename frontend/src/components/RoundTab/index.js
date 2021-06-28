import "./RoundTab.css";

const RoundTab = ({ round }) => {

console.log("RoundTab here =====>",round[0])

  return (
    <div className="roundContainer">
      <div className="roundCourseContainer">
        <h2>{round?.course?.name}
        </h2>
      </div>
      <div className="roundRuleset">
        <h3>{round?.ruleset}</h3>
      </div>
      <div className="roundStartingTime">
        <h3>Start Time at: {round?.startTime}</h3>
      </div>
      <div className="roundHoles">
        <p>{round?.holes} Holes</p>
      </div>
    </div>
  );
};

export default RoundTab;

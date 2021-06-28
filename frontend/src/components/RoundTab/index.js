import "./RoundTab.css";

const RoundTab = ({ round }) => {

  return (
    <div className="roundContainer">
      <div className="roundCourseContainer">
        <h2>{round?.GolfCourse?.name}
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

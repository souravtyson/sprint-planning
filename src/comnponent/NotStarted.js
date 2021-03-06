import React, { useState, useEffect } from "react";
import Card from "./common/Card";
import Details from "./common/Details";
import { story } from "../mocky-data/stories";

const NotStarted = () => {
  const [notStarted, setNotStarted] = useState(story);
  const [showDetails, setShowDetails] = useState(false);
  const [indiStory, setIndiStory] = useState({});
  useEffect(() => {
    console.log(notStarted);
    setShowDetails(false);
  }, [notStarted]);

  const openDialog = (story) => {
    console.log(story);
    setShowDetails(true);
    setIndiStory({ ...story });
  };

  return (
    <div>
      {notStarted
        .filter((story) => story.stage === "NotStarted")
        .map((filteredStory) => (
          <div
            key={filteredStory.name}
            onClick={() => openDialog(filteredStory)}
          >
            <Card name={filteredStory.name} />
          </div>
        ))}
      {showDetails && (
        <Details name={indiStory.name} desc={indiStory.description} />
      )}
    </div>
  );
};

export default NotStarted;

//notStarted.filter((data) => data.stage === 'NotStarted').map((m) => <Card />)

import React, { useState, useEffect } from "react";
import Card from "./common/Card";
import { story } from "../mocky-data/stories";
import Details from "./common/Details";

const InProgress = () => {
  const [inProgress, setInProgress] = useState(story);
  const [showDetails, setShowDetails] = useState(false);
  const [indiStory, setIndiStory] = useState({});

  useEffect(() => {
    setShowDetails(false);
  }, []);

  const openDialog = (story) => {
    console.log(story);
    setShowDetails(true);
    setIndiStory({ ...story });
  };

  return (
    <div>
      {inProgress
        .filter((story) => story.stage === "Inprogress")
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

export default InProgress;

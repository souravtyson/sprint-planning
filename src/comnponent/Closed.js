import React, { useState, useEffect } from "react";
import Card from "./common/Card";
import { story } from "../mocky-data/stories";
import Details from "./common/Details";

const Closed = () => {
  const [closed, setClosed] = useState(story);
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
      {closed
        .filter((story) => story.stage === "Closed")
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

export default Closed;

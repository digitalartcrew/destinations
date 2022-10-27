import React, { useEffect, useState } from "react";
import EntityCard from "./EntityCard";

const EntityCards = () => {
  const [destinations, setDestinations] = useState([]);
  // make data request
  useEffect(() => {
    fetch("/api/destination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  });

  return (
    <div className="row">
      {destinations.map((destination) => (
        <EntityCard title={destination.title} />
      ))}
    </div>
  );
};

export default EntityCards;

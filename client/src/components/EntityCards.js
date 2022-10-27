import React from "react";
import EntityCard from "./EntityCard";

const EntityCards = () => {
  return (
    <div className="row">
      <EntityCard
        title="Title 1"
        imageUrl="https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      />
      <EntityCard
        title="Title 1"
        imageUrl="https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      />
      <EntityCard
        title="Title 1"
        imageUrl="https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      />
    </div>
  );
};

export default EntityCards;

import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="flex gap-4 p-4">
      <Card
        title="Card Title 1"
        description="This is a description for card 1."
        image="https://via.placeholder.com/300"
      />
      <Card
        title="Card Title 2"
        description="This is a description for card 2."
        image="https://via.placeholder.com/300"
      >
        <button>Click Me</button>
      </Card>
    </div>
  );
};

export default App;

import React from "react";
import Copyright from "./Components/Copyright";
import InspirationGenerator from "./Components/InspirationGenerator.jsx";
import FancyText from "./Components/FancyText";

const App = () => {
  return (
    <div>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </div>
  );
};

export default App;

import "./App.css";

import { useState } from "react";

import MastHead from "./components/MastHead/MastHead-temp";

function App() {
  return (
    <div className="App">
      <MastHead />
      <main>
        <hgroup>
          <p className="cake">🎂</p>
          <h1>corina@exampleemail.com</h1>
        </hgroup>
        <h1>Free Bonus Print Selections</h1>
        <p>
          Swap your free bonus print selections by editing one of the available prints
          below. Monthly free bonus prints are accumulated and shipped on a seasonal
          schedule around the end of March, June, September and December. Please be sure
          that your email ( corinaagum@gmail.com ) matches your current Patreon email and
          your shipping address is up-to-date in your Patreon account.
        </p>
      </main>
    </div>
  );
}

export default App;

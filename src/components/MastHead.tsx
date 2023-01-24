import "./masthead.css";

import { FC } from "react";

export const MastHead: FC = () => {
  return (
    <>
      <div id="masthead">
        <div>
          <a href="/">Return to rosiethorns.com</a>
        </div>
        <div>
          <a href="/bonus">Go back</a>
        </div>
        <div>
          <a href="/patreon">Return to Patreon</a>
        </div>
      </div>
      <div className="deco" />
    </>
  );
};

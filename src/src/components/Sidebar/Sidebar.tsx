import React from "react";
import "./Sidebar.scss";

export type SidebarProps = {
  // types...
};

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/factions`}>Factions</a>
          </li>
		  <hr />
          <li>
            <a href={`/rosters`}>Rosters</a>
          </li>
          <li>
            <a href={`/rosters`}>Battles</a>
          </li>
          <li>
            <a href={`/campaings`}>Campaings</a>
          </li>
          <li>
            <a href={`/missions`}>Missions</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

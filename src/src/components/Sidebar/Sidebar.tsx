import React from "react";
import "./Sidebar.scss";
import { MdOutlineHome, MdOutlineStorage } from "react-icons/md";
import { NavLink } from "react-router-dom";

export type SidebarProps = {
  // types...
};

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {({ isActive }) => (
            // <span className=>Tasks</span>
            <MdOutlineHome color={isActive ? "orange" : "black"} size={24} />
          )}
        </NavLink>

        <NavLink
          to="/data"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {({ isActive }) => (
            // <span className=>Tasks</span>
            <MdOutlineStorage color={isActive ? "orange" : "black"} size={24} />
          )}
        </NavLink>
        <hr />
        {/* <ul>
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
        </ul> */}
      </nav>
    </div>
  );
};

export default Sidebar;

"use client";
import React from "react";
import "./Ploys.scss";
import { StringDescriptionParsed } from "../StringDescriptionParsed";

export type PloysProps = {
  ploys: any;
};

const Ploys: React.FC<PloysProps> = ({ ploys }) => {
  console.log(ploys);

  if (!ploys) return <div>No ploys</div>;

  return (
    <div className="ploys">
      <div className="ploys-strat">
        <h3>STRATEGIC PLOYS</h3>
        {ploys.strat.map((ploy: any) => (
          <div key={ploy.id} className="ploy-card">
            <div className="ploy-header">
              <span>{ploy.ployname}</span>
              <span>{ploy.CP}CP</span>
            </div>

            <div className="ploy-content">
              <StringDescriptionParsed description={ploy.description} />
            </div>
          </div>
        ))}
      </div>

      <div className="ploys-tac">
        <h3>TACTICAL PLOYS</h3>
        {ploys.tac.map((ploy: any) => (
          <div key={ploy.id} className="ploy-card">
            <div className="ploy-header">
              <span>{ploy.ployname}</span>
              <span>{ploy.CP}CP</span>
            </div>

            <div className="ploy-content">
              <StringDescriptionParsed description={ploy.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ploys;

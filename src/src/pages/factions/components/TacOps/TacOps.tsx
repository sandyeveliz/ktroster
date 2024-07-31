"use client";
import React from "react";
import "./TacOps.scss";
import { StringDescriptionParsed } from "../StringDescriptionParsed";

export type TacOpsProps = {
  tacops: any;
};

const TacOps: React.FC<TacOpsProps> = ({ tacops }) => {
  console.log(tacops);

  if (!tacops) return <div>No tacops</div>;

  return (
    <div className="tacops">
      <h3>TAC OPS</h3>
      {tacops.map((tacop: any) => (
        <div key={tacop.id} className="tacop-card">
          <div className="tacop-header">
            <span>{tacop.title}</span>
          </div>

          <div className="tacop-content">
            <div className="tacop-subtitle">
              <span>
                {tacop.archetype} - Faction Tac Op {tacop.tacopseq}
              </span>
            </div>
            <StringDescriptionParsed description={tacop.description} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TacOps;

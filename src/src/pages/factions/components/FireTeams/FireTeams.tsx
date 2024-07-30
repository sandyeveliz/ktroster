"use client";
import React from "react";
import parse from "html-react-parser";
import "./FireTeams.scss";

export type FireTeamsProps = {
  fireteams: any;
};

const shapesMap: any = {
  CIRCLE: <div className="shape circle"></div>,
  TRIANGLE: <div className="shape triangle"></div>,
  PENTAGON: <div className="shape pentagon"></div>,
  SQUARE: <div className="shape square"></div>,
};

const FireTeams: React.FC<FireTeamsProps> = ({ fireteams }) => {
  const selectFireTeam = (killteam: any) => {
    console.log(killteam);
  };
  const inputString = "3[CIRCLE]";
  const renderShapes = (input: string) => {
    const regex = /\[(CIRCLE|TRIANGLE|PENTAGON|SQUARE)\]/g;
    const parts = input.split(regex);

    return parts.map((part: any, index) => {
      if (shapesMap[part]) {
        return <React.Fragment key={index}>{shapesMap[part]}</React.Fragment>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fireteams">
      {fireteams.map((fireteam: any, index: number) => (
        <div key={index} onClick={() => selectFireTeam(fireteam)}>
          <div>
            <h4>{fireteam.fireteamname}</h4>

            <h5>Composition</h5>
            <div>{parse(fireteam.fireteamcomp)}</div>

            <h5>Operatives</h5>
            {fireteam.operatives.map((op: any, index: number) => (
              <div key={index}>
                <div className="operative">
                  <div className="op-header">
                    <div className="op-left">
                      <span className="op-name">{op.opname}</span>
                      <p className="op-desc">{op.description}</p>
                    </div>
                    <div className="op-img"></div>
                    <div className="op-stats">
                      <div className="stat-header"></div>
                      <span className="stat-header">M</span>
                      <span className="stat-header">APL</span>
                      <span className="stat-header last">GA</span>

                      <div></div>
                      <span className="stat-value">
                        {renderShapes(inputString)}
                      </span>
                      <span className="stat-value">{op.APL}</span>
                      <span className="stat-value">{op.GA}</span>

                      <div className="stat-header"></div>
                      <span className="stat-header">DF</span>
                      <span className="stat-header">SV</span>
                      <span className="stat-header last">W</span>

                      <div></div>
                      <span className="stat-value">{op.DF}</span>
                      <span className="stat-value">{op.SV}</span>
                      <span className="stat-value">{op.W}</span>
                    </div>
                  </div>
                  <div className="op-content"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FireTeams;

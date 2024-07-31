"use client";
import React from "react";
import "./OperativeCard.scss";
import CircleIcon from "../../../../components/icons/CircleIcon";
import TriangleIcon from "../../../../components/icons/TriangleIcon";
import PentagonIcon from "../../../../components/icons/PentagonIcon";
import SquareIcon from "../../../../components/icons/SquareIcon";
import parse from "html-react-parser";

export type OperativeCardProps = {
  operative: any;
};

const shapesMap: any = {
  CIRCLE: <CircleIcon />,
  TRI: <TriangleIcon />,
  PENT: <PentagonIcon />,
  SQUARE: <SquareIcon />,
};

const shapesStringSvg: any = {
  CIRCLE:
    '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="black" strokeWidth="1" fill="white" /></svg>',
  TRI: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><polygon points="9,1 17,17 1,17" stroke="black" strokeWidth="1" fill="black" /></svg>',
  PENT: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><polygon points="9,1 17,7 14,17 4,17 1,7" stroke="black" strokeWidth="1" fill="red" /></svg>',
  SQUARE:
    '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="16" height="16" stroke="black" strokeWidth="1" fill="blue" /></svg>',
};

const OperativeCard: React.FC<OperativeCardProps> = ({ operative }) => {
  const renderShapes = (input: string) => {
    const regex = /\[(CIRCLE|TRI|PENT|SQUARE)\]/g;
    const parts = input.split(regex);

    return parts.map((part: any, index) => {
      if (shapesMap[part]) {
        return <React.Fragment key={index}>{shapesMap[part]}</React.Fragment>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const parseShapes = (input: string): string => {
    const regex = /\[(CIRCLE|TRI|PENT|SQUARE)\]/g;
    const parts = input.split(regex);

    return parts
      .map((part) => {
        if (shapesStringSvg[part]) {
          return shapesStringSvg[part];
        }
        return part;
      })
      .join("");
  };

  return (
    <div className="operativecard">
      <div className="operative">
        <div className="op-header">
          <div className="op-left">
            <span className="op-name">{operative.opname}</span>
            <p className="op-desc">{operative.description}</p>
          </div>
          <div className="op-img"></div>
          <div className="op-stats">
            <div className="stat-header"></div>
            <span className="stat-header">M</span>
            <span className="stat-header">APL</span>
            <span className="stat-header last">GA</span>

            <div></div>
            <span className="stat-value">{renderShapes(operative.M)}</span>
            <span className="stat-value">{operative.APL}</span>
            <span className="stat-value">{operative.GA}</span>

            <div className="stat-header"></div>
            <span className="stat-header">DF</span>
            <span className="stat-header">SV</span>
            <span className="stat-header last">W</span>

            <div></div>
            <span className="stat-value">{operative.DF}</span>
            <span className="stat-value">{operative.SV}</span>
            <span className="stat-value">{operative.W}</span>
          </div>
        </div>
        <div className="op-content">
          <div className="op-weapons">
            <div className="op-weapons-header op-content-header">
              <div></div>
              <div>weapon</div>
              <div>A</div>
              <div>BS-WS</div>
              <div>D</div>
              <div>SR</div>
              <div>!</div>
            </div>
            {/* Values */}
            {operative.weapons.map((weapon: any, index: number) => (
              <div key={index} className="op-weapons-values">
                <div>{weapon.weptype}</div>
                {weapon && weapon.profiles.length > 1 ? (
                  <div>
                    <div className="op-weapons-values-profiles-msg">
                      <div>{weapon.wepname}</div>
                      <div className="op-weapons-values-profiles-msg--desc">
                        Each time this weapon is selected to make a shooting
                        attack with, select one of the profiles below to use:
                      </div>
                    </div>
                    {weapon.profiles.map((profile: any, index: number) => (
                      <div key={index} className="op-weapons-values-profiles">
                        <div>- {profile.name}</div>
                        <div>{profile.A}</div>
                        <div>{profile.BS}</div>
                        <div>{profile.D}</div>
                        <div>{parse(parseShapes(profile.SR))}</div>
                        </div>
                    ))}
                  </div>
                ) : (
                  weapon.profiles.map((profile: any, index: number) => (
                    <div key={index} className="op-weapons-values-profiles">
                      <div>{weapon.wepname}</div>
                      <div>{profile.A}</div>
                      <div>{profile.BS}</div>
                      <div>{profile.D}</div>
                      <div>{parse(parseShapes(profile.SR))}</div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
          <div className="op-abilities">
            <div className="op-content-header">
              <span>Abilities</span>
            </div>
            {operative.abilities.map((ability: any, index: number) => (
              <div key={index} className="op-content-value">
                <div>
                  <b>{ability.title}: </b>
                  <span className="description">
                    {parse(parseShapes(ability.description))}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="op-actions">
            <div className="op-content-header">
              <span>Unique Actions</span>
            </div>
            {operative.uniqueactions.map((action: any, index: number) => (
              <div key={index} className="op-content-value">
                <div>
                  <b>{action.title}: </b>
                  <span className="description">
                    {parse(parseShapes(action.description))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperativeCard;

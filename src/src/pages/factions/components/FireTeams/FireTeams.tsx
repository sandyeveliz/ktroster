"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./FireTeams.scss";
import { OperativeCard } from "../OperativeCard";
import { SelectButton } from "primereact/selectbutton";

export type FireTeamsProps = {
  fireteams: any;
};

let fireteamSelect: any = [];

const FireTeams: React.FC<FireTeamsProps> = ({ fireteams }) => {
  const [fireteamSelected, setFireteamSelected] = useState(null);
  useEffect(() => {
    fireteamSelect = fireteams.map((fireteam: any) => {
      return { name: fireteam.fireteamname, value: fireteam.fireteamid };
    });

    setFireteamSelected(fireteamSelect[0].value);
  }, []);

  function selectFireTeam(value: any): any {
    setFireteamSelected(value);
  }
  return (
    <div className="fireteams">
      {fireteams.length === 0 && <p>No fireteams found</p>}
      {fireteams.length > 1 && (
        <div className="fireteams-select">
          <SelectButton
            value={fireteamSelected}
            onChange={(e) => selectFireTeam(e.value)}
            options={fireteamSelect}
            optionLabel="name"
            optionDisabled="disabled"
          />
        </div>
      )}

      {fireteams.map((fireteam: any, index: number) => (
        <div key={index}>
          {fireteamSelected === fireteam.fireteamid && (
            <>
              <div>
                {fireteams.length > 1 && (
                  <div>
                    <h4>Operatives</h4>
                    <div className="description">
                      {parse(fireteam.fireteamcomp)}
                    </div>
                    <hr />
                    <br />
                  </div>
                )}
                {fireteam.operatives.map((op: any, index: number) => (
                  <div key={index} className="operatives">
                    <OperativeCard operative={op} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FireTeams;

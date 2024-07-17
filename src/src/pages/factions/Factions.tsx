import { useEffect, useState } from "react";
import "./factions.scss";
import { getFactions, getKillteam } from "./services/factions.service";
import { TabMenu } from "primereact/tabmenu";

function Factions() {
  const items = [
    { label: "Fireteams", icon: "pi pi-home" },
    { label: "Ploys", icon: "pi pi-chart-line" },
    { label: "Tacops", icon: "pi pi-list" },
    // { label: "Equipments", icon: "pi pi-inbox" },
  ];

  const [factions, setFactions] = useState([]);
  const [killTeamSelected, setKillTeamSelected] = useState(null);

  useEffect(() => {
    getFactions().then((data: any) => {
      if (data) {
        setFactions(data);
      }
    });
  }, []);

  function selectKillTeam(killTeam: any) {
    getKillteam(killTeam.id).then((data: any) => {
      console.log("k", data);
      if (data) {
        setKillTeamSelected(data);
      }
    });
  }

  if (!factions) return <div>Loading...</div>;

  return (
    <div>
      <div className="container">
        <div className="factions">
          {factions.map((faction: any) => (
            <>
              <div key={faction.id}>
                <h4>{faction.factionname}</h4>
                {/* <p>{faction.description}</p> */}
              </div>
              <hr />
              {faction.killteams.map((killteam: any) => (
                <div key={killteam.id} onClick={() => selectKillTeam(killteam)}>
                  <h5>{killteam.name}</h5>
                </div>
              ))}
            </>
          ))}
        </div>
        <div className="killteam">
          <h5>Killteam</h5>
          {killTeamSelected ? (
            <div>
              <TabMenu model={items} />
            </div>
          ) : (
            <div>No killteam selected</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Factions;

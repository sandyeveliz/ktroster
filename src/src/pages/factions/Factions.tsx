import { useEffect, useState } from "react";
import "./factions.scss";
import { getFactions, getKillteam } from "./services/factions.service";
import { TabMenu } from "primereact/tabmenu";
import { FireTeams } from "./components/FireTeams";
import parse from "html-react-parser";
import { Ploys } from "./components/Ploys";
import { TacOps } from "./components/TacOps";

function Factions() {
  const items = [
    { label: "Fireteams", icon: "pi pi-home" },
    { label: "Ploys", icon: "pi pi-chart-line" },
    { label: "Tacops", icon: "pi pi-list" },
    // { label: "Habilities", icon: "pi pi-inbox" },
    // { label: "Equipments", icon: "pi pi-inbox" },
  ];

  const [factions, setFactions] = useState([]);
  const [factionSelected, setFactionSelected] = useState<any>(null);
  const [killTeamSelected, setKillTeamSelected] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loadingFactions, setLoadingFactions] = useState(true);
  const [loadingKillteam, setLoadingKillteam] = useState(false);

  useEffect(() => {
    getFactions().then((data: any) => {
      if (data) {
        setFactions(data);
        setLoadingFactions(false);
      }
    });
  }, []);

  function selectKillTeam(killTeam: any, faction: any) {
    if (!killTeam) return;
    if (killTeam.id === killTeamSelected?.id) {
      setKillTeamSelected(null);
      setFactionSelected(null);
      return;
    }

    setFactionSelected(faction);
    setLoadingKillteam(true);
    getKillteam(killTeam.id).then((data: any) => {
      if (data) {
        console.log(data);
        setKillTeamSelected(data);
        setLoadingKillteam(false);
      }
    });
  }

  if (!factions) return <div>Loading...</div>;

  function ActiveTab({ activeIndex }: any) {
    if (activeIndex === 0) {
      return (
        <div>
          <FireTeams fireteams={killTeamSelected.fireteams} />
        </div>
      );
    }

    if (activeIndex === 1) {
      return (
        <div>
          <Ploys ploys={killTeamSelected.ploys} />
        </div>
      );
    }

    if (activeIndex === 2) {
      return (
        <div>
          <TacOps tacops={killTeamSelected.tacops} />
        </div>
      );
    }

    return <div>No active Tab</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="factions">
          <h3>Killteams</h3>
          {loadingFactions ? (
            <div>Loading...</div>
          ) : (
            <>
              {factions.map((faction: any) => (
                <div className="faction" key={faction.id}>
                  <div>
                    <h4>{faction.factionname}</h4>
                    {/* <p>{faction.description}</p> */}
                  </div>
                  <hr />
                  {faction.killteams.map((killteam: any) => (
                    <div
                      key={killteam.id}
                      onClick={() => selectKillTeam(killteam, faction)}
                      className={
                        "killteams" +
                        (killteam?.id === killTeamSelected?.id ? " active" : "")
                      }
                    >
                      <span>{killteam.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="killteam">
          {loadingKillteam ? (
            <div>Loading...</div>
          ) : (
            <>
              {killTeamSelected ? (
                <div>
                  <h3>
                    {factionSelected.factionname} -{" "}
                    {killTeamSelected.killteamname}
                  </h3>
                  <div className="description">
                    {parse(killTeamSelected.description)}
                  </div>

                  <h4>Composition</h4>
                  <div className="description">
                    {parse(killTeamSelected.killteamcomp)}
                  </div>
                </div>
              ) : (
                <h3>No killteam selected</h3>
              )}
              {killTeamSelected ? (
                <div>
                  <TabMenu
                    model={items}
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                  />
                  <ActiveTab activeIndex={activeIndex} />
                </div>
              ) : (
                <div>No killteam selected</div>
              )}
            </>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Factions;

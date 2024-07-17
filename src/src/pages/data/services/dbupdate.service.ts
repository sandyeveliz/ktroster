import {
  collection,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "../../../../firebase-config";

async function uploadKTData(data: any[]) {
  // console.log("uploadKTData", data);
  const factions: any = [];
  const killteams: any = [];

  const batch = writeBatch(db);

  data.forEach((faction: any) => {
    
    faction.killteams.forEach((killteam: any) => {
      const killTeamId = doc(collection(db, "killteams")).id;
      const killteamRef = doc(db, "killteams", killTeamId);
      const cleanKillteam = { ...killteam };
      delete cleanKillteam.factionid;
      delete cleanKillteam.customkeyword;
      killteams.push({ factionId: factionId, ...cleanKillteam });
      batch.set(killteamRef, { factionId: factionId, ...cleanKillteam });
      killteam.facionId = factionId;
      killteam.id = killTeamId;
    });
    

    const factionId = doc(collection(db, "factions")).id;
    const factionRef = doc(db, "factions", factionId);
    const factionClean = { ...faction };
    delete factionClean.seq;
    factionClean.killteams = factionClean.killteams.map((killTeam: any) => {
      return { id: killTeam.id, name: killTeam.killteamname };
    });

    factions.push(factionClean);
    batch.set(factionRef, factionClean);
  });

  console.log("fac", factions);
  console.log("kat", killteams);
  // batch.commit();
}

export { uploadKTData };

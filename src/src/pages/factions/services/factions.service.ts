import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "../../../../firebase-config";

async function getFactions(): Promise<any> {
  const q = query(collection(db, "factions"));

  // Get a document, forcing the SDK to fetch from the offline cache.
  try {
    const querySnapshot = await getDocs(q);
    const docs: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      docs.push({ id: doc.id, ...doc.data() });
    });

    return docs;
  } catch (e) {
    console.log("Error getting documents:", e);
  }
}

async function getKillteams(): Promise<any> {
  const q = query(collection(db, "killteams"));

  // Get a document, forcing the SDK to fetch from the offline cache.
  try {
    const querySnapshot = await getDocs(q);
    const docs: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      docs.push({ id: doc.id, ...doc.data() });
    });

    return docs;
  } catch (e) {
    console.log("Error getting documents:", e);
  }
}

async function getKillteam(id: string): Promise<any> {
  const docRef = doc(db, "killteams", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {id: docSnap.id, ...docSnap.data()};
    }
  } catch (e) {
    console.log("Error getting documents:", e);
  }
}

export { getFactions, getKillteams, getKillteam };

import { Octokit } from "@octokit/core";
import axios from "axios";
import { parseString } from "xml2js";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

async function getRepoFiles(owner: string, repo: string) {
  try {
    const response = await octokit.request(
      "GET /repos/BSData/wh40k-killteam/contents",
      {
        owner,
        repo,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching repo files:", error);
    return [];
  }
}

async function getRepoFile(url: string) {
  return axios
    .get(url)
    .then(async (response: any) => {
      // setXmlData(response.data);
      const jsonData = await convertXmlToJson(response.data);
      
      const filteredData = await filterAndMapData(jsonData);

      // console.log(filteredData);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

const filterAndMapData = (data: any) => {
  try {
    if (!data.catalogue) {
      throw new Error("Data was not a catalogue");
    }

    if (!data.catalogue.sharedSelectionEntries) {
      throw new Error("Data was not a catalogue with sharedSelectionEntries");
    }

    const filteredData = {
      units: [],
      weapons: [],
      techs: [],
      abilities: [],
    }
    const units: any[] = [];
    // Filter and map data
    console.log(data.catalogue);
    data.catalogue.sharedSelectionEntries[0].selectionEntry.forEach(
      (selectionEntry:any) => {
        const entry = selectionEntry.$;
        if(!entry) return;
        console.log(entry.type);
        
        if(entry.type === "model") {
          units.push(entry.name);
        }
        // if(entry.unit)
        // units.push(entry);
      }
    );
    console.log(units);
    
    return filteredData;
  } catch (err) {
    throw new Error("Error filtering and mapping data: " + err);
  }
};

const convertXmlToJson = (xml: any) => {
  try {
    let jsonData: any;

    parseString(xml, (err: any, result: any) => {
      if (err) {
        // console.log(err);
      } else {
        // console.log(result);
        jsonData = result;
      }
    });
    return jsonData;
  } catch (error) {
    throw new Error("Error converting XML to JSON: " + error);
  }
};

export { getRepoFiles, getRepoFile };

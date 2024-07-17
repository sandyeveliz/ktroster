import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { uploadKTData } from "../../services/dbupdate.service";
import "./ImportFile.scss";
export type ImportFileProps = {
  // types...
};

const ImportFile: React.FC<ImportFileProps> = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // https://github.com/vjosset/killteamjson
    fetch("src/assets/json/kt.data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const uploadData = () => {
    uploadKTData(data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="importfile-title">
        <h1>JSON Data</h1>
        <div>
          <Button label="upload" size="small" onClick={uploadData} />
        </div>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {data.map((faction: any, fi: any) => (
        <div key={fi}>
          <h4>{faction.factionname}</h4>
          {faction.killteams.map((killteam: any, ki: any) => (
            <div key={ki}>{killteam.killteamname}</div>
          ))}
          {fi < data.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default ImportFile;

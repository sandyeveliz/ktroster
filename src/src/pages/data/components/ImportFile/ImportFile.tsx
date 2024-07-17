import React, { useEffect, useState } from "react";

export type ImportFileProps = {
  // types...
};

const ImportFile: React.FC<ImportFileProps> = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // https://github.com/vjosset/killteamjson
    fetch("src/assets/kt.data.json")
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>JSON Data</h1>
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

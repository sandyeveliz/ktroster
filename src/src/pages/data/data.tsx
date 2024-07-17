import { useState } from "react";
import "./data.scss";
import { createContext } from "react";
import ImportFile from "./components/ImportFile/ImportFile";

export const DataPageContext = createContext<any>({});

function Data() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <>
      <DataPageContext.Provider value={{ selectedFile, setSelectedFile }}>
        <div className="data-container">
            <ImportFile />
        </div>
      </DataPageContext.Provider>
    </>
  );
}

export default Data;

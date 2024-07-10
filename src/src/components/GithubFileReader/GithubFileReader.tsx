"use client";
import "./GithubFileReader.scss";
import React, { useState } from "react";
import xml2js from "xml2js";

export type GithubFileReaderProps = {
  // types...
};

const GithubFileReader: React.FC<GithubFileReaderProps> = ({}) => {
  const [jsonResult, setJsonResult] = useState(null);
  const [error, setError] = useState<any>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const content = e.target.result;
        convertXmlToJson(content);
      };
      reader.readAsText(file);
    }
  };

  const convertXmlToJson = (xmlContent: any) => {
    const parser = new xml2js.Parser();
    parser.parseString(xmlContent, (err: any, result: any) => {
      if (err) {
        setError(err);
        setJsonResult(null);
      } else {
        setJsonResult(result);
        setError(null);
      }
    });
  };

  return (
    <div>
      <h1>Convert .cat File to JSON</h1>
      <input type="file" accept=".cat" onChange={handleFileChange} />
      {error && <p>Error: {error.message}</p>}
      {jsonResult && <pre>{JSON.stringify(jsonResult, null, 2)}</pre>}
    </div>
  );
};

export default GithubFileReader;

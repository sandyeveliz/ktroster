"use client";
import React from "react";
import "./GitHubList.scss";
import { useEffect, useState } from "react";
import { getRepoFiles } from "../../services/github.service";

export type GitHubListProps = {
  // types...
};

const GitHubList: React.FC<GitHubListProps> = ({}) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getRepoFiles("owner", "repo").then((data) => {
      setFiles(data);
    });
  }, []);

  const showFile = (file: any, i: any) => {
    console.log(file);
    console.log(i);

    // window.open(`/file/${file.path}`, '_blank'); // Abre en una nueva pestaña
    // // Si estás usando React Router puedes navegar usando history.push('/file/${file.path}')
  };

  return (
    <div>
      <h1>Files in Repository</h1>
      <ul>
        {files.map((file: any, index) => (
          <li onClick={() => showFile(file, index)} key={file.name}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
  return <div className="githublist">GitHubList works!</div>;
};

export default GitHubList;

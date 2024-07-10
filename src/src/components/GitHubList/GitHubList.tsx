"use client";
import React from "react";
import "./GitHubList.scss";
import { useEffect, useState } from 'react';
import { getRepoFiles } from '../../services/github.service';

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

  return (
    <div>
      <h1>Files in Repository</h1>
      <ul>
        {files.map((file: any) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
  return <div className="githublist">GitHubList works!</div>;
};

export default GitHubList;

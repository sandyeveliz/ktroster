"use client";
import React from "react";
import "./TacOps.scss";

export type TacOpsProps = {
  tacops: any;
};

const TacOps: React.FC<TacOpsProps> = ({ tacops }) => {
  console.log(tacops);

  if (!tacops) return <div>No tacops</div>;

  return <div className="tacops">TacOps works!</div>;
};

export default TacOps;

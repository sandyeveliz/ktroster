"use client";
import React from "react";
import "./StringDescriptionParsed.scss";
import parse from "html-react-parser";

export type StringDescriptionParsedProps = {
  description: string;
};

const shapesStringSvg: any = {
  CIRCLE:
    '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="black" strokeWidth="1" fill="white" /></svg>',
  TRI: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><polygon points="9,1 17,17 1,17" stroke="black" strokeWidth="1" fill="black" /></svg>',
  PENT: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><polygon points="9,1 17,7 14,17 4,17 1,7" stroke="black" strokeWidth="1" fill="red" /></svg>',
  SQUARE:
    '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="16" height="16" stroke="black" strokeWidth="1" fill="blue" /></svg>',
};

const StringDescriptionParsed: React.FC<StringDescriptionParsedProps> = ({
  description,
}) => {
  const parseShapes = (input: string): string => {
    const regex = /\[(CIRCLE|TRI|PENT|SQUARE)\]/g;
    const parts = input.split(regex);

    return parts
      .map((part) => {
        if (shapesStringSvg[part]) {
          return shapesStringSvg[part];
        }
        return part;
      })
      .join("");
  };
  return <div className="stringdescriptionparsed">{parse(parseShapes(description))}</div>;
};

export default StringDescriptionParsed;

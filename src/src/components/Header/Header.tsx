import React from "react";
import "./Header.scss";
import { Button } from "primereact/button";

export type HeaderProps = {
  // types...
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="header">
      Header works!
      <div>
        <Button icon="pi pi-user" rounded severity="info" aria-label="User" />
      </div>
    </div>
  );
};

export default Header;

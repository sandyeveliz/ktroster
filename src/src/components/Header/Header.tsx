import React from "react";
import "./Header.scss";
import { Button } from "primereact/button";
import { useAuth } from "../../context/AuthContext";

export type HeaderProps = {
  // types...
};

const Header: React.FC<HeaderProps> = ({}) => {
  const { user, signInWithGoogle, signOutUser } = useAuth();
  return (
    <div className="header">
      KT Companion
      {!user && (
        <div>
          <Button label="Login" onClick={signInWithGoogle} />
        </div>
      )}
      {user && (
        <div className="user-info">
          <span>{user.displayName}</span>
          <Button label="Logout" severity="danger" onClick={signOutUser} />
        </div>
      )}
    </div>
  );
};

export default Header;

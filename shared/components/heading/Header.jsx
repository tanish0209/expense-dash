import React from "react";
import { UserRound } from "lucide-react";
import "./header.css";

export const Header = () => {
  return (
    <div className="nav">
      <div className="l" style={{ padding: 10 }}>
        <img src="images/Untitled-1-removebg-preview.png" alt="" />
      </div>
      <div className="t">
        <h4>HOME</h4>
      </div>
      <div className="user" style={{ padding: 20 }}>
        <UserRound />
      </div>
    </div>
  );
};

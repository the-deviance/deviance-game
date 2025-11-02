import React from "react";
import Card from "../Card";
import CenterCard from "./center";

export default function Board() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <Card id={0} />
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Card id={15} />
          <Card id={14} />
        </div>
        <div style={{ flex: "1" }}>
          <CenterCard />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Card id={6} />
          <Card id={7} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <Card id={13} />
        <Card id={12} />
        <Card id={11} />
        <Card id={10} />
        <Card id={9} />
        <Card id={8} />
      </div>
    </div>
  );
}

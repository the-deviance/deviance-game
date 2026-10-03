import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Card from "../Card";
import CenterCard from "./center";
import { colours } from "../../data/constants";
import useGameData from "../../utils/useGameData";
import usePropertyData from "../../utils/usePropertyData";

const TILE_IDS = Array.from({ length: 16 }, (_, i) => i);

export default function Board() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { gameData } = useGameData();
  const { propertyData } = usePropertyData();

  const selected = selectedId !== null ? propertyData?.[selectedId] : null;
  const close = () => setSelectedId(null);

  return (
    <>
      <div className="board-grid">
        {TILE_IDS.map((id) => (
          <Card key={id} id={id} onSelect={setSelectedId} />
        ))}
        <CenterCard />
      </div>

      <Modal isOpen={!!selected} toggle={close} centered>
        {selected && (
          <>
            <ModalHeader toggle={close}>{selected.name}</ModalHeader>
            <ModalBody>
              {selected.owner !== undefined ? (
                <>
                  <div>Rent: £{selected.rent}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    Owned by {gameData.players[selected.owner]?.name}
                    <span
                      style={{
                        backgroundColor: colours[selected.owner],
                        height: "14px",
                        width: "14px",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                </>
              ) : selected.price ? (
                <div>Price: £{selected.price}</div>
              ) : (
                <div>Nobody can own this square.</div>
              )}
              {selected.name === "Go" && <div>Collect £200 when you pass.</div>}
            </ModalBody>
          </>
        )}
      </Modal>
    </>
  );
}

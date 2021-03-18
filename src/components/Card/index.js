import React from "react";
import { colours } from "../../data/constants";
import useGameData from "../../utils/useGameData";
import usePropertyData from "../../utils/usePropertyData";

export default function Card({ id }) {
  const { gameData } = useGameData();
  const { propertyData } = usePropertyData();

  if (!propertyData) return null;

  const property = propertyData[id];

  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "140px",
        width: "140px",
        margin: "5px",
        color: "#ccc",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          background: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${property?.colour} 10px, ${property?.colour} 20px)`,
        }}
      ></div>
      <div
        style={{
          marginTop: "15px",
          padding: "1px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "900",
          }}
        >
          {property?.name}
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          {property?.owner !== undefined ? (
            <>
              <div>{`Rent: £${property.rent}`}</div>
              <p>Owned by {gameData.players[property.owner].name}</p>
            </>
          ) : (
            <>{property.price && <div>{`Price: £${property?.price}`}</div>}</>
          )}
          {property.name === "Go" ? <div>Collect £200</div> : null}
          {gameData.currentPlayer !== undefined && (
            <div>
              {gameData.players.map(({ position }, index) => {
                if (position === id)
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: colours[index],
                        height: "20px",
                        width: "20px",
                        borderRadius: "10px",
                        bottom: "15px",
                        left: `${30 + index * 30}px`,
                        position: "absolute",
                      }}
                    ></div>
                  );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

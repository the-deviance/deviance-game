import React from "react";
import { colours } from "../../data/constants";
import useGameData from "../../utils/useGameData";
import usePropertyData from "../../utils/usePropertyData";

interface CardProps {
  id: number;
  onSelect?: (id: number) => void;
}

export default function Card({ id, onSelect }: CardProps) {
  const { gameData } = useGameData();
  const { propertyData } = usePropertyData();

  const property = propertyData?.[id];
  if (!property) return null;

  const ownerColour =
    property.owner !== undefined ? colours[property.owner] : undefined;

  const isCurrentTile =
    gameData.players?.[gameData.currentPlayer]?.position === id;

  return (
    <div
      className={`board-tile${isCurrentTile ? " tile-current" : ""}`}
      style={{
        gridArea: `t${id}`,
        ...(ownerColour
          ? {
              borderColor: ownerColour,
              boxShadow: `0 0 10px ${ownerColour}99`,
            }
          : {}),
      }}
      onClick={() => onSelect && onSelect(id)}
    >
      <div
        className="tile-stripe"
        style={{
          background: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${property?.colour} 10px, ${property?.colour} 20px)`,
        }}
      ></div>
      <div className="tile-body">
        <div className="tile-name">{property?.name}</div>
        <div className="tile-detail">
          {property?.owner !== undefined ? (
            <>
              <div>{`Rent: £${property.rent}`}</div>
              <p>Owned by {gameData.players[property.owner]?.name}</p>
            </>
          ) : (
            <>{property.price && <div>{`Price: £${property?.price}`}</div>}</>
          )}
          {property.name === "Go" ? <div>Collect £200</div> : null}
        </div>
        {gameData.players && gameData.players.length > 0 && (
          <div>
            {gameData.players.map((player, index) => {
              if (player.position === id)
                return (
                  <div
                    key={index}
                    className="player-token"
                    style={{
                      backgroundColor: colours[index],
                      left: `calc(4px + ${index} * var(--token-step))`,
                    }}
                  ></div>
                );
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

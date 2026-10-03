import { useContext, useEffect } from "react";
import PropertyDataContext from "./PropertyDataContext";
import properties from "../data/properties";
import useGameData from "./useGameData";
import { track } from "./analytics";
import { OwnedProperty, Property } from "../types/game";

// The board in properties.ts is shared module data; owners are only ever
// written to copies so a new game always starts from a pristine board.
const freshBoard = (): OwnedProperty[] => properties.map((property) => ({ ...property }));

export default function usePropertyData() {
  const [propertyData, setPropertyData] = useContext(PropertyDataContext);

  const { gameData, deductMoney } = useGameData();

  const savePropertyData = (data: OwnedProperty[]) => {
    localStorage.setItem("propertyData", JSON.stringify(data));
    setPropertyData(data);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("propertyData");
      const data = raw ? JSON.parse(raw) : null;
      // A saved board is only valid if it still covers the whole board.
      if (Array.isArray(data) && data.length === properties.length) {
        setPropertyData(data);
        return;
      }
    } catch (error) {
      console.error("Failed to load property data:", error);
    }
    setPropertyData(freshBoard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyProperty = (property: Property) => {
    const position = gameData.players[gameData.currentPlayer].position ?? 0;
    const copyArray = [...(propertyData ?? [])];
    copyArray[position] = { ...property, owner: gameData.currentPlayer };
    savePropertyData(copyArray);
    deductMoney({ playerId: gameData.currentPlayer, amount: property.price ?? 0 });
    track("Property Purchased", { property: property.name, price: property.price ?? 0 });
  };

  const resetProperties = () => {
    localStorage.removeItem("propertyData");
    setPropertyData(freshBoard());
  };

  return {
    propertyData,
    buyProperty,
    resetProperties,
  };
}

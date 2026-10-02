import { useContext, useEffect } from "react";
import PropertyDataContext from "./PropertyDataContext";
import properties from "../data/properties";
import useGameData from "./useGameData";
import { track } from "./analytics";

// The board in properties.js is shared module data; owners are only ever
// written to copies so a new game always starts from a pristine board.
const freshBoard = () => properties.map((property) => ({ ...property }));

export default function usePropertyData() {
  const [propertyData, setPropertyData] = useContext(PropertyDataContext);

  const { gameData, deductMoney } = useGameData();

  const savePropertyData = (data) => {
    localStorage.setItem("propertyData", JSON.stringify(data));
    setPropertyData(data);
  };

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("propertyData"));
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

  const buyProperty = (property) => {
    const position = gameData.players[gameData.currentPlayer].position;
    const copyArray = [...propertyData];
    copyArray[position] = { ...property, owner: gameData.currentPlayer };
    savePropertyData(copyArray);
    deductMoney({ playerId: gameData.currentPlayer, amount: property.price });
    track("Property Purchased", { property: property.name, price: property.price });
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

import { useContext, useEffect } from "react";
import PropertyDataContext from "./PropertyDataContext";
import properties from "../data/properties";
import useGameData from "./useGameData";

export default function usePropertyData() {
  const [propertyData, setPropertyData] = useContext(PropertyDataContext);

  const { gameData, deductMoney } = useGameData();

  useEffect(() => {}, []);

  const savePropertyData = (propertyData) => {
    localStorage.setItem("propertyData", JSON.stringify(propertyData));
    setPropertyData(propertyData);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("propertyData"));
    if (data) return savePropertyData(data);
    setPropertyData(properties);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyProperty = (property) => {
    property.owner = gameData.currentPlayer;
    const copyArray = [...propertyData];
    copyArray[gameData.players[gameData.currentPlayer].position] = property;
    savePropertyData(copyArray);
    deductMoney({ playerId: gameData.currentPlayer, amount: property.price });
  };

  return {
    propertyData,
    buyProperty,
  };
}

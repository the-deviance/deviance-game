import { createContext } from "react";

const PlayerDataContext = createContext([
  {
    players: [],
  },
  () => {},
]);

export default PlayerDataContext;

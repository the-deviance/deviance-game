import { createContext, Dispatch, SetStateAction } from "react";
import properties from "../data/properties";
import { OwnedProperty } from "../types/game";

export type PropertyDataState = [
  OwnedProperty[] | undefined,
  Dispatch<SetStateAction<OwnedProperty[] | undefined>>
];

const PropertyDataContext = createContext<PropertyDataState>([properties, () => {}]);

export default PropertyDataContext;

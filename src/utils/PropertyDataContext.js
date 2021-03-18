import { createContext } from "react";
import properties from "../data/properties";

const PropertyDataContext = createContext([properties, () => {}]);

export default PropertyDataContext;

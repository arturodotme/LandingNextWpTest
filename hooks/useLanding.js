import { useContext } from "react";
import LandingContext from "../context/LandingProvider";

const useLanding = () => {
    return useContext(LandingContext);
}

export default useLanding;
import { useContext } from "react";
import WordpressContext from "../context/WordpressProvider";

const useWpProvider = () => {
    return useContext(WordpressContext);
}

export default useWpProvider;
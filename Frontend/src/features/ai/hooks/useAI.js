import { useContext } from "react";
import { AIContext } from "../ai.context";

export default function useAI() {
    return useContext(AIContext);
}
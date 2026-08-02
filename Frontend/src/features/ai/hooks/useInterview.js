import { useState } from "react";
import { generateInterview } from "../services/interview.api";
import useAI from "./useAI";

export default function useInterview() {
    const [loading, setLoading] = useState(false);

    const { setReport } = useAI();

    const generate = async (payload) => {
        try {
            setLoading(true);

            const response = await generateInterview(payload);

            console.log(response);

            // Save report in context
            setReport(response.interview);

            return response;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        generate,
    };
}
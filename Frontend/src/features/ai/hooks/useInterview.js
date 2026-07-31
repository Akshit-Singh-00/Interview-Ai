import { useState } from "react";
import { generateInterview } from "../services/interview.api";

export default function useInterview() {
    const [loading, setLoading] = useState(false);

    const generate = async (payload) => {
        try {
            setLoading(true);

            const response = await generateInterview(payload);

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
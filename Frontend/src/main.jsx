import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";

import { AuthProvider } from "./features/auth/auth.context";
import { AIProvider } from "./features/ai/ai.context";

import "./style.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <AIProvider>
                <RouterProvider router={router} />
            </AIProvider>
        </AuthProvider>
    </StrictMode>
);
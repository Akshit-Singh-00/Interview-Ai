import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.scss"
import { AIProvider } from "./features/ai/ai.context";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <AIProvider>
        <RouterProvider router={router} />
    </AIProvider>
</AuthProvider>
)

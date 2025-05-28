import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; 
import { GlobalProvider } from "./components/context/Context.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter> {/* Solo un Router envolviendo la app */}
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </BrowserRouter>
    </StrictMode>
);
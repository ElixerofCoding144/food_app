import React from "react"; // Default import for React
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);

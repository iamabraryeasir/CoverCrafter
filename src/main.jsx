import { StrictMode, Profiler } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Profiler
      id="App"
      onRender={(id, phase, actualDuration) => {
        if (actualDuration > 100) {
          console.log(`Slow render detected in ${id}: ${actualDuration}ms`);
        }
      }}
    >
      <App />
    </Profiler>
  </StrictMode>
);

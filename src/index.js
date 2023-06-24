import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

serviceWorkerRegistration.register();

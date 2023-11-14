import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalContextProvider } from "./context/GlobalContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>
);

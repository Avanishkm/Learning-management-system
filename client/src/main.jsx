import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.jsx";
import { appStore } from "./app/store";
import { useLoadUserQuery } from "./features/api/authApi";
import "./index.css";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const Custom = ({ children }) => {
  const { isloading } = useLoadUserQuery();
  return <>{isloading ? <LoadingSpinner/> : <>{children}</>}</>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  </StrictMode>
);

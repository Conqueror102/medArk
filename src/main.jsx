import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { GlobalContext } from "./Global/GlobalContext.jsx";
// import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./service/store.js";
import { Provider } from "react-redux";

const persistor = persistStore(store);


createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <GlobalContext> */}
            <App />
          {/* </GlobalContext> */}
        </PersistGate>
      </Provider>
  
  </StrictMode>
);

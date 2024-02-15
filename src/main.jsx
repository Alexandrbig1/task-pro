// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <GoogleOAuthProvider clientId="306560117570-qskl06td6rgkgjgei11k17edoh0sspr5.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider> */}
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

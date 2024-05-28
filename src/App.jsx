import { Preloader } from "@/components/common";
import AppRouter from "@/routers/AppRouter";
import PropTypes from "prop-types";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ store, persistor }) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
};

export default App;

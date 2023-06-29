import React, { FC } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, persistor } from "../StoreSrc/store";

import { PersistGate } from "redux-persist/integration/react";
// As a basic setup, import your same slice reducers

export function renderWithProviders(
  ui: any,
  { preloadedState = {}, ...renderOptions } = {}
) {
  const Wrapper: FC<any> = ({ children }) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>{children}</React.StrictMode>
        </PersistGate>
      </Provider>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

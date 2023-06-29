import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../Helpers/utilsForTests";
import { editNameButton } from "../StoreSrc/slices/editNameButton";

describe("Redux store tests", () => {
  test("testing Edit Button Slice name ", () => {
    const getName = editNameButton.name;
    expect(getName).toBe("editNameButton");
  });
  test("testing Edit Button Slice initial state ", () => {
    const listSliceInit = editNameButton?.getInitialState();
    expect(listSliceInit.display).toBe(false);
  });
  test("testing Edit Button Slice reducers/actions", () => {
    const getActions = editNameButton.actions;
    expect(getActions.toggle).toBeTruthy();
    expect(getActions.Purge).toBeTruthy();
  });
});

describe("React app tests", () => {
  test("renders footer Copyright", () => {
    renderWithProviders(<App />);
    const linkElement = screen.getByText(/Copyright 2020 Argent Bank/i);
    expect(linkElement).toBeInTheDocument();
  });
});

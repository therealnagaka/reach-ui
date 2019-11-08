import "@testing-library/jest-dom/extend-expect";

jest.mock("@reach/utils", () => ({
  ...jest.requireActual("@reach/utils"),
  checkStyles: jest.fn()
}));

jest.mock("@reach/auto-id", () => ({ useId: () => "_REACH_ID_" }));

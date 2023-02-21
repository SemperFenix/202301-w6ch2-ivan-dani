import { characterReducer } from "./character.reducer";

describe("Given the characterReducer component", () => {
  describe("When we get a mock of characters", () => {
    test("Then it should return it", () => {
      const initialState = undefined;

      const action = { type: "" };

      const result = characterReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });
});

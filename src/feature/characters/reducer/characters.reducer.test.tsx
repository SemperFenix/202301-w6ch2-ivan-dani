import { CharacterStructure } from "../models/character";
import { charactersActions } from "./characters.actions.types";
import { charactersReducer } from "./characters.reducer";

describe("Given the charactersReducer", () => {
  const mockLoad = {
    type: charactersActions.load,
    payload: [{ id: "1", name: "Test1 ok" }],
  };

  const mockUpdate = {
    type: charactersActions.update,
    payload: { id: "2", name: "Test", family: "Test ok" },
  };

  const mockDefault = {
    type: "none",
    payload: { id: "3", name: "Test ok" },
  };

  const mockState = [
    { id: "1", name: "Test" },
    { id: "2", name: "Test2" },
  ] as unknown as CharacterStructure[];

  describe("When passing a load action", () => {
    test("Then it should return the action payload", () => {
      const chars = charactersReducer([], mockLoad);
      expect(chars).toEqual(mockLoad.payload);
    });
  });

  describe("When passing an update action", () => {
    test("Then it should return the updated state", () => {
      const chars = charactersReducer(mockState, mockUpdate);
      expect(chars).toEqual([mockState[0], mockUpdate.payload]);
    });
  });

  describe("When passed a non valid action", () => {
    test("Then it should return the original state", () => {
      const chars = charactersReducer(mockState, mockDefault);
      expect(chars).toEqual(mockState);
    });
  });
});

import { configureStore } from "@reduxjs/toolkit";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { CharacterStructure } from "../models/character";
import { charactersReducer } from "../reducer/characters.reducer";
import { CharactersApiRepo } from "../services/private.repo";
import { useCharacters } from "./use.characters";

describe("Given the useCharacters hook", () => {
  let element: HTMLElement;
  const mockRepo: CharactersApiRepo = {
    url: "",
    loadCharacters: jest.fn(),
    updateCharacter: jest.fn(),
  } as CharactersApiRepo;

  const mockStore = configureStore({
    reducer: { characters: charactersReducer },
  });

  const mockChar = {} as CharacterStructure;

  beforeEach(async () => {
    function TestComp() {
      const { characters, updateCharacter } = useCharacters(mockRepo);
      return (
        <>
          {JSON.stringify(characters)}
          <button
            onClick={() => {
              updateCharacter(mockChar);
            }}
          ></button>
        </>
      );
    }

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <>
          <Provider store={mockStore}>
            <TestComp></TestComp>
          </Provider>
        </>
      );
    });
  });

  describe("When", () => {
    test("Then it should", () => {
      expect(mockRepo.loadCharacters).toHaveBeenCalled();
      element = screen.getByRole("button");
      fireEvent.click(element);
      expect(mockRepo.updateCharacter).toHaveBeenCalled();
    });
  });
});

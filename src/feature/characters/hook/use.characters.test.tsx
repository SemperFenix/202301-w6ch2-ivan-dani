import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { CharacterStructure } from "../models/character";
import { CharactersApiRepo } from "../services/private.repo";
import { useCharacters } from "./use.characters";

describe("Given the useCharacters hook", () => {
  let element: HTMLElement;
  const mockRepo: CharactersApiRepo = {
    loadPhotos: jest.fn(),
    updateCharacter: jest.fn(),
  } as unknown as CharactersApiRepo;

  const mockChar = {} as CharacterStructure;

  beforeEach(() => {
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

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <>
        <Provider store={store}>
          <TestComp></TestComp>
        </Provider>
      </>
    );
  });

  describe("When", () => {
    test("Then it should", () => {
      // expect(mockRepo.loadCharacters).toHaveBeenCalled();
      element = screen.getByRole("button");
      userEvent.click(element);
      expect(mockRepo.updateCharacter).toHaveBeenCalled();
    });
  });
});

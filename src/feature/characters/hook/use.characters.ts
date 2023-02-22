import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { useEffect } from "react";
import { AppDispatch } from "../../../core/store/store";
import * as ac from "../reducer/characters.actions.creator";
import { CharactersApiRepo } from "../services/private.repo";
import { CharacterStructure } from "../models/character";

export function useCharacters(repo: CharactersApiRepo) {
  const characters = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await repo.loadCharacters();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadTasks();
  }, [dispatch, repo]);

  const updateCharacter = async (char: CharacterStructure) => {
    try {
      const finalChar = await repo.updateCharacter(char);

      dispatch(ac.updateCreator(finalChar));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    characters,
    updateCharacter,
  };
}

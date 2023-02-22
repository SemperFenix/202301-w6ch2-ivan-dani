import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { charactersActions } from "./characters.actions.types";

export const loadCreator = createAction<CharacterStructure[]>(
  charactersActions.load
);
export const updateCreator = createAction<CharacterStructure>(
  charactersActions.update
);

export const talkCreator = createAction<CharacterStructure["message"]>(
  charactersActions.talk
);

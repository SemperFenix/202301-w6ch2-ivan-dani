import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";

import * as ac from "./characters.actions.creator";

type State = {
  characters: CharacterStructure[];
  message: string;
};

const initialState: State = { characters: [], message: "" };

export const charactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (state, { payload }) => {
    return { ...state, characters: payload };
  });
  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const data = state.characters.map((item) =>
      item.id === payload.id ? payload : item
    );
    return { ...state, characters: data };
  });

  builder.addDefaultCase((state) => state);
});

import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../../../models/character";
import * as ac from "./character.action.creator";

const initialState: CharacterStructure[] = [];

export const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.isAlive === payload.isAlive ? payload : item))
  );
  builder.addDefaultCase((state) => state);
});

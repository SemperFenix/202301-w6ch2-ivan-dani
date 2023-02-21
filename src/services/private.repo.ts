/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { CharacterStructure } from "../models/character";

export interface CharactersApiRepoStructure {
  loadCharacters(): Promise<CharacterStructure[]>;
  updateCharacter(
    task: Partial<CharacterStructure>
  ): Promise<CharacterStructure>;
}

export class CharactersApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/gotCharacters";
  }

  async loadCharacters(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error HTTP:" + resp.status + "." + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }

  async updateCharacter(
    character: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const url = this.url + "/" + character.name;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok) throw new Error("Error HTTP:");
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }
}

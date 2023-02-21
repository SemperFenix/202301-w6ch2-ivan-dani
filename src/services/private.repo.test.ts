import { CharacterStructure } from "../models/character";
import { CharactersApiRepo } from "./private.repo";

describe("Given the service Private repo class", () => {
  describe("When create a new object of the class and call load", () => {
    test("Then it should be able to call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([
            { test: "test" },
          ] as unknown as CharacterStructure),
      });
      const repo = new CharactersApiRepo();
      expect(repo).toBeInstanceOf(CharactersApiRepo);
      const load = await repo.loadCharacters();
      expect(load).toEqual([{ test: "test" }]);
      const load2 = await repo.updateCharacter({
        test: "test2",
      } as unknown as CharacterStructure);
      expect(load2).toEqual([{ test: "test" }]);
    });
  });

  describe("When fetch response.ok is false", () => {
    test("Then it should be throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        resp: { status: "404", statusText: "Error 404" },
        ok: false,
        json: jest.fn().mockResolvedValue("Error HTTP:"),
      });
      const repo = new CharactersApiRepo();
      const load = await repo.loadCharacters();
      expect(load).toBe("Error HTTP:");
    });
  });
});

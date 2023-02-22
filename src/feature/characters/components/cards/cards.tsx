import { useMemo } from "react";
import { useCharacters } from "../../hook/use.characters";
import { CharacterStructure } from "../../models/character";
import { CharactersApiRepo } from "../../services/private.repo";
import { CardFront } from "../card.front/card.front";

export function Cards() {
  const repo = useMemo(() => new CharactersApiRepo(), []);
  const { characters } = useCharacters(repo);

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item: CharacterStructure) => {
            return (
              <>
                <CardFront char={item}></CardFront>
              </>
            );
          })}
        </ul>
      </div>
      <div className="comunications">
        <p className="comunications__text display-1 comunications-on comunications">
          {/* {message} */}
        </p>
        <img
          className="comunications__picture"
          src="img/no-one.jpg"
          alt="Nombre y familia del que habla"
        />
      </div>
    </>
  );
}

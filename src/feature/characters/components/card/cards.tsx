import { useMemo, useState } from "react";
import { useCharacters } from "../../hook/use.characters";
import { CharacterStructure } from "../../models/character";
import { CharactersApiRepo } from "../../services/private.repo";

export function Cards() {
  const repo = useMemo(() => new CharactersApiRepo(), []);
  const { characters, updateCharacter } = useCharacters(repo);
  let initialMessage: string = "";

  const [message, setState] = useState(initialMessage);

  const chooseMoji = (category: CharacterStructure["category"]) => {
    switch (category) {
      case "king":
        return "👑";
      case "fighter":
        return "🗡";
      case "counselor":
        return "🎓";
      case "squire":
        return "🛡";
    }
  };

  const handleDie = (item: CharacterStructure) => {
    const updatedItem = { ...item, isAlive: false };
    updateCharacter(updatedItem);
  };

  const handleTalk = (item: CharacterStructure["message"]) => {
    setState(item);
  };

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item: CharacterStructure) => (
            <li className="character col" key={item.name}>
              <div className="card character__card">
                <img
                  src={"assets/img/" + item.name.toLowerCase() + ".jpg"}
                  alt={item.name + " " + item.family}
                  className="character__picture card-img-top"
                />
                <div className="card-body">
                  <h2 className="character__name card-title h4">
                    {item.name} {item.family}
                  </h2>
                  <div className="character__info">
                    <ul className="list-unstyled">
                      <li>Edad: {item.age}</li>
                      <li>
                        Estado:
                        <i
                          className={
                            item.isAlive
                              ? "fas fa-thumbs-down inactive"
                              : "fas fa-thumbs-down"
                          }
                        ></i>
                        <i
                          className={
                            item.isAlive
                              ? "fas fa-thumbs-up"
                              : "fas fa-thumbs-up inactive"
                          }
                        ></i>
                      </li>
                    </ul>
                  </div>

                  <div className="character__overlay">
                    <ul className="list-unstyled">
                      {item.kingdomYears && (
                        <li>Años de reinado: {item.kingdomYears}</li>
                      )}
                      {item.weapon && <li>Arma: {item.weapon}</li>}
                      {item.skill && <li>Destreza: {item.skill}</li>}
                      {item.bossCounselor && (
                        <li>
                          Asesora a:{" "}
                          {item.bossCounselor.name +
                            " " +
                            item.bossCounselor.family}
                        </li>
                      )}
                      {item.bossSquire && (
                        <li>
                          Sirve a: {item.bossSquire.name}{" "}
                          {item.bossSquire.family}
                        </li>
                      )}
                      {item.servilism && <li>Peloteo: {item.servilism}</li>}
                    </ul>
                    <div className="character__actions">
                      <button
                        className="character__action btn"
                        onClick={() => {
                          handleTalk(item.message);
                        }}
                      >
                        habla
                      </button>
                      <button
                        className="character__action btn"
                        onClick={() => {
                          handleDie(item);
                        }}
                      >
                        muere
                      </button>
                    </div>
                  </div>
                </div>
                <i className="emoji">{chooseMoji(item.category)}</i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <p className="comunications__text display-1 comunications-on comunications">
          {message}
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

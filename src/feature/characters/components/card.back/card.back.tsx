import { CharacterStructure } from "../../models/character";

type CardBackProps = {
  char: CharacterStructure;
};

export function CardBack({ char }: CardBackProps) {
  return (
    <div className="character__overlay">
      <ul className="list-unstyled">
        {char.kingdomYears && <li>Años de reinado: {char.kingdomYears}</li>}
        {char.weapon && <li>Arma: {char.weapon}</li>}
        {char.skill && <li>Destreza: {char.skill}</li>}
        {char.bossCounselor && (
          <li>
            Asesora a:{" "}
            {char.bossCounselor.name + " " + char.bossCounselor.family}
          </li>
        )}
        {char.bossSquire && (
          <li>
            Sirve a: {char.bossSquire.name} {char.bossSquire.family}
          </li>
        )}
        {char.servilism && <li>Peloteo: {char.servilism}</li>}
      </ul>
      <div className="character__actions">
        <button
          className="character__action btn"
          onClick={() => {
            handleTalk(char.message);
          }}
        >
          habla
        </button>
        <button
          className="character__action btn"
          onClick={() => {
            handleDie(char);
          }}
        >
          muere
        </button>
      </div>
    </div>
  );
}

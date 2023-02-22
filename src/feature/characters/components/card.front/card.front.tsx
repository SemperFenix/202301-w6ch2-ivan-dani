import { CharacterStructure } from "../../models/character";
import { CardBack } from "../card.back/card.back";

type CardFrontProps = {
  char: CharacterStructure;
};

export function CardFront({ char }: CardFrontProps) {
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

  return (
    <li className="character col" key={char.name}>
      <div className="card character__card">
        <img
          src={"assets/img/" + char.name.toLowerCase() + ".jpg"}
          alt={char.name + " " + char.family}
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {char.name} {char.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {char.age}</li>
              <li>
                Estado:
                <i
                  className={
                    char.isAlive
                      ? "fas fa-thumbs-down inactive"
                      : "fas fa-thumbs-down"
                  }
                ></i>
                <i
                  className={
                    char.isAlive
                      ? "fas fa-thumbs-up"
                      : "fas fa-thumbs-up inactive"
                  }
                ></i>
              </li>
            </ul>
          </div>

          <CardBack char={char}></CardBack>
        </div>
        <i className="emoji">{chooseMoji(char.category)}</i>
      </div>
    </li>
  );
}

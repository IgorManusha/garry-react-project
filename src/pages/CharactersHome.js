import Harry from "../img/GarriPotter.jpg";
import Hermione from "../img/HermioneGranger.jpg";
import Ron from "../img/RonWeasley.jpg";
import Minerva from "../img/MinervaMcGonagall.jpg";
import Rubeus from "../img/RubeusHagrid.jpg";
import Neville from "../img/NevilleLongbottom.jpg";
import Ginny from "../img/GinnyWeasley.jpg";
import Sirius from "../img/SiriusBlack.jpg";
import Griffindor from "../img/Griffindor.svg";
import Slytherin from "../img/Slytherin.svg";
import Ravenclaw from "../img/Ravenclaw.svg";
import Hufflepuf from "../img/Hufflepuff.svg";
import { Link } from "react-router-dom";

const CharactersHome = () => {
  return (
    <div className="characters">
      <ul className="navList">
        <li className="navList-elem">
          <Link className="linkNav" to="/StartPage">
            Start-Page
          </Link>
        </li>
        <li className="navList-elem">
          <Link className="linkNav" to="/StudentsHogvard">
            Students Hogvard
          </Link>
        </li>
        <li className="navList-elem">
          <Link className="linkNav" to="/EmployeesHogvard">
            Employees Hogvard
          </Link>
        </li>
        <li className="navList-elem">
          <Link className="linkNav" to="/CharactersHome">
            Characters Home
          </Link>
        </li>
      </ul>
      <h1>Персонажі в</h1>
      <h1> певному будинку</h1>

      <ul className="charactersNav">
        <li className="charactersNav-elem">
          <img src={Griffindor} />
          <h2>Griffindor</h2>
        </li>
        <li className="charactersNav-elem">
          <img src={Slytherin} />
          <h2>Slytherin</h2>
        </li>
        <li className="charactersNav-elem">
          <img src={Ravenclaw} />
          <h2>Ravenclaw</h2>
        </li>
        <li className="charactersNav-elem">
          <img src={Hufflepuf} />
          <h2>Hufflepuf</h2>
        </li>
      </ul>

      <div className="container">
        <div className="containerCard">
          <img className="imgCharacters" src={Harry} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Hermione} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Ron} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Minerva} />
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Rubeus} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Neville} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Ginny} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Sirius} />
        </div>
      </div>
    </div>
  );
};

export default CharactersHome;

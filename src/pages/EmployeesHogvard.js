import Minerva from "../img/MinervaMcGonagall.jpg";
import Severus from "../img/SeverusSnape.jpg";
import Rubeus from "../img/RubeusHagrid.jpg";
import Remus from "../img/RemusLupin.jpg";
import Horace from "../img/HoraceSlughom.jpg";
import Dolores from "../img/DoloresUmbridge.jpg";
import Argus from "../img/ArgusFilch.jpg";
import Albus from "../img/AlbusDumbledore.jpg";
import { Link } from "react-router-dom";

const EmployeesHogvard = () => {
  return (
    <div className="employees">
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
      <h1 style={{ margin: "100px 0px 50px 0px" }}>Співробітники Гоґвортсу</h1>
      <div className="container">
        <div className="containerCard">
          <img className="imgCharacters" src={Minerva} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Severus} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Rubeus} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Remus} />
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Horace} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Dolores} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Argus} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Albus} />
        </div>
      </div>
    </div>
  );
};

export default EmployeesHogvard;

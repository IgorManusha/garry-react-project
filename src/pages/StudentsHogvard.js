import Harry from "../img/GarriPotter.jpg";
import Hermiona from "../img/HermioneGranger.jpg";
import Ron from "../img/RonWeasley.jpg";
import Draco from "../img/DracoMalfoy.jpg";
import Sedric from "../img/CedricDiggory.jpg";
import ChoChang from "../img/ChoChang.jpg";
import Nevil from "../img/NevilleLongbottom.jpg";
import Luna from "../img/LunaLovegood.jpg";
import { Link } from "react-router-dom";
const StudentsHogvard = () => {
  return (
    <div className="students">
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
      <h1 style={{ margin: "100px 0px 50px 0px" }}>Студенти Гоґвортсу</h1>
      <div className="container">
        <div className="containerCard">
          <img className="imgCharacters" src={Harry} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Hermiona} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Ron} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Draco} />
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Sedric} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={ChoChang} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Nevil} />
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Luna} />
        </div>
      </div>
    </div>
  );
};

export default StudentsHogvard;

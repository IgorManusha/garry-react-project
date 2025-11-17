import { Link } from "react-router-dom";
import Harry from "../img/GarriPotter.jpg";
import Hermiona from "../img/HermioneGranger.jpg";
import Ron from "../img/RonWeasley.jpg";
import Draco from "../img/DracoMalfoy.jpg";
import Sedric from "../img/CedricDiggory.jpg";
import ChoChang from "../img/ChoChang.jpg";
import Nevil from "../img/NevilleLongbottom.jpg";
import Luna from "../img/LunaLovegood.jpg";
import Arrow from "../img/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://hp-api.onrender.com/api/characters";

const StudentsHogvard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get();
      const resData = await response.data;
      setData(resData);
    };
    getData();
  }, []);

  const getPersonInfo = (index, idPerson) => {
    let person = data[index];
    const createList = (key) => {
      const createLi = document.createElement("li");
      createLi.innerHTML = `<p>${key}  :</p><span>${person[key]}</span>`;
      createLi.classList = "infoText";
      const list = document.getElementById(idPerson);
      list.append(createLi);
    };

    for (let key in person) {
      if (key !== "id" && key !== "alternate_names" && key !== "wand") {
        createList(key);
      }
    }
  };

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
          <img className="imgCharacters" src={Harry} alt="characters" />
          <div className="cardText">
            <h1>Harry Potter</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(0, "Harry")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Harry"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Hermiona} alt="characters" />
          <div className="cardText">
            <h1>Hermione Granger</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(1, "Hermiona")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Hermiona"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Ron} alt="characters" />
          <div className="cardText">
            <h1>Ron Weasley</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(2, "Ron")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Ron"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Draco} alt="characters" />
          <div className="cardText">
            <h1>Draco Malfoy</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(3, "Draco")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Draco"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Sedric} alt="characters" />
          <div className="cardText">
            <h1>Cedric Diggory</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(5, "Sedric")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Sedric"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={ChoChang} alt="characters" />
          <div className="cardText">
            <h1>Cho Chang</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(6, "ChoChang")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="ChoChang"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Nevil} alt="characters" />
          <div className="cardText">
            <h1>Neville Longbottom</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(9, "Nevil")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Nevil"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Luna} alt="characters" />
          <div className="cardText">
            <h1>Luna Lovegood</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(10, "Luna")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Luna"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsHogvard;

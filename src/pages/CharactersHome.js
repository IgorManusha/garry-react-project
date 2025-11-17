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
import Arrow from "../img/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://hp-api.onrender.com/api/characters";

const CharactersHome = () => {
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
      createLi.innerHTML = `${key} : ${person[key]}`;
      const list = document.getElementById(idPerson);
      list.append(createLi);
    };

    for (let key in person) {
      if (key !== "id" && key !== "alternate_names") {
        createList(key);
      }
    }
  };

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
          <img className="imgCharacters" src={Harry} alt="Harry" />
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
          <img className="imgCharacters" src={Hermione} alt="Hermiona" />
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
          <img className="imgCharacters" src={Ron} alt="Ron" />
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
          <img className="imgCharacters" src={Minerva} alt="Minerva" />
          <div className="cardText">
            <h1>Minerva McGonagall</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(4, "Minerva")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Minerva"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Rubeus} alt="Rubeus" />
          <div className="cardText">
            <h1>Rubeus Hagrid</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(8, "Rubeus")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Rubeus"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Neville} alt="Neville" />
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
          <img className="imgCharacters" src={Ginny} alt="Ginny" />
          <div className="cardText">
            <h1>Ginny Weasley</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(11, "Ginny")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Ginny"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <img className="imgCharacters" src={Sirius} alt="Sirius" />
          <div className="cardText">
            <h1>Sirius Black</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(12, "Sirius")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Sirius"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersHome;

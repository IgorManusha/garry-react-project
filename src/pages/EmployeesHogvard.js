import Minerva from "../img/MinervaMcGonagall.jpg";
import Severus from "../img/SeverusSnape.jpg";
import Rubeus from "../img/RubeusHagrid.jpg";
import Remus from "../img/RemusLupin.jpg";
import Horace from "../img/HoraceSlughom.jpg";
import Dolores from "../img/DoloresUmbridge.jpg";
import Argus from "../img/ArgusFilch.jpg";
import Albus from "../img/AlbusDumbledore.jpg";
import { Link } from "react-router-dom";
import Arrow from "../img/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://hp-api.onrender.com/api/characters";

const EmployeesHogvard = () => {
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
      createLi.innerHTML = `<span>${key}</span> : ${person[key]}`;
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
          <img className="imgCharacters" src={Severus} alt="Severus" />
          <div className="cardText">
            <h1>Severus Snape</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(7, "Severus")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Severus"></ul>
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
          <img className="imgCharacters" src={Remus} alt="Remus" />
          <div className="cardText">
            <h1>Remus Lupin</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(13, "Remus")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Remus"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Horace} alt="Horace" />
          <div className="cardText">
            <h1>Horace Slughorn</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(17, "Horace")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Horace"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Dolores} alt="Dolores" />
          <div className="cardText">
            <h1>Dolores Umbridge</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(19, "Dolores")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Dolores"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Argus} alt="Argus" />
          <div className="cardText">
            <h1>Argus Filch</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(26, "Argus")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Argus"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <img className="imgCharacters" src={Albus} alt="Albus" />
          <div className="cardText">
            <h1>Albus Dumbledore</h1>
            <p>The Boy Who Lived</p>
            <p>Gryffindor</p>
            <p>31-07-1980</p>
            <div
              className="cardInfo"
              onMouseOver={() => getPersonInfo(33, "Albus")}
            >
              <p>Більше інформації</p>
              <img src={Arrow} alt="img" />
              <div className="modal">
                <ul className="windowInfo" id="Albus"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesHogvard;

import studentsHogvard from "../img/hogvardStudents.jpg";
import employeesHogvard from "../img/employees.jpg";
import charactersHogvard from "../img/charactersHogvarts.jpg";
import { Link } from "react-router-dom";

const StartPageNav = ({ itemNav, setItemNav }) => {
  const linkActive = () => {
    setItemNav(true);
  };
  return (
    <div>
      <ul className="list">
        <li className="list-card">
          <img src={studentsHogvard} />
          <Link onClick={linkActive} className="button" to="/StudentsHogvard">
            Студенти Гоґвортсу
          </Link>
        </li>
        <li className="list-card">
          <img src={employeesHogvard} />
          <Link onClick={linkActive} to="/EmployeesHogvard" className="button">
            Співробітники Гоґвортсу
          </Link>
        </li>
        <li className="list-card">
          <img src={charactersHogvard} />
          <Link onClick={linkActive} to="/CharactersHome" className="button">
            Персонажі в певному будинку
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StartPageNav;

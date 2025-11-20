import { useEffect, useState } from "react";
import StartPageNav from "../components/StartPageNav";
import { Link, animateScroll as scroll } from "react-scroll";

const StartPage = ({ itemNav, setItemNav }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    setItem(false);
  }, []);

  const startPageButton = () => {
    setItem(!item);
  };

  return (
    <div>
      <div className="startPage">
        <h1>Ласкаво просимо</h1>
        <h1>у світ Гаррі Поттера</h1>

        <Link
          to="linkTry"
          spy={true}
          smooth={true}
          // offset={-70} // Смещение, например, для учета фиксированной шапки
          duration={1000} // <-- Здесь задается скорость (длительность в мс)
          className="startPageButton"
          onClick={startPageButton}
        >
          Показати всіх персонажів
        </Link>
      </div>
      <div id="menu">
        {item ? <StartPageNav itemNav={itemNav} setItemNav={setItemNav} /> : ""}
      </div>

      <div id="linkTry"></div>
    </div>
  );
};

export default StartPage;

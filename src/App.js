import "./App.css";
import StartPage from "./pages/StartPage";
import StudentsHogvard from "./pages/StudentsHogvard";
import EmployeesHogvard from "./pages/EmployeesHogvard";
import CharactersHome from "./pages/CharactersHome";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState();
  useEffect(() => {
    setItem(false);
  }, []);

  return (
    <div>
      <main>
        {item ? (
          <Routes>
            <Route
              path="/StartPage"
              element={<StartPage itemNav={item} setItemNav={setItem} />}
            />
            <Route path="/StudentsHogvard" element={<StudentsHogvard />} />
            <Route path="/EmployeesHogvard" element={<EmployeesHogvard />} />
            <Route path="/CharactersHome" element={<CharactersHome />} />
          </Routes>
        ) : (
          <StartPage itemNav={item} setItemNav={setItem} />
        )}
      </main>
    </div>
  );
}

export default App;

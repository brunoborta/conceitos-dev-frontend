import React, { useState } from "react";

import Header from "./components/Header";
import api from "./services/api";

import "./App.css";
import backgroundImage from "./assets/background.jpeg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de App",
    "Front-end web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Homepage"></Header>

      <img width={300} src={backgroundImage} />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;

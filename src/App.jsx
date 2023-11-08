import React from "react";
import './App.scss'
import Todowrapper from "./components/Todowrapper";

const App = () => {
  
  return (
    <div className="App" >
      <section className="nav">
        <button className="org"> Organização </button>
        <button className="tar">Tarefas</button>
      </section>
     <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <Todowrapper />
      

    </div>
  );
}

export default App;

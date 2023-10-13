import React, { useState } from "react";
import HeaderLandingPage from "../components/Header/HeaderLandingPage";
import BarraSearch from "../components/BarraSearch/BarraSearch";
import List from "../components/List/List.jsx";

const LandingPage = () => {
  const [todoList, setTodoList] = useState([]);

  function addList(todo) {
    if (!todo) return;
    const newTask = {
      id: Math.random(),
      task: todo,
      checked: false,
    };
    setTodoList([...todoList, newTask]);
  }

  return (
    <div>
      <HeaderLandingPage />
      <BarraSearch addList={addList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default LandingPage;

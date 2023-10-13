import React from "react";
import { Item, ListStyles } from "./list.styles";
import { useState } from "react";
const List = ({ todoList, setTodoList }) => {
  const [editedTask, setEditedTask] = useState(null);
  const [editedText, setEditedText] = useState("");
  const removeTask = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  const toggleCheck = (id, checked) => {
    const updatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !checked };
      }
      return task;
    });
    setTodoList(updatedList);
  };

  const editTask = (id, task) => {
    setEditedTask(id);
    setEditedText(task);
  };

  const saveEdit = (id) => {
    const updatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, task: editedText };
      }
      return task;
    });
    setTodoList(updatedList);
    setEditedTask(null);
  };

  return (
    <ListStyles>
      <div>
        <ul>
          {todoList.map((task) => (
            <>
              <Item checked={task.checked} key={task.id}>
                {editedTask === task.id ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  <p>{task.task}</p>
                )}
                <section>
                  {editedTask === task.id ? (
                    <>
                      <button onClick={() => saveEdit(task.id)}>
                        <i class="bx bx-save"></i>
                      </button>
                      <button onClick={() => setEditedTask(null)}>
                        <i class="bx bx-x-circle"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleCheck(task.id, task.checked)}
                      >
                        <i className="bx bx-check-circle"></i>
                      </button>
                      <button onClick={() => editTask(task.id, task.task)}>
                        <i className="bx bxs-edit"></i>
                      </button>
                      <button onClick={() => removeTask(task.id)}>
                        <i className="bx bxs-trash"></i>
                      </button>
                    </>
                  )}
                </section>
              </Item>
            </>
          ))}
        </ul>
      </div>
    </ListStyles>
  );
};

export default List;

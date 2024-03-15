import { Button } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";

/*

HW - 5

Создайте компонент TodoList для управления списком дел, применяя хук useReducer для обработки добавления новых задач, переключения статуса выполнения и очистки выполненных задач.

Основные шаги:

1) Инициализируйте начальное состояние `initialState` со списком задач `todos`.
2) Реализуйте функцию `reducer` для обработки действий 'add_todo', 'toggle_todo' и 'clear_completed' с соответствующими изменениями состояния.
3) Используйте `useReducer` для управления состоянием списка задач в компоненте TodoList.
4) Разработайте логику для добавления новой задачи в список. При добавлении задачи обнуляйте поле ввода.
5) Отобразите список задач, где каждая задача может быть отмечена как выполненная по клику на неё, что должно переключать её статус 'completed'.
6) Реализуйте кнопку 'Clear Completed', которая удаляет все выполненные задачи из списка.

Цель задания: Научиться использовать хук useReducer для управления сложными состояниями в React-приложениях, а также практиковать обработку пользовательских взаимодействий и динамическое изменение списка данных.

*/

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add_todo":
      if (!action.todo) {
        return state;
      } else
        return {
          todos: [
            ...state.todos,
            { id: Date.now(), todo: action.todo, completed: false },
          ],
        };
    case "toggle_todo":
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.thisId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state, todos: updatedTodos };
    case "clear_completed":
      return {
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      throw new Error();
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newtodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleAddBtn() {
    dispatch({ type: "add_todo", todo: newtodo });
    setNewTodo("");
  }

  function toggleTodo(idx) {
    dispatch({ type: "toggle_todo", thisId: idx });
  }

  function deleteCompletedTodos() {
    dispatch({ type: "clear_completed" });
  }

  return (
    <div style={{ marginTop: 200 }}>
      <input
        style={{ height: 30, width: 250, marginRight: 20 }}
        type="text"
        value={newtodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" color="success" onClick={handleAddBtn}>
        Add Todo
      </Button>
      <ul>
        {state.todos &&
          state.todos.map((todo, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.todo}
              </span>
            </li>
          ))}
      </ul>
      <Button
        variant="contained"
        color="success"
        onClick={deleteCompletedTodos}
      >
        Clear Completed Tasks
      </Button>
    </div>
  );
}

export default TodoList;

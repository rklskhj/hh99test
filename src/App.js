import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "react를 배워봅시다.",
    },
  ]);

  return (
    <Layout>
      <Form todos={todos} setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </Layout>
  );
}

function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

function Form({ setTodos, todos }) {
  const init = {
    title: "",
  };

  const [todo, setTodo] = useState(init);
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmit = () => {
    if (todo.title.trim() === "") return;
    setTodos([...todos, { ...todo }]);
    setTodo(init);
  };
  // console.log(todos);

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChange}
        ></input>
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </div>
  );
}

function List({ setTodos, todos }) {
  console.log(todos);
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="list-wrapper">
        {todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos}></Todo>
        ))}
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className="todo-box">
      <h2>{todo.title}</h2>
    </div>
  );
}

export default App;

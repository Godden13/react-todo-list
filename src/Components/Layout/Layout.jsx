import { useState } from 'react';
import './Layout.css'

let nextId = 0;

export default function Layout(onNameChange) {
  const [name, setName] = useState("");
  const [text, setText] = useState([]);
  const [status, setStatus] = useState(<i class="fa-solid fa-clock-rotate-left" />)

  function handleClick(e) {
    e.preventDefault()
    setText((newText) => [...newText]);
  }

  return (
    <form action="submit" className="layout" onSubmit={handleClick}>
      <div className="page_layout">
        <h3>Things ToDo</h3>
        <div className="input">
          <input
          placeholder='Add task...'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="taskInput"
          />
          <button
            className="task_btn"
            onClick={() => {
              setName("");
              text.push({
                id: nextId++,
                name: name,
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="display">
          <ul>
            {text.map((newText) => (
              <li key={newText.id} className="todo_item">
                -
                {newText.name}{" "}
                <div className="buttons">
                  <button className="done"
                  onClick={() => {
                    setStatus((status) =>
                      status === <i className="fa-solid fa-clock-rotate-left" /> ? 
                        <i className="fa-solid fa-clock-rotate-left" />
                       : 
                        <i className="fa-solid fa-check" />
                    );
                  }}
                  // onClick={(e) =>e.id === document.querySelector(".todo_item").classList.toggle('active')}
                  >
                    {status}
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      setText(text.filter((e) => e
                      .id !== newText.id));
                    }}
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
}

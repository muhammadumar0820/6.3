import { useState } from "react";
import "./index.css";

function Form() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="field"
        type="text"
        placeholder="Add a new task insdie ‘All’ category"
      />
    </form>
  );
}

export default Form;

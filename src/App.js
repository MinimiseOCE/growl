import { useState, useEffect } from "react";
import AddList from "./components/AddList";
import Sidebar from "./components/Sidebar";

function App() {
  // Create array states to manage user tasks
  const [habits, setHabits] = useState([]);
  const [todos, setTodos] = useState([]);
  const [projects, setProjects] = useState([]);

  // Function to allow user to add to array states
  const [type, setType] = useState("");

  function addList(type, name) {
    if (type == "habit") {
      if (habits) {
        setHabits([...habits, name]);
        localStorage.setItem("habits", JSON.stringify([...habits, name]));
        console.log(habits);
      } else {
        setHabits([name]);
        localStorage.setItem("habits", JSON.stringify([name]));
      }
    } else if (type == "todo") {
      if (todos) {
        setTodos([...todos, name]);
        localStorage.setItem("todos", JSON.stringify([...todos, name]));
      } else {
        setTodos([name]);
        localStorage.setItem("todos", JSON.stringify([name]));
      }
    } else {
      if (projects) {
        setProjects([...projects, name]);
        localStorage.setItem("projects", JSON.stringify([...projects, name]));
      } else {
        setProjects([name]);
        localStorage.setItem("projects", JSON.stringify([name]));
      }
    }
  }

  // State to show add list
  const [showAddList, setShowAddList] = useState(false);

  const hideAddList = (event) => {
    setShowAddList((current) => !current);
  };

  // Load local data
  useEffect(() => {
    setHabits(JSON.parse(localStorage.getItem("habits")));
    setTodos(JSON.parse(localStorage.getItem("todos")));
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }, [type]);

  return (
    <div className="w-screen h-screen">
      <Sidebar
        habits={habits}
        todos={todos}
        projects={projects}
        addList={addList}
        hideAddList={hideAddList}
        setType={setType}
      />
      {showAddList && (
        <AddList
          setShow={hideAddList}
          type={type}
          setType={setType}
          addList={addList}
        />
      )}
    </div>
  );
}

export default App;

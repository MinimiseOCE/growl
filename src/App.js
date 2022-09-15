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
      setHabits([...habits, name]);
      localStorage.setItem("habits", JSON.stringify(habits));
    }
    if (type == "todo") {
      setTodos([...todos, name]);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    if (type == "project") {
      setProjects([...projects, name]);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  // State to show add list
  const [showAddList, setShowAddList] = useState(false);

  const hideAddList = (event) => {
    setShowAddList((current) => !current);
  };

  // Add Data to local storage when data changes
  useEffect(() => {
    setHabits([localStorage.getItem("habits")]);
    setTodos([localStorage.getItem("todos")]);
    setProjects([localStorage.getItem("projects")]);
  }, []);

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
        <AddList setShow={hideAddList} type={type} setType={setType} />
      )}
    </div>
  );
}

export default App;

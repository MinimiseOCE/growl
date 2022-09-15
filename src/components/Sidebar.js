import React from "react";

export default function Sidebar(props) {
  return (
    <div className="p-4 w-1/6 h-full bg-light-green flex flex-col gap-2 overflow-scroll">
      <h1 className="text-white font-title text-4xl">Growl</h1>
      <h2 className="text-brown font-header text-2xl">Habits</h2>
      {props.habits?.map((habit) => (
        <div key={habit}>
          <h2 className="text-dark-grey font-header p-1 font-bold text-lg rounded-md hover:bg-green hover:cursor-pointer">
            {habit}
          </h2>
        </div>
      ))}
      <h3
        className="text-dark-grey font-header p-1 rounded-md hover:bg-green hover:cursor-pointer"
        onClick={() => {
          props.hideAddList();
          props.setType("habit");
        }}
      >
        + Habit List
      </h3>
      <h2 className="text-brown font-header text-2xl">To-Dos</h2>
      {props.todos?.map((todo) => (
        <div key={todo}>
          <h2 className="text-dark-grey font-header p-1 font-bold text-lg rounded-md hover:bg-green hover:cursor-pointer">
            {todo}
          </h2>
        </div>
      ))}
      <h3
        className="text-dark-grey font-header p-1 rounded-md hover:bg-green hover:cursor-pointer"
        onClick={() => {
          props.hideAddList();
          props.setType("todo");
        }}
      >
        + To-Do List
      </h3>
      <h2 className="text-brown font-header text-2xl">Projects</h2>
      {props.projects?.map((project) => (
        <div key={project}>
          <h2 className="text-dark-grey font-header p-1 font-bold text-lg rounded-md hover:bg-green hover:cursor-pointer">
            {project}
          </h2>
        </div>
      ))}
      <h3
        className="text-dark-grey font-header p-1 rounded-md hover:bg-green hover:cursor-pointer"
        onClick={() => {
          props.hideAddList();
          props.setType("project");
        }}
      >
        + Project
      </h3>
    </div>
  );
}

import React from "react";

export default function Sidebar(props) {
  return (
    <div className="p-4 w-1/6 h-full bg-light-green flex flex-col gap-4">
      <h1 className="text-white font-title text-4xl">Growl</h1>
      <h2 className="text-brown font-header text-2xl">Habits</h2>
      <h3
        className="text-dark-grey font-header p-1 rounded-md hover:bg-green hover:cursor-pointer"
        onClick={() => {
          props.hideAddList();
          props.setType("habit");
        }}
      >
        + Habit
      </h3>
      <h2 className="text-brown font-header text-2xl">To-Dos</h2>
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

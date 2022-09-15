export default function AddList(props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center backdrop-blur-md absolute left-0 top-0">
      <div className="w-64 h-64 md:w-1/6 md:h-1/3 bg-green rounded-lg border-solid border-2 border-brown flex flex-col items-center p-4 gap-6">
        <h2 className="font-body text-2xl font-bold">Add List</h2>
        <div className="flex flex-col gap-1">
          <h2>List Name</h2>
          <div className="flex gap-2 items-center">
            <input className="rounded p-2"></input>
            <button className="bg-white rounded-full text-2xl w-8 h-8 border-solid border border-brown border-opacity-70 hover:bg-dark-grey hover:border-opacity-100">
              +
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            className={
              props.type === "habit"
                ? "bg-light-green rounded border-solid border border-brown p-2 border-opacity-100 hover:bg-dark-grey"
                : "bg-white rounded border-solid border border-brown p-2 border-opacity-70 hover:bg-dark-grey hover:border-opacity-100"
            }
            onClick={() => props.setType("habit")}
          >
            Habit
          </button>
          <button
            className={
              props.type === "todo"
                ? "bg-light-green rounded border-solid border border-brown p-2 border-opacity-100 hover:bg-dark-grey"
                : "bg-white rounded border-solid border border-brown p-2 border-opacity-70 hover:bg-dark-grey hover:border-opacity-100"
            }
            onClick={() => props.setType("todo")}
          >
            To-Do
          </button>
          <button
            className={
              props.type === "project"
                ? "bg-light-green rounded border-solid border border-brown p-2 border-opacity-100 hover:bg-dark-grey"
                : "bg-white rounded border-solid border border-brown p-2 border-opacity-70 hover:bg-dark-grey hover:border-opacity-100"
            }
            onClick={() => props.setType("project")}
          >
            Project
          </button>
        </div>
        <h2
          className="hover:cursor-pointer text-dark-grey underline hover:opacity-80"
          onClick={props.setShow}
        >
          Cancel
        </h2>
      </div>
    </div>
  );
}

import { ReactElement } from "react";
import { ToDo } from "../typeDefinitons";
import useToDo from "../hooks/useToDo";
import { MyToast, confirmDelete } from "../utils/sweetAlert";

function TaskCard({ todo, index }: { todo: ToDo, index: number }): ReactElement {

  const { checkNote, deleteNote } = useToDo();

  // These two states below are temporary states to mock the process of checking and deletion on client

  const handleCheckNote = () => {
    checkNote(todo.id, todo.isChecked, index)
      .then(() => {
        MyToast.fire({
          icon: "success",
          text: `Your note has been ${
            todo.isChecked ? "unchecked" : "checked"
          }!`,
        });
      })
      .catch(() => {
        MyToast.fire({
          icon: "error",
          text: "There was an error while checking your task",
        });
      });
  };

  const handleDeleteNote = () => {
    confirmDelete()
      .then((result) => {
        if (result.isConfirmed) {
          return deleteNote(todo.id, index);
        }
      })
      .then(() => {
        MyToast.fire({
          icon: "success",
          text: "Your note has been deleted!",
        });
      })
      .catch(() => {
        MyToast.fire({
          icon: "error",
          text: "There was an error while deleting your task",
        });
      });
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div
      style={{ backgroundColor: todo.cardColor }}
      className={`w-64 aspect-square rounded-xl p-4 flex flex-col shadow-xl mb-8`}
    >
      <div className="flex justify-start items-center">
        <p className={todo.isChecked? "line-through" : ""}>
          {formatDate(todo.date)}
        </p>
      </div>
      <div className="mt-4">
        <p
          className={` font-semibold text-lg ${
            todo.isChecked? "line-through" : ""
          }`}
        >
          {todo.note}
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div
          onClick={handleCheckNote}
          className="w-8 aspect-square bg-slate-800 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-700"
        >
          <i
            className={`fa-solid fa-check fa-lg ${
              todo.isChecked ? "text-yellow-300" : "text-white"
            }`}
          ></i>
        </div>
        <div
          onClick={handleDeleteNote}
          className="w-8 aspect-square bg-slate-800 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-slate-700"
        >
          <i className="fa-solid fa-trash text-white fa"></i>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

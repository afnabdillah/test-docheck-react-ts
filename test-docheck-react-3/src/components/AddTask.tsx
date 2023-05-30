import { ReactElement, useState, ChangeEvent, FormEvent } from "react";
import useToDo from "../hooks/useToDo";
import MyToast from "../utils/sweetAlert";

function AddTask(): ReactElement {

  const [input, setInput] = useState({
    note: "",
    date: "",
  });

  const { postNote } = useToDo();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onInputSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.note === "" || input.date === "") {
      MyToast.fire({
        icon: "error",
        text: "All inputs must be filled"
      })
    } else if (new Date(input.date) < new Date()) {
      MyToast.fire({
        icon: "error",
        text: "Minimum date is today"
      })
    } else {
      postNote(input)
      .then(() => {
        MyToast.fire({
          icon: "success",
          text: "Your note has been added!"
        })
      })
      .catch(() => {
        MyToast.fire({
          icon: "error",
          text: "There was an error while adding new task"
        })
      })
    }
  };

  return (
    <div className="mb-6">
      <p className="font-bold text-lg mb-2">Add New Task</p>
      <form onSubmit={onInputSubmit} className="flex justify-between min-[300px]:flex-col min-[300px]:items-start lg:flex-row lg:items-center">
        <input
          name="note"
          onChange={onInputChange}
          className="border-gray-500 border-solid border-[1px] rounded-lg px-2 py-2 min-[300px]:mb-4 min-[300px]:w-full lg:w-2/3 lg:mb-0"
          type="text"
        ></input>
        <input
          name="date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          onChange={onInputChange}
          className="px-2 py-2 border-gray-500 border-solid border-[1px] rounded-lg min-[300px]:mb-4 min-[300px]:max-lg:w-full lg:mb-0"
        ></input>
        <input
          type="submit"
          value="Add Task"
          className=" bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-base min-[300px]:mb-4 min-[300px]:max-lg:w-full lg:mb-0"
        />
      </form>
    </div>
  );
}

export default AddTask;

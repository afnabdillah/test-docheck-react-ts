import { useState } from "react";
import { NewToDo, ToDoHook } from "../typeDefinitons";
import { useAppDispatch } from "./reduxHooks";
import { checkToDo, deleteToDo, postNewToDo } from "../redux/todoSlice";
// import { SearchContext } from "../context/searchContext";

export default function useToDo(): ToDoHook {

  // const context = useContext(SearchContext);

  const [isLoading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  
  const colors: string[] = [
    "#f56469",
    "#f0b81f",
    "#45e30b",
    "#0ddea3",
    "#0db3e0",
    "#c486f0",
    "#ed7be0",
    "#4888f0",
    "#e6e619",
    "#fccf03"
  ]

  const postNote = async (data: NewToDo): Promise<void> => {
    try {
      setLoading(!isLoading);
      data.cardColor = colors[Math.floor(Math.random()*colors.length)];
      await dispatch(postNewToDo(data)).unwrap();
      // Re-fetching is disabled temporarily to allow mocking of adding notes
      // await dispatch(fetchToDos()).unwrap();
      setLoading(!isLoading);
    } catch(err) {
      console.log(err);
      setLoading(!isLoading);
    }
  };

  const checkNote = async (id: number, isChecked: boolean): Promise<void> => {
    try {
      setLoading(!isLoading);
      await dispatch(checkToDo({id, isChecked})).unwrap();
      // Re-fetching is disabled temporarily to allow mocking of checking notes
      // await context?.handleSearchTasks();
      setLoading(!isLoading);
    } catch(err) {
      console.log(err);
      setLoading(!isLoading);
    }
  }

  const deleteNote = async (id: number): Promise<void> => {
    try {
      setLoading(!isLoading);
      await dispatch(deleteToDo(id)).unwrap();
      // Re-fetching is disabled temporarily to allow mocking of deleting notes
      // await context?.handleSearchTasks();
      setLoading(!isLoading);
    } catch(err) {
      console.log(err);
      setLoading(!isLoading);
    }
  }


  return {isLoading, postNote, checkNote, deleteNote};
}

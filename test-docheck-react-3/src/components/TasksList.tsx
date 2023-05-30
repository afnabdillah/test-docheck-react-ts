import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import TaskCard from "./TaskCard";
import { fetchToDos } from "../redux/todoSlice";

function TasksList(): ReactElement {
  
  const dispatch = useAppDispatch();

  const todoList = useAppSelector((state) => state.todosReducer.todos);

  const loadingStatus = useAppSelector(
    (state) => state.todosReducer.status.todos
  );

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  return (
    <div className="mb-6">
      <p className="font-bold text-lg mb-2">To Do List</p>
      {loadingStatus === "loading" ? (
        <div className=" min-h-[16rem] flex justify-center items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : todoList.length === 0 ? (
        <div className="flex justify-center items-center min-h-[16rem]">
          <p className=" text-gray-700">Results not found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 min-[300px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {todoList.map((el) => {
            const { id }: { id: number } = el;
            return <TaskCard key={id} todo={el} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TasksList;

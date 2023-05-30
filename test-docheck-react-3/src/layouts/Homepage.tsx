import { ReactElement } from "react";
import SearchTask from "../components/SearchTask";
import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList";
import Header from "../components/Header";

function Homepage(): ReactElement {
  return (
    <>
      <Header />
      <main className=" w-3/4 min-[300px]:w-5/6 mx-auto mt-12">
        <SearchTask />
        <AddTask />
        <TasksList />
      </main>
    </>
  );
}

export default Homepage;

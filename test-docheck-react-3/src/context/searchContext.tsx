import { createContext, ReactElement, useState, ChangeEvent } from "react";
import { SearchContextType } from "../typeDefinitons";
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchToDos } from "../redux/todoSlice";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

function MyProvider(props: any): ReactElement {

  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchTasks = async (): Promise<void> => {
    try {
      await dispatch(fetchToDos(search)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchContext.Provider
      value={{ search, onSearchChange, handleSearchTasks }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export { MyProvider, SearchContext };

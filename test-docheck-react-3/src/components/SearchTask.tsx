import { FormEvent, ReactElement, useContext } from "react";
import { SearchContext } from "../context/searchContext";

function SearchTask(): ReactElement {
  
  const context = useContext(SearchContext);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    context?.handleSearchTasks();
  };

  return (
    <div className="mb-6">
      <p className="font-bold text-lg mb-2">Search Tasks</p>
      <form onSubmit={handleSearchSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            value={context?.search}
            onChange={context?.onSearchChange}
            id="default-search"
            className="block w-full px-4 py-3 pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-white"
            placeholder="Search Tasks..."
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 font-bold hidden"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchTask;

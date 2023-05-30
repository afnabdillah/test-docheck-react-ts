import { ChangeEvent } from "react";

export type ToDo = {
  id: number,
  note: string,
  cardColor: string,
  date: string,
  isChecked: false
}

export type NewToDo = {
  note: string,
  date: string | Date,
  cardColor?: string
}

export type CheckToDo = {
  id: number,
  isChecked: boolean
}

export type ToDoHook = {
  isLoading: boolean,
  postNote: (data: NewToDo) => Promise<void>,
  checkNote: (id: number, isChecked: boolean) => Promise<void> ,
  deleteNote: (id: number) => Promise<void>
}

export type SearchContextType = {
  search: string,
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSearchTasks: () => Promise<void>
}
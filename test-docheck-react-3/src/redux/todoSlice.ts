import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CheckToDo, NewToDo, ToDo } from "../typeDefinitons";

// const base_url = "http://localhost:3000";
const base_url = "https://my-json-server.typicode.com/afnabdillah/test-docheck-server";

export const fetchToDos = createAsyncThunk(
  "todos/fetchToDos",
  // if you type your function argument here
  async (search: string | undefined, { rejectWithValue }) => {
    try {
      search = search || "";
      const response = await fetch(`${base_url}/toDoList?note_like=${search}`);
      if (!response.ok) {
        throw {
          message: "Something went wrong!",
        };
      }
      let data = await response.json();
      data.sort((a: ToDo, b: ToDo) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const postNewToDo = createAsyncThunk(
  "todos/postNewToDo",
  // if you type your function argument here
  async (data: NewToDo, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_url}/toDoList`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw {
          message: "Something went wrong!",
        };
      }
      const result = await response.json();
      console.log(result, "<<<< ini result add note");
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const checkToDo = createAsyncThunk(
  "todos/checkToDo",
  // if you type your function argument here
  async ({id, isChecked}: CheckToDo, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_url}/toDoList/${id}`, {
        method: "PATCH",
        body: JSON.stringify({isChecked: !isChecked}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw {
          message: "Something went wrong!",
        };
      }
      const result = await response.json();
      console.log(result, "<<<< ini result hasil check id", id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteToDo = createAsyncThunk(
  "todos/deleteToDo",
  // if you type your function argument here
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_url}/toDoList/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw {
          message: "Something went wrong!",
        };
      }
      const result = await response.json();
      console.log(result, "<<<< ini result hasil delete id", id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

interface ToDosState {
  todos: ToDo[];
  status: {
    todos: "idle" | "loading" | "failed",
    postNewToDo: "idle" | "loading" | "failed",
    checkToDo: "idle" | "loading" | "failed",
  };
}

const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    todos: [],
    status: {
      todos: "idle",
      postNewToDo: "idle",
      checkToDo: "idle",
    },
  } as ToDosState,
  reducers: {
    searchTasksSuccess(state, action) {
      state.todos = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.status.todos = "loading";
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.status.todos = "idle";
        state.todos = action.payload;
      })
      .addCase(fetchToDos.rejected, (state) => {
        state.status.todos = "failed";
      })
      .addCase(postNewToDo.pending, (state) => {
        state.status.postNewToDo = "loading";
      })
      .addCase(postNewToDo.fulfilled, (state, action: PayloadAction<ToDo>) => {
        state.status.postNewToDo = "idle";
        state.todos.unshift(action.payload);
      })
      .addCase(postNewToDo.rejected, (state) => {
        state.status.postNewToDo = "failed";
      })
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = todoSlice
// Extract and export each action creator by name
export const { searchTasksSuccess } = actions

export default reducer;

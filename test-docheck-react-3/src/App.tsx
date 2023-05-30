import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import Homepage from "./layouts/Homepage";
import { MyProvider } from "./context/searchContext";

function App(): ReactElement {
  return (
    <Provider store={store}>
      <MyProvider>
        <Homepage />
      </MyProvider>
    </Provider>
  );
}

export default App;

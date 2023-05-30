import { ReactElement } from "react";
import Item from "./components/Item";
import { ItemProvider } from "./contexts/ItemContext";

function Main(): ReactElement {

  return (
    <ItemProvider>
      <Item />
    </ItemProvider>
  );
}

export default Main;
